$(function () {

    let i = 0;
    $('#button').on('click', function () {
        const shimozono = {
            pict : "shimozono3.png"
        };
        const spimg = {
            pict : "picture/hammock_jiritsu_man.png",
            top  : '40%',
            left : '5%',
            height : '150px'
        };

            i = i + 1
            if ((i % 3) == 1) {
                $('.character2').html('<img src="picture/'+shimozono.pict+'">');

            } else if ((i % 3) == 2){
                $('.character2').html('<img src="picture/niidome3.png"' + '>');
            } else if ((i % 3) == 0){
                $('.character2').html('<img src='+ spimg.pict +'>');
                $('.character2 img').css({'top':spimg.top,'left':spimg.left,'height':spimg.height});
            }else {
                $('.character2').html('');

            }
    })
});
