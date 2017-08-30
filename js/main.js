
$(function () {
    //加载头部和底部
    $(".container .main").before(domJSON.header);
    // 判断浏览器宽度改变主体样式适应
    (function () {
        resizeW();
        window.onresize = resizeW;
    })();
});

// 控制自适应宽度
function resizeW() {
    var dw = $(window).width();
    if (dw > 1440) {
        $('.container').css('width', '1440px');
        // $(".container .main").css('width', '1099px');
        $(".container .main").css({
            'width': '1058px',
            'left': '7px'
        });
        // $(".container .header").css('width', '1100px');
        // $(".container .footer").css('width', '1099px');
    } else if (dw > 1366) {
        $('.container').css('width', '1366px');
        // $(".container .main").css('width', '1000px');
        $(".container .main").css({
            'width': '962px',
            'left': '7px'
        });
        // $(".container .header").css('width', '1001px');
        // $(".container .footer").css('width', '1001px');
    } else if (dw > 1280) {
        $('.container').css('width', '1280px');
        // $(".container .main").css('width', '900px');
        $(".container .main").css({
            'width': '865px',
            'left': '7px'
        });
        // $(".container .header").css('width', '901px');
        // $(".container .footer").css('width', '901px');
    } else {
        $('.container').css('width', '1045px');
        // $(".container .main").css('width', '695px');
        $(".container .main").css({
            'width': '668px',
            'left': '5px'
        });
        // $(".container .header").css('width', '695px');
        // $(".container .footer").css('width', '695px');
    }
}





