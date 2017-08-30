
// 章节目录结构
var chapterList = [];
if(localStorage.getItem("chapterList")){
	updateChapterLocal();
}else{
	chapterList = [
	    {
	        title:'第一章 幼儿创造性思维概述',
	        href:'http://127.0.0.1:8020/web36/template/chapter01/index.html#page=home',
	        chapter:[
	            {
	                title:'第一节 创造性思维及其内涵',
	                href:'http://127.0.0.1:8020/web36/template/chapter01/index.html#page=s00',
	                status:0
	            },
	            {
	                title:'第二节 幼儿思维能力发展的特点',
	                href:'http://127.0.0.1:8020/web36/template/chapter01/index.html#page=s01',
	                status:0
	            },
	            {
	                title:'第三章 幼儿创造性思维能力培养与教学活动',
	                href:'http://127.0.0.1:8020/web36/template/chapter01/index.html#page=s02',
	                status:0
	            }
	        ]
	    },
	    {
	        title:'第二章  幼儿创造性思维训练培养内容',
	        href:'http://127.0.0.1:8020/web36/template/chapter02/index.html#page=home',
	        chapter:[
	            {
	                title:'第一节  创造性思维及其内涵',
	                href:'http://127.0.0.1:8020/web36/template/chapter02/index.html#page=s00',
	                status:0
	            },
	            {
	                title:'第二节  幼儿思维能力发展的特点',
	                href:'http://127.0.0.1:8020/web36/template/chapter02/index.html#page=s01',
	                status:0
	            }
	        ]
	    }
	];
}

//将章节目录结构存入本地存储
function setChapterLocal(){
	localStorage.setItem("chapterList",JSON.stringify(chapterList));
}
//更新章节目录
function updateChapterLocal(){
	chapterList = JSON.parse(localStorage.getItem("chapterList"));
}

//存储组件
var domJSON = {
    header: '<div class="nav"><ul><li class="active"><a href="#">云翼信息</a></li><li><a href="http://127.0.0.1:8020/web36/index.html">首页</a></li><li><a href="#">课程指南</a></li><li><a href="#">学习内容</a></li><li><a href="#">教师介绍</a></li><li><a href="#">制作团队</a></li></ul></div><div class="header"></div>',
    footer: '<div class="footer"><div class="den"></div><ul class="action"></ul></div>',
    ball: '<div class="ball"><div class="b1"><img src="../../images/note.png" alt="笔记"><p>笔记</p></div><div class="b2"><img src="../../images/shuqian.png" alt="书签"><p>书签</p></div><div class="b3"><img src="../../images/pregress.png" alt="进度"><p>进度</p></div><div class="b4"><a href="#page=homework"><img src="../../images/work.png" alt="作业"><p>作业</p></a></div><img src="../../images/action.png" alt="action" /></div>',
    pop: '<div class="pop"><div class="pop-header"><h3>笔记</h3><span>x</span></div><div class="pop-main"></div></div>',
    position:'<ul class="breadcrumb">\
		            <li>您当前的位置：</li>\
		            <li><a href="javascript:void(0)">首页</a>&nbsp;>&nbsp;</li>\
		            <li><a href="javascript:void(0)">学习内容</a>&nbsp;>&nbsp;</li>\
		            <li class="pos_chapter"><a href="#page=home"></a></li>\
		        </ul>',
	action:'<ul class="action">\
				<li class="chapter">\
					<a href="javascript:void(0)">章节目录</a>\
					<div class="list">\
						<img src="../../images/chapter_bg.png" />\
						<ul></ul>\
					</div>\
				</li>\
				<li><a href="javascript:void(0)" class="setShuqian">加入书签</a></li>\
			</ul>',
	chapter:localStorage.getItem('chapter')||setChapterList(chapterList)
}

//定义章节需要加载的组件
var chapterArr = {
    c01: [domJSON.ball, domJSON.pop, domJSON.position, domJSON.action]
}

$(function () {
    //加载头部和底部
    $(".container .main").before(domJSON.header).after(domJSON.footer);
    // 判断浏览器宽度改变主体样式适应
    (function () {
        resizeW();
        window.onresize = resizeW;
    })();
});


//处理顶部位置
var oBreadcrumb = $('.container .breadcrumb');

// 控制自适应宽度
function resizeW() {
    var dw = $(window).width();
    if (dw > 1440) {
        $('.container').css('width', '1440px');
        // $(".container .main").css('width', '1099px');
        $(".container .main").css({'width':'1058px','left':'7px'});
        $(".container .header").css('width', '1100px');
        $(".container .footer").css('width', '1099px');
    } else if (dw > 1366) {
        $('.container').css('width', '1366px');
        // $(".container .main").css('width', '1000px');
        $(".container .main").css({'width':'962px','left':'7px'});
        $(".container .header").css('width', '1001px');
        $(".container .footer").css('width', '1001px');
    } else if (dw > 1280) {
        $('.container').css('width', '1280px');
        // $(".container .main").css('width', '900px');
        $(".container .main").css({'width':'865px','left':'7px'});
        $(".container .header").css('width', '901px');
        $(".container .footer").css('width', '901px');
    } else {
        $('.container').css('width', '1045px');
        // $(".container .main").css('width', '695px');
        $(".container .main").css({'width':'668px','left':'5px'});
        $(".container .header").css('width', '695px');
        $(".container .footer").css('width', '695px');
    }
}

//封装加载组件函数
function load(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(".container").append(arr[i]);
    }
}

//数字补零
Number.prototype.profixZero = function(n){
	if(n > this.toString().length){
		var str = new Array(n).join(0) + this;
		return str.slice(-n);
	}
	return parseInt(this.toString());
}


//获取指定key的hash值
function getHash(key, url) {
    var hash;
    if (!!url) {
        hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
        hash = (hash == url) ? "" : hash;
    } else {
        hash = self.location.hash;
    }

    hash = "" + hash;
    hash = hash.replace(/^[?#]/, '');
    hash = "&" + hash;
    var val = hash.match(new RegExp("[\&]" + key + "=([^\&]+)", "i"));
    if (val == null || val.length < 1) {
        return null;
    } else {
        return decodeURIComponent(val[1]);
    }
}

function setChapterList(arr){
    var li = '';
    for(var i=0;i<arr.length;i++){
        li += '<li><dl><dt><a href="'+arr[i].href+'">'+arr[i].title+'</a></dt>';
        var dd = '';
        for(var j=0;j<arr[i].chapter.length;j++){
            dd += '<dd><a href="'+arr[i].chapter[j].href+'">'+arr[i].chapter[j].title+'</a></dd>';
        }
        li += dd+'</dl></li>'
    }
    return li;
}
