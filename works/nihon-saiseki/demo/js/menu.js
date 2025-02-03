// JavaScript Document

// ハンバーガーメニュー
$(function($){
    $('.menu--sp').on('click',function(){
        $('.menu--sp span').toggleClass('active');
        $('nav').fadeToggle();
    });
});

// スクロールでナビ変形
$(function(){
    var _window = $(window),
        _header = $('header'),
        heroBottom;
  
    _window.on('scroll',function(){
        heroBottom = $('header').height();
        if(_window.scrollTop() > heroBottom){
            _header.addClass('transform');
        }
        else{
            _header.removeClass('transform');
        }
    });
  
    _window.trigger('scroll');
  });