
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

//存储组件
var domJSON = {
    header: '<div class="nav">\
			    <ul>\
				    <li class="active"><a href="#">云翼信息</a></li>\
				    <li><a href="http://127.0.0.1:8020/web36/index.html">首页</a></li>\
				    <li><a href="http://127.0.0.1:8020/web36/intro.html">课程指南</a></li>\
				    <li><a href="http://127.0.0.1:8020/web36/course.html">学习内容</a></li>\
				    <li><a href="http://127.0.0.1:8020/web36/teacher.html">教师介绍</a></li>\
				    <li><a href="http://127.0.0.1:8020/web36/team.html">制作团队</a></li>\
			    </ul>\
		    </div>\
		    <div class="header"></div>',
    footer: '<div class="footer">\
			    <div class="den"></div>\
			    <ul class="action"></ul>\
		    </div>',
    ball: '<div class="ball">\
			    <div class="b1">\
			    	<img src="../../images/note.png" alt="笔记">\
			    	<p>笔记</p>\
			    </div>\
			    <div class="b2">\
				    <img src="../../images/shuqian.png" alt="书签">\
				    <p>书签</p>\
			    </div>\
			    <div class="b3">\
				    <img src="../../images/pregress.png" alt="进度">\
				    <p>进度</p>\
			    </div>\
			    <div class="b4">\
			    	<a href="#page=homework"><img src="../../images/work.png" alt="作业"><p>作业</p></a>\
			    </div>\
			    <img src="../../images/action.png" alt="action" />\
    		</div>',
    pop: '<div class="pop">\
		    <div class="pop-header">\
			    <h3>笔记</h3>\
			    <span>x</span>\
		    </div>\
		    <div class="pop-main"></div>\
    	</div>',
    position:'<ul class="breadcrumb">\
		            <li>您当前的位置：</li>\
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
    common: [domJSON.ball, domJSON.pop, domJSON.position, domJSON.action]
}

//处理并生成章节内容
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