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
                    "top": 122
                })
                $('.b2').stop().animate({
                    "opacity": 0,
                    "right": 0,
                    "top": 122
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
        //设置笔记内容
        var noteText = "";
        //模拟笔记内容数据
        var note_text = '<li><p><span>ALSDFLWEOPJMGALljkaldfjlpkpfksfslflassdjljasfljdfjwfjjgaljflasjfljl</span><span class="del">删除</span></p><div><span>2017-8-18</span></div></li><li><p><span>ALSDFLWEOPJMGALljkaldfjlpkpfksfslflassdjljasfljdfjwfjjgaljflasjfljl</span><span class="del">删除</span></p><div><span>2017-8-18</span></div></li>';

        function setNote(text) {
            noteText = '<div class="note"><ul>' + text + '</ul><textarea></textarea><div><button type="button">添加</button></div></div>';
        }
        setNote(note_text);


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
            $('.pop .pop-main').html(noteText);
            $('.pop .pop-header h3').text("笔记");
            $('.pop').stop().animate({
                "top": 0
            });
        })
        $('.b2').on("click", function () {
            $('.pop .pop-header h3').text("书签");
            addShuqian(shuqian_text.join(''));
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
        })
    })(); //弹窗结束
});