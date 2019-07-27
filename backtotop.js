$(document).ready(function () {
    $(".btnTop").fadeOut(100)

    $(".btnTop").click(function () { 

        // alert("按了回到頁首的按鈕會發生什麼事");  

        // 尋找 網頁與身體 動畫效果 ({捲動上方:0}, 時間)
        $("html, body").animate({scrollTop:0}, 1000);
    });
        // alert($(window).scrollTop());

        // $(".btnTop").fadeOut(500);

        // 元素 捲動 (匿名函式(){ });
        $(window).scroll(function(){
            if ($(window).scrollTop() > 200) {
                $(".btnTop").fadeIn(500);
            } else {
                $(".btnTop").fadeOut(500);
            }
            });

});
