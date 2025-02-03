// アコーディオン
$(function () {
  $(".is-accordion .is-accordion__toggle").click(function () {
    $(this).next("ul").slideToggle(200);
    $(this).toggleClass("is-accordion__open");
  });
});

// page-top
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(document).ready(function(){
    $("#page-top").hide();
    $(window).on("scroll", function() {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#page-top").css({
                "position":"absolute", 
                "bottom": footHeight - 22
            });
        } else { 
            $("#page-top").css({
                "position":"fixed",
                "bottom": "20px" 
            });
        }
    });
    $('#page-top').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

// ページ内のリンクずれ
jQuery(function(){
    var windowWidth = $(window).width();
    var windowSm = 768; // スマホに切り替わる横幅
      if (windowWidth <= windowSm) {
        var headerHight = 50; // スマホのヘッダー等の高さ分の数値を入れる
       } else {
        var headerHight = 50; // PC のヘッダー等の高さ分の数値を入れる
      }
    jQuery('a[href^=#]').click(function() {
    var speed = 800;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    console.log(target.offset().top, href);
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
  });
