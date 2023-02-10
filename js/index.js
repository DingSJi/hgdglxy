$(document).ready(function () {
    // 获取元素
    let box = $("#box");
    let div = $(".main>div");

    // 获取配置相关
    let height = $(window).height();
    let width = $(window).width();
    let totalpage = div.length;
    let page = 0;
    let scrollstatus = true; //滚动状态
    let speed = 300;
    let picIndex = 0;

    $(".main>div").height(height);

    //监听窗口变化
    $(window).resize(function () {
        height = $(window).height();
        $(".main>div").height(height);
        width = $(window).width();
        scroll(page, 0);
        div.css("min-width", height / 0.675 + "px");
        $(".footer").css("min-width", height / 0.675 + "px");
    });

    // 监听鼠标滚轮
    document.onmousewheel = scrollDirection;

    // 左边索引相关动作
    $("#sectionIndex li").eq(0).css("background-image", "url(./image/tab_huang.png)");
    $("#sectionIndex li").mouseenter(function () {
        $(this).css("background-image", "url(./image/tab_huang.png)");
    });
    $("#sectionIndex li").mouseleave(function () {
        if (page == $(this).index()) {
            return;
        } else {
            $(this).css("background-image", "url(./image/tab_hui.png)");
        }
    });
    $("#sectionIndex li").click(function () {
        page = $(this).index();
        picIndex = 0;
        slideImg();
        scroll(page, speed);
    });

    //滑动到第几页
    let scroll = function (page, speed) {
        console.log(totalpage);
        $("#sectionIndex li").eq(page).css("background-image", "url(./image/tab_huang.png)");
        for (let i = 0; i < totalpage; i++) {
            if (i == page) {
                $("#sectionIndex li").eq(i).css("background-image", "url(./image/tab_huang.png)");
            } else {
                $("#sectionIndex li").eq(i).css("background-image", "url(./image/tab_hui.png)");
            }
        }
        scrollstatus = false;
        div.animate(
            {
                top: -height * page,
            },
            speed,
            function () {
                setTimeout(() => {
                    scrollstatus = true;
                }, 300);
            }
        );
    };

    // 判断鼠标滑动方向
    function scrollDirection(e) {
        // 禁止滑动的情况
        // if($(".header .video").css("display") == "block" ||
        //     $(".role-info .video").css("display") == "block"){
        //     return;
        // }
        if (scrollstatus) {
            picIndex = 0;
            slideImg();
            if (e.deltaY > 0) {
                page++;
                if (page > 3) {
                    return (page = totalpage - 1);
                } else {
                    // console.log(page)
                    scroll(page, speed);
                }
                console.log("下滑");
            } else {
                page--;
                if (page < 0) {
                    return (page = 0);
                } else {
                    // console.log(page)
                    scroll(page, speed);
                }
                console.log("上滑");
            }
        }
    }

    // 切换方法
    function slideImg() {
        let width = -1 * 262 * picIndex;
        $(".slideShow .cards").animate(
            {
                left: width + "px",
            },
            300
        );
    }
    // 轮播切换
    $(".slide .leftArrow").click(function () {
        picIndex--;
        if (picIndex < 0) {
            picIndex = 0;
            return;
        }
        slideImg();
    });
    $(".slide .rightArrow").click(function () {
        picIndex++;

        let piclength = $(this).siblings(".slideShow").find(".card").length;
        if (picIndex > piclength - 4) {
            //总数减4
            picIndex = piclength - 4;
            return;
        }
        slideImg();
    });

    // ---------------------------------------------------------------------
    // 此处修改
    // 播放视频
    $(".cards .card").click(function () {
        let index = $(this).index();
        console.log("page,index", page, index);
        switch (page) {
            // 指导思想
            case 0:
                switch (index) {
                    case 0:
                        $(".videos .video-box video").attr("src", "./videos/习近平论科技创新.mp4");
                        $(".videos").show();
                        break;
                    case 1:
                        $(".videos .video-box video").attr("src", "./videos/习近平论高等教育.mp4");
                        $(".videos").show();
                        break;
                    case 2:
                        $(".videos .video-box video").attr("src", "./videos/习近平的教师情.mp4");
                        $(".videos").show();
                        break;
                    case 3:
                        $(".videos .video-box video").attr("src", "./videos/习近平的学生情.mp4");
                        $(".videos").show();
                        break;
                }
                break;
            // 诺贝尔奖
            case 1:
                switch (index) {
                    case 0:
                        $(".videos .video-box video").attr("src", "./videos/中微子.mp4");
                        $(".videos").show();
                        break;
                    case 1:
                        $(".videos .video-box video").attr("src", "./videos/复杂系统");
                        $(".videos").show();
                        break;
                    case 2:
                        $(".videos .video-box video").attr("src", "./videos/化学奖.mp4");
                        $(".videos").show();
                        break;
                    case 3:
                        $(".videos .video-box video").attr("src", "./videos/文学奖.mp4");
                        $(".videos").show();
                        break;
                    case 4:
                        $(".videos .video-box video").attr("src", "./videos/物流学奖光镊.mp4");
                        $(".videos").show();
                        break;
                    case 5:
                        $(".videos .video-box video").attr("src", "./videos/气候变化.mp4");
                        $(".videos").show();
                        break;
                    case 6:
                        $(".videos .video-box video").attr("src", "./videos/诺贝尔物理学奖、生理学或医学奖.mp4");
                        $(".videos").show();
                        break;
                    case 7:
                        $(".videos .video-box video").attr("src", "./videos/光刻机.mp4");
                        $(".videos").show();
                        break;
                    case 8:
                        $(".videos .video-box video").attr("src", "./videos/核磁共振.mp4");
                        $(".videos").show();
                        break;
                }
                break;
            // 超级工程
            case 2:
                switch (index) {
                    case 0:
                        $(".videos .video-box video").attr("src", "./videos/火星探测工程.mp4");
                        $(".videos").show();
                        break;
                    case 1:
                        $(".videos .video-box video").attr("src", "./videos/中国空间站工程.mp4");
                        $(".videos").show();
                        break;
                    case 2:
                        $(".videos .video-box video").attr("src", "./videos/港珠澳大桥.mp4");
                        $(".videos").show();
                        break;
                }
                break;
            // 世界一流大学
            case 3:
                switch (index) {
                    case 0:
                        $(".videos .video-box video").attr("src", "./videos/宾夕法尼亚大学.mp4");
                        $(".videos").show();
                        break;
                    case 1:
                        $(".videos .video-box video").attr("src", "./videos/佐治亚理工学院.mp4");
                        $(".videos").show();
                        break;
                    case 2:
                        $(".videos .video-box video").attr("src", "./videos/哈佛大学.mp4");
                        $(".videos").show();
                        break;
                    case 3:
                        $(".videos .video-box video").attr("src", "./videos/牛津大学.mp4");
                        $(".videos").show();
                        break;
                    case 4:
                        $(".videos .video-box video").attr("src", "./videos/斯坦福大学.mp4");
                        $(".videos").show();
                        break;
                }
        }
    });
    $(".videos").click(function (e) {
        if (e.target.className == "videos") {
            console.log("outer");
            $(this).find(".video-box video")[0].pause();
            $(e.currentTarget).hide();
        } else {
            console.log("inner");
            $(e.target).paused = true;
        }

        // $(e.currentTarget).hide();
    });
});
