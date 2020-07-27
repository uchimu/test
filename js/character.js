$(function () {

//キャラクタークラス
    function Character(_name, _picture, _top, _left) {
        const name = _name;
        const picture = _picture;
        const top = _top;
        const left = _left;

        this.getName = function () {
            return name;
        };
        this.getPicture = function () {
            return picture;
        };
        this.getTop = function () {
            return top;
        };
        this.getLeft = function () {
            return left;
        };
    }

//キャラクターをインスタンス化
    $('').on('click',function(){
        const shimozono = new Character("Shimozono",'shimozono2.png',35,65);

        $('.character2').html(<img src="picture/"+shimozono.getPicture>);
    })
});
