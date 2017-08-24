$(function(){
	//加载章节所需要的组件
    load(chapterArr.c01);
    //控制路由
    $.history.init(function (hash) {
        var page = getHash("page");
        switch(page){
            case 'ch01':
                $(".container .main").load("./pages/home.html");
                break;
            case 's0100':
                $(".container .main").load("./pages/s0100.html");
                break;
            case 's0101':
                $(".container .main").load("./pages/s0101.html");
                break;
        }
    });
    //控制功能球运动的js
    (function () {
        var lock = true;
        $('.ball').mouseover(function (e) {
            $(this).stop().animate({
                "opacity": 0.9
            });
            e.cancelBubble;
            e.stopPropagation();
        }).mouseout(function () {
            if (lock) {
                $(this).stop().animate({
                    "opacity": 0.5
                });
            }
        }).on('click', function () {
            if (lock) {
                $('.b1').stop().animate({
                    "opacity": 1,
                    "left": 0,
                    "top": 60
                });
                $('.b2').stop().animate({
                    "opacity": 1,
                    "left": 0,
                    "top": 0
                });
                $('.b3').stop().animate({
                    "opacity": 1,
                    "left": 0,
                    "bottom": 60
                });
                $('.b4').stop().animate({
                    "opacity": 1,
                    "left": 0,
                    "bottom": 0
                });
            } else {
                $('.b1').stop().animate({
                    "opacity": 0,
                    "left": 0,
                    "top": 121
                })
                $('.b2').stop().animate({
                    "opacity": 0,
                    "right": 0,
                    "top": 121
                })
                $('.b3').stop().animate({
                    "opacity": 0,
                    "left": 0,
                    "bottom": 121
                })
                $('.b4').stop().animate({
                    "opacity": 0,
                    "right": 0,
                    "bottom": 121
                })
            }
            lock = !lock;
        });
        //控制球体随页面上下滚而上下滚
        window.onscroll = function (event) {
            var top = 517 + ($(this).scrollTop() || document.documentElement.scrollTop);
            $('.ball').animate({
                'top': top
            }, 10, 'swing')
        }
    })();
        
    // 弹窗
    (function () {
	    //时间戳转换
	    function getLocalTime(nS) {     
	   		return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
		}
		
    	var aNoteText = [];	//存储接收后台存入的值
    	//模拟后台传入数据-------------------------------------------平台对接后删除
    	if(localStorage.getItem("note")){
    		aNoteText = JSON.parse(localStorage.getItem("note"));
    	}
		//设置笔记内容
        function setNote() {
        	var sNoteText = '';	//生成笔记内容数据，后面用for循环生成
        	for(var i=0; i<aNoteText.length; i++){
    			sNoteText += '<li><p><span>'+aNoteText[i].note+'</span><span class="del">删除</span></p><div><span>'+aNoteText[i].time+'</span></div></li>'
    		}
            return '<div class="note"><ul>' + sNoteText + '</ul><textarea></textarea><div><button type="button" class="addNote">添加</button></div></div>';
        }

	    //添加笔记和删除笔记
	   	setTimeout(function (){
	    	var oPopmain = $('.pop .pop-main');
	    	var time = null;
	    	
	    	oPopmain.on("click",function(e){
	    		oEvent = e || window.event;
	    		time = new Date();
	    		sNoteText = '';
				
	    		if(oEvent.target.className.indexOf('addNote') > -1 && oPopmain.find("textarea").val() != ""){	//点击添加笔记事件
		    		aNoteText.push({note:oPopmain.find("textarea").val(),time:getLocalTime(time.getTime()/1000)});
		    		
		    		oPopmain.html(setNote());
		    		oPopmain.find("textarea").val("");
		    		//本地存储---------------------------------------------模拟存入后台，对接后台后删除
		    		localStorage.setItem("note",JSON.stringify(aNoteText));
		    		//console.log(JSON.parse(localStorage.getItem("note")));
		    		
	    		}else if(oEvent.target.className.indexOf('del') > -1){//点击删除笔记
					if($(this).find("div").hasClass("note")){
		    			aNoteText.splice($(oEvent.target).parents("li").index(),1);
			    		oPopmain.html(setNote());
			    		oPopmain.find("textarea").val("");
					}
		    		//本地存储---------------------------------------------模拟存入后台，对接后台后删除
		    		localStorage.setItem("note",JSON.stringify(aNoteText));
	    		}
	    	})
	    },0);
	    
	    
	    




        //设置书签内容
        var shuqianText = "";
        //模拟书签内容数据
        var shuqian_text = '<li><p><span><a href="###">第三章 第二节 XXXXXXXXX</a></span><span class="del">删除</span></p></li>';

        function setShuqian(text) {
            shuqianText = '<div class="shuqian"><ul>' + text + '</ul></div>';
        }
        setShuqian(shuqian_text);

        //设置进度内容
        var pregress = {};
        pregressText = "";
        var studyTime = 0.5; //模拟平台传入学习时间数据
        pregress.lase_page = ['###', '第三章 第二节 XXXXXXXXX'];
        pregress.study = 0;
        pregress.studyTime = studyTime > 1 ? studyTime : "< 1";

        function setPregress(text) {
            pregressText = '<div class="pregress"><p>学习进度：<a href="' + text.lase_page[0] + '">' + text.lase_page[1] + '</a></p><p>学习完成度：' + text.study + '%</p><p>学习时长：' + text.studyTime + '小时</p>'
        }
        setPregress(pregress);
        
        
        //弹窗动画
        $('.b1').on("click", function () {
            $('.pop .pop-main').html(setNote());
            $('.pop .pop-header h3').text("笔记");
            $('.pop').stop().animate({
                "top": 0
            });
        })
        $('.b2').on("click", function () {
            $('.pop .pop-main').html(shuqian_text);
            $('.pop .pop-header h3').text("书签");
            $('.pop').stop().animate({
                "top": 0
            });
        })
        $('.b3').on("click", function () {
            $('.pop .pop-main').html(pregressText);
            $('.pop .pop-header h3').text("进度");
            $('.pop').stop().animate({
                "top": 0
            });
        })
        //关闭弹窗
        $('.pop .pop-header span').on('click', function () {
            $('.pop').stop().animate({
                "top": '-1500px'
            });
        });
    })(); //弹窗结束
});