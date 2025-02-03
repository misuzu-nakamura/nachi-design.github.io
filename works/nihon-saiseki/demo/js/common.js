
// ページ内のリンクずれ
jQuery(function(){
  var windowWidth = $(window).width();
  var windowSm = 768; // スマホに切り替わる横幅
    if (windowWidth <= windowSm) {
      var headerHight = 80; // スマホのヘッダー等の高さ分の数値を入れる
     } else {
      var headerHight = 90; // PC のヘッダー等の高さ分の数値を入れる
    }
  jQuery('a[href^=#]').click(function() {
  var speed = 1000;
  var href= jQuery(this).attr("href");
  var target = jQuery(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top-headerHight;
  console.log(target.offset().top, href);
  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
 });
});

// 別ページからのリンクずれ
$(window).on('load', function() {
  var windowWidth = $(window).width();
  var windowSm = 768; // スマホに切り替わる横幅
    if (windowWidth <= windowSm) {
     var headerHeight = 80; // スマホのヘッダー等の高さ分の数値を入れる
     } else {
     var headerHeight = 90; // PC のヘッダー等の高さ分の数値を入れる
    }
    var url = $(location).attr('href');
      if(url.indexOf("?id=") != -1){
       var speed = 0;
       var id = url.split("?id=");
       var id2 = id[1].split("&");
        console.log(id2);
       var $target = $('#' + id2[0]);
        if($target.length){
          setTimeout(function(){
        console.log($target.offset().top);
           var pos = $target.offset().top-headerHeight;
           $("html, body").animate({scrollTop:pos}, speed, "swing");
          }, 100);
        }
      }
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

// ↓タブ切り替え
$(function() {
  $('ul.c-tabArea li').click(function() {
    var index = $(this).parents('.c-tabContent').find(' ul.c-tabArea li').index(this);
    $(this).parents('.c-tabContent').find('.c-tabContent__item').css('display','none');
    $(this).parents('.c-tabContent').find('.c-tabContent__item').eq(index).fadeIn();
    $(this).parents('.c-tabContent').find('.c-tabArea li').removeClass('select');
    $(this).addClass('select')
  });
});

$(function() {
    // URLを取得
    var url = location.href;
    //URLチェック。パラメータが「?no=tab〜」以外の場合はデータを渡さない
    url = (url.match(/\&no=tab\d+$/) || [])[0];
    console.log(url);
    if(!url){
      return;
    }
    //取得したURLを「?」で分割。変数paramsに格納
    var params = url.split("&");
    //さらにparams内、0から数えて1番目のデータを「=」で分割。変数tabに格納
    var tab = params[1].split("="); 
    //tabに要素が存在するなら、変数tab内0から数えて1番目のデータを変数tabnameに格納
    if($(tab).length){
        var tabname = tab[1];
    } else{
    // 要素が存在しなければtabnameにtab1を代入する
    var tabname = "tab1";
   }
    //コンテンツを一度すべて非表示にし、
    $('.c-tabContent__item').css('display','none');
    //一度タブについているクラスselectを消し、
    $('ul.c-tabArea li').removeClass('select');
    var tabno = $('ul.tab_area li#' + tabname).index();
       //クリックされたタブと同じ順番のコンテンツを表示します。
    $('.c-tabContent__item').eq(tabno).fadeIn();
    //クリックされたタブのみにクラスselectをつけます。
    $('ul.c-tabArea li').eq(tabno).addClass('select');
});


//　↓フェード
$(function(){
  　$(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight ){
              $(this).addClass('effect-scroll');
          }
      });
  　});
  });

$(function(){
    $(window).scroll(function (){
    $('.effect-fade-lr').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight ){
        $(this).addClass('effect-scroll');
        }
    });
    });
  });

// ↓トップページをふわっと表示
$(function() {
  setTimeout(function(){
    $('.start').fadeOut(1000);
  },1500); //1.5秒後に白背景をフェードアウト
});