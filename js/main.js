$(function () {
    //加载头部和底部
    $(".container .main").before(domJSON.header).after(domJSON.footer);
    // 判断浏览器宽度改变主体样式适应
    (function () {
        resizeW();
        window.onresize = resizeW;
    })();
});

//存储组件
var domJSON = {
    header: '<div class="nav"><ul><li class="active"><a href="#">云翼信息</a></li><li><a href="http://127.0.0.1:8020/web36/index.html">首页</a></li><li><a href="#">课程指南</a></li><li><a href="#">学习内容</a></li><li><a href="#">教师介绍</a></li><li><a href="#">制作团队</a></li></ul></div><div class="header"></div>',
    footer: '<div class="footer"><div class="den"></div><ul class="action"></ul></div>',
    ball: '<div class="ball"><div class="b1"><img src="../../images/note.png" alt="笔记"><p>笔记</p></div><div class="b2"><img src="../../images/shuqian.png" alt="书签"><p>书签</p></div><div class="b3"><img src="../../images/pregress.png" alt="进度"><p>进度</p></div><div class="b4"><img src="../../images/work.png" alt="作业"><p>作业</p></div><img src="../../images/action.png" alt="action" /></div>',
    pop: '<div class="pop"><div class="pop-header"><h3>笔记</h3><span>x</span></div><div class="pop-main"></div></div>'
}
//定义章节需要加载的组件
var chapterArr = {
    c01: [domJSON.ball, domJSON.pop]
}
// 控制自适应宽度
function resizeW() {
    var dw = $(window).width();
    if (dw > 1440) {
        $('.container').css('width', '1440px');
        $(".container .main").css('width', '1099px');
        $(".container .header").css('width', '1100px');
        $(".container .footer").css('width', '1099px');
    } else if (dw > 1366) {
        $('.container').css('width', '1366px');
        $(".container .main").css('width', '1000px');
        $(".container .header").css('width', '1001px');
        $(".container .footer").css('width', '1001px');
    } else if (dw > 1280) {
        $('.container').css('width', '1280px');
        $(".container .main").css('width', '900px');
        $(".container .header").css('width', '901px');
        $(".container .footer").css('width', '901px');
    } else {
        $('.container').css('width', '1045px');
        $(".container .main").css('width', '695px');
        $(".container .header").css('width', '695px');
        $(".container .footer").css('width', '695px');
    }
}

//封装加载组件函数
function load(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(".container .main").after(arr[i]);
    }
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
