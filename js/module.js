//配置信息
var config = {
	path:"http://127.0.0.1:8020/HubildWorkPlace/web36/"		//课程网站所在域名
}



// 章节目录结构
var chapterList = [];
if(localStorage.getItem("chapterList")){
	updateChapterLocal();
}else{
	chapterList = [
	    {
	        title:'第一章 数学的对象、方法与价值',
	        chapter:[
	            {
	                title:'第一节 数学的对象',
	                status:0
	            },
	            {
	                title:'第二节 数学的方法',
	                status:0
	            },
	            {
	                title:'第三节 数学的价值',
	                status:0
	            }
	        ]
	    },
	    {
	        title:'第二章 数学中的辩证性',
	        chapter:[
	            {
	                title:'第一节 动中有静',
	                status:0
	            },
	            {
	                title:'第二节 变中有恒',
	                status:0
	            },
	            {
	                title:'第三节 乱中有序',
	                status:0
	            },
	            {
	                title:'第四节 异中有同',
	                status:0
	            },
	            {
	                title:'第五节 情中有理',
	                status:0
	            },
	            {
	                title:'第六节 理中有用',
	                status:0
	            }
	        ]
	    },
	    {
	        title:'第三章 数学美学赏析',
	        chapter:[
	            {
	                title:'第一节 数学美的根源特征',
	                status:0
	            },
	            {
	                title:'第二节 数学美的特征解析',
	                status:0
	            },
	            {
	                title:'第三节 数学方法之美',
	                status:0
	            },
	            {
	                title:'第四节 数学结论之美',
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
				    <li><a href="'+config.path+'index.html">首页</a></li>\
				    <li><a href="'+config.path+'intro.html">课程指南</a></li>\
				    <li><a href="'+config.path+'course.html">学习内容</a></li>\
				    <li><a href="'+config.path+'teacher.html">教师介绍</a></li>\
				    <li><a href="'+config.path+'team.html">制作团队</a></li>\
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
    var tmp = 0;
    for(var i=0;i<arr.length;i++){
    	tmp = (i+1).profixZero(2);
        li += '<li><dl><dt><a href="'+config.path+'template/chapter'+tmp+'/index.html">'+arr[i].title+'</a></dt>';
        var dd = '';
        for(var j=0;j<arr[i].chapter.length;j++){
            dd += '<dd><a href="'+config.path+'template/chapter'+tmp+'/index.html#page=s'+j.profixZero(2)+'">'+arr[i].chapter[j].title+'</a></dd>';
        }
        li += dd+'</dl></li>'
    }
    return li;
}