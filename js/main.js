
$(function () {
    //加载头部和底部
    $(".container .main").before(domJSON.header);
    // 判断浏览器宽度改变主体样式适应
    (function () {
        resizeW();
        window.onresize = resizeW;
    })();
    
    //加载首页章节列表
	(function(){
		var sLi = "";
		for(var i=0; i<chapterList.length; i++){
			sLi += '<li><a href="'+config.path+'template/chapter'+(i+1).profixZero(2)+'/index.html">'+chapterList[i].title+'</a></li>';
		}
		setTimeout(function(){
			$('.main .homelist').html(sLi);
		})
	})();
});

// 控制自适应宽度
function resizeW() {
    var dw = $(window).width();
    if (dw > 1440) {
        $('.container').css('width', '1440px');
        $(".container .main").css({
            'width': '1058px',
            'left': '7px'
        });
    } else if (dw > 1366) {
        $('.container').css('width', '1366px');
        $(".container .main").css({
            'width': '962px',
            'left': '7px'
        });
    } else if (dw > 1280) {
        $('.container').css('width', '1280px');
        $(".container .main").css({
            'width': '865px',
            'left': '7px'
        });
    } else {
        $('.container').css('width', '1045px');
        $(".container .main").css({
            'width': '668px',
            'left': '5px'
        });
    }
}







