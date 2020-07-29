$(function () {
    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------
    //通信関連
    //----------------------------------------
    // Ajax通信を開始
    function get(method, arg) {
        //alert('flag2 :'+JSON.stringify(arg))
        $.ajax({
            type: "POST", //HTTP通信の種類を設定する。post or get
            url: "http://localhost:57772/test/TrainingUser.pageConf.cls", //リクエストを送信する先のURL
            async: false, //非同期通信フラグ。初期値ではtrue（非同期通信）。falseに設定（同期通信）した場合、通信に応答があるまでブラウザはロックされ、操作を受け付けなくなる。
            cache: false, //通信結果をキャッシュしたくない場合には、falseを設定。
            dataType: 'text', //サーバから返されるデータの型を指定
            data: {
                method: method,
                arg: JSON.stringify(arg)
            } //サーバに送信する値。JSON.stringify(arg)はリストをJavaScriptオブジェクトを JSON 文字列に変換。
        }).done(function (res) {
            console.log("成功：　" + res); //通信失敗時の処理を記述
            distribute(res); //通信成功時の処理を記述
        }).fail(function (res) {
            console.log("失敗：　" + res); //通信失敗時の処理を記述
        });
    };
    //-----------------------------------------------------------------------------
    //サーバーから受け取ったステータスコードによって処理を振り分ける
    //-----------------------------------------------------------------------------
    function distribute(res) {
        const ref = JSON.parse(res); //JSON形式で返ってきた結果をオブジェクトに変換
        let dataAry = []; //取得したデータを入力画面に送る用の配列
        console.log(ref);
        const login = sessionStorage.getItem("logined");

        if (ref.status == 0) {
            alert("サーバー側の処理中にエラーが発生しました");
            return;
        };

        switch (ref.data.statusCd) {
            case 0:
                // 0   : サーバー側での登録失敗（%SAVEの失敗）
                alert("サーバー側の処理中にエラーが発生しました");
                return;
            case 1:
                // 1   : 新規登録処理成功
                document.inputform.reset();
                alert('登録に成功しました');
                if (login == 1) { //ログイン済みか確認し、新規登録ならログイン画面へ遷移
                    return;
                } else {
                    goMain();
                    return;
                };
            case 2:
                // 2   : 検索処理成功
                globalKeepId = ref.data.responce._id; //修正用にIDを取り出す
                dataAry = ref.data.responce;
                //console.log(dataAry);
                set(dataAry); //画面に結果を出力
                return;
            default:
                console.log("Error in statusCd");
                alert("サーバー側の処理中にエラーが発生しました");
                const disp = '検索';
                changeDisplay(disp);
                break;
        };
    };
});
