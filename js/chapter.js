$(function () {
    //加载章节所需要的组件
    load(chapterArr.c01);
    //控制路由
    $.history.init(function (hash) {
        var page = getHash("page");
        switch (page) {
            case null:
                $(".container .main").load("./pages/home.html",function(){
                    $('.action .chapter ul').html(domJSON.chapter);
                });
                break;
            case 'home':
                $(".container .main").load("./pages/home.html",function(){
                    $('.action .chapter ul').html(domJSON.chapter);
                });
                break;
            case 's00':
                $(".container .main").load("./pages/s00.html",function(){
                    $('.action .chapter ul').html(domJSON.chapter);
                });
                break;
            case 's01':
                $(".container .main").load("./pages/s01.html",function(){
                    $('.action .chapter ul').html(domJSON.chapter);
                });
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
        //时间戳转换
        function getLocalTime(nS) {
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
        }

        var aNoteText = []; //存储接收后台存入的值
        //模拟后台传入数据-------------------------------------------平台对接后删除
        if (localStorage.getItem("note")) {
            aNoteText = JSON.parse(localStorage.getItem("note"));
        }
        //设置笔记内容
        function setNote() {
            var sNoteText = ''; //生成笔记内容数据，后面用for循环生成
            for (var i = 0; i < aNoteText.length; i++) {
                sNoteText += '<li><p><span>' + aNoteText[i].note + '</span><span class="del">删除</span></p><div><span>' + aNoteText[i].time + '</span></div></li>'
            }
            return '<div class="note"><ul>' + sNoteText + '</ul><textarea></textarea><div><button type="button" class="addNote">添加</button></div></div>';
        }

        //添加笔记和删除笔记
        setTimeout(function () {
            var oPopmain = $('.pop .pop-main');
            var time = null;

            oPopmain.on("click", function (e) {
                oEvent = e || window.event;
                time = new Date();
                sNoteText = '';

                if (oEvent.target.className.indexOf('addNote') > -1 && oPopmain.find("textarea").val() != "") { //点击添加笔记事件
                    aNoteText.push({
                        note: oPopmain.find("textarea").val(),
                        time: getLocalTime(time.getTime() / 1000)
                    });

                    oPopmain.html(setNote());
                    oPopmain.find("textarea").val("");
                    //本地存储---------------------------------------------模拟存入后台，对接后台后删除
                    localStorage.setItem("note", JSON.stringify(aNoteText));

                } else if (oEvent.target.className.indexOf('del') > -1) { //点击删除笔记
                    if ($(this).find("div").hasClass("note")) {
                        aNoteText.splice($(oEvent.target).parents("li").index(), 1);
                        oPopmain.html(setNote());
                        oPopmain.find("textarea").val("");
                    }
                    //本地存储---------------------------------------------模拟存入后台，对接后台后删除
                    localStorage.setItem("note", JSON.stringify(aNoteText));
                }
            })
        }, 0);


        // 书签
        // 为添加书签按钮绑定事件
        setTimeout(function () {
            $('.main').on('click', setShuqian);
            if ($('.pop-main').length) {
                $('.pop-main').on('click', actionShuqian);
            }
        })
        //设置书签内容
        // 从本地存储获取书签
        var shuqian_text;
        if (localStorage.getItem('shuqian')) {
            shuqian_text = JSON.parse(localStorage.getItem('shuqian'));
        } else {
            shuqian_text = []
        }
        if (shuqian_text.length !== 0) {
            addShuqian(shuqian_text.join(''));
        }
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (item, start) {
                var i;
                if (typeof start === 'number') {
                    i = (start < 0 ? Math.max(0, this.length + start) : start);
                } else {
                    i = 0;
                }
                for (; i < this.length; i++) {
                    if (item === this[i]) {
                        return i;
                    }
                }
                return -1;
            }
        }
        var lock = true;

        function setShuqian(event) {
            if (event.target.className === 'setShuqian') {
                var href = location.href;
                var schapter = $('.breadcrumb>li:eq(2)>a').text();
                var sh2 = $('.main>h2').text().replace(schapter, '');
                var text = '<li><p><span><a href="' + href + '">' + schapter + ' ' + sh2 + '</a></span><span class="del">删除</span></p></li>';
                if (shuqian_text.indexOf(text) !== -1) {
                    alert('此处已有书签');
                    return;
                }
                shuqian_text.push(text);
                localStorage.setItem('shuqian', JSON.stringify(shuqian_text));
                alert('添加书签成功');
                addShuqian(shuqian_text.join(''));
            } else if (event.target.parentNode.className.indexOf("chapter") > -1) { //控制章节显示隐藏
                if (lock) {
                    $(this).find(".list").stop().animate({
                        "bottom": "26px"
                    })
                    lock = !lock;
                } else {
                    $(this).find(".list").stop().animate({
                        "bottom": "-468px"
                    })
                    lock = !lock;
                }
            }

        }

        function addShuqian(text) {
            shuqianText = '<div class="shuqian"><ul>' + text + '</ul></div>';
            setTimeout(function () {
                $('.pop .pop-main').html(shuqianText);
            }, 0);

        }
        // 书签内的点击事件
        function actionShuqian(event) {
            if (event.target.className === 'del') {
                if ($(this).children('div').attr('class') === 'shuqian') {
                    var index = $(event.target).parents('li').index();
                    shuqian_text.splice(index, 1);
                    localStorage.setItem('shuqian', JSON.stringify(shuqian_text));
                    addShuqian(shuqian_text.join(''));
                }
            }
        }
        // end 书签

        //设置进度内容
        var pregress = {
            studyTime: 0,
            study: 0
        };
        pregressText = "";
        var studyTime = 0.5; //模拟平台传入学习时间数据
        pregress.lase_page = ['###', '第三章 第二节 XXXXXXXXX'];
        pregress.study = 0;
        pregress.studyTime = studyTime > 1 ? studyTime : "< 1";

        function setPregress(text) {
            pregressText = '<div class="pregress"><p>学习进度：<a href="' + text.lase_page[0] + '">' + text.lase_page[1] + '</a></p><p>学习完成度：' + text.study + '%</p><p>学习时长：' + text.studyTime + '小时</p>'
        }
        setPregress(pregress);

        pregressText = '\
        <div class="pregress">\
            <div class="left">\
                <h4>学习进度</h4>\
                <ul>\
                    <li>\
                        <a href="###">第一章 XXXXXXXXX</a>\
                        <ol>\
                            <li class="readed"><a href="###">第一节 XXXXXXXXX</a><span><img src="../../images/readed.png" /></span></li>\
                            <li><a href="###">第二节 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</a><span></span></li>\
                        </ol>\
                    </li>\
                    <li>\
                        <a href="###">第一章 XXXXXXXXX</a>\
                        <ol>\
                            <li class="readed"><a href="###">第一节 XXXXXXXXX</a><span><img src="../../images/readed.png" /></span></li>\
                            <li><a href="###">第二节 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</a><span></span></li>\
                        </ol>\
                    </li>\
                </ul>\
            </div>\
            <div class="right">\
                <div class="schedule">\
                    <h4>学习完成度</h4>\
                    <p>0%</p>\
                </div>\
                <div class="time">\
                    <h4>学习时长</h4>\
                    <p>< 1小时</p>\
                </div>\
            </div>\
        </div>';


        //弹窗动画
        $('.b1').on("click", function () {
            $('.pop .pop-main').html(setNote());
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
        });
    })(); //弹窗结束

});