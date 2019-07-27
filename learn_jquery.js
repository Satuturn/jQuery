// $( ) 搜尋物件
// document 網頁文件
// .執行某件事
// ready( ) 準備完成
// function ( ) { } 匿名函式

$(document).ready(function () {

    // alert("哈哈哈喔耶一喲啦啦");

    $("h1").hide();  // 選取 h1 並設隱藏
    $("h2").hide();  // 選取 h2 並設隱藏

    $(".box1").addClass("orange");

    $(".box2").slideUp(2000).sildeDown(3000);

});

$(".box3").mousemove(function () { 
    $(this).animate({height: "200px"}, 400); 
});

$(".box3").mouseover(function () { 
    $(this).animate({height: "100px"}, 400); 
});

// function A ( ) { } 函式 方法
$(document).ready(function () {
    
});
