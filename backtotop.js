$(document).ready(function () {
    $(".btnTop").fadeOut(100)

    $(".btnTop").click(function () { 

        // alert("按了回到頁首的按鈕會發生什麼事");  

        // 尋找 網頁與身體 動畫效果 ({捲動上方:0}, 時間)
        $("html, body").animate({scrollTop:0}, 1000);
    });
        // alert($(window).scrollTop());

        // $(".btnTop").fadeOut(500);

    
        // $("#a1").click(function (){ 
        //     var top = $("#section1").position().top;
        //     $("html, body").animate({scrollTop: top}, 1000);
        // });

        // $("#a2").click(function (){ 
        //     var top = $("#section2").position().top;
        //     $("html, body").animate({scrollTop: top}, 1000);
        // });


        

        // 元素 捲動 (匿名函式(){ });
        $(window).scroll(function(){
            if ($(window).scrollTop() > 200) {  // 如果 螢幕頂端 > 200
                $(".btnTop").fadeIn(500);       // 顯示按鈕
            } else {                            // 否則
                $(".btnTop").fadeOut(500);      // 隱藏按鈕
            }
            });

});
