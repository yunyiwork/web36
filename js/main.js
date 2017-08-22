$(function(){
    $(".container .main").before(domJSON.header).after(domJSON.footer);
    // 判断浏览器宽度改变主体样式适应
    (function(){
        resizeW();
        window.onresize = resizeW;
    })();
});

var domJSON = {
    header:'<div class="nav"><ul><li class="active"><a href="#">云翼信息</a></li><li><a href="http://127.0.0.1:8020/web36/index.html">首页</a></li><li><a href="#">课程指南</a></li><li><a href="#">学习内容</a></li><li><a href="#">教师介绍</a></li><li><a href="#">制作团队</a></li></ul></div><div class="header"></div>',
    footer :'<div class="footer"><div class="den"></div><ul class="action"></ul></div>',
    ball:'<div class="ball"><div class="b1"><img src="../../images/note.png" alt="笔记"><p>笔记</p></div><div class="b2"><img src="../../images/shuqian.png" alt="书签"><p>书签</p></div><div class="b3"><img src="../../images/pregress.png" alt="进度"><p>进度</p></div><div class="b4"><img src="../../images/work.png" alt="作业"><p>作业</p></div></div>',
    pop:'<div class="pop"><div class="pop-header"><h3>笔记</h3><span>x</span></div><div class="pop-main"></div></div>'
}
var chapterArr = {
    c01 : [domJSON.ball,domJSON.pop]
}
// 控制自适应宽度
function resizeW(){
    var dw = $(window).width();
    if(dw > 1440){
        $('.container').css('width','1440px');
        $(".container .main").css('width','1099px');
        $(".container .header").css('width','1100px');
        $(".container .footer").css('width','1099px');
    }else if(dw > 1366){
        $('.container').css('width','1366px');
        $(".container .main").css('width','1000px');
        $(".container .header").css('width','1001px');
        $(".container .footer").css('width','1001px');
    }else if(dw > 1280){
        $('.container').css('width','1280px');
        $(".container .main").css('width','900px');
        $(".container .header").css('width','901px');
        $(".container .footer").css('width','901px');
    }else{
        $('.container').css('width','1045px');
        $(".container .main").css('width','695px');
        $(".container .header").css('width','695px');
        $(".container .footer").css('width','695px');
    }
}
function load(arr){
    for(var i = 0; i<arr.length; i++){
        $(".container .main").after(arr[i]);
    }
}
// var nowTime = new Date().toUTCString();
// document.cookie = "chapterUrl=; expires="+nowTime;
// console.error(document.cookie);
if(document.cookie.split(" ")[0].indexOf('lock') < 0){
    document.cookie = "chapterUrl=./pages/home.html; path=/";
}
function getChapterUrl(){
	var cookie = document.cookie.split(" ");
	var chapterUrl = "";
	for(var i = 0; i<cookie.length; i++){
		if(cookie[i].split("=")[0] == "chapterUrl") chapterUrl = cookie[i].split("=")[1].replace(';','');
	}
    //var chapterUrl = document.cookie.split(" ")[0].split("=")[1].replace(';','');
    return chapterUrl;
}

function showPage(){
    console.log(getChapterUrl());
    $.get(getChapterUrl(),function(data,status){
        $(".container .main").html(data);
    })
}

var urlArr = ['./pages/home.html']; //记录用户浏览的页面顺序的数组
var preUrlIndex = 0;

//点击跳转事件
function gotoPage(url){
	urlArr.push(url);	//将用户浏览的页面url推进urlArr数组中
    document.cookie = "chapterUrl="+url+"?lock; path=/";
    showPage();
}

//模拟浏览器后退功能
if (window.history && window.history.pushState) {
    $(window).on('popstate', function() {
	    var hashLocation = location.hash;
	    var hashSplit = hashLocation.split("#!/");
	    var hashName = hashSplit[1];
	
	    if (hashName !== '') {
	      	var hash = window.location.hash;
	        if (hash === '') {
	        	preUrlIndex =  urlArr.length - 2;
	        	urlArr.splice(-1,1);
	        	document.cookie = "chapterUrl="+urlArr[preUrlIndex]+"?lock; path=/";
	        	showPage();
	          	//alert('後退按鈕點擊');
	        }
	    }
    });

    //window.history.pushState('forward', null, './#forward');
}