"use strict";
var windowWidth = $(window).width();
var windowSm = 1024;

$(function () {
  if (windowWidth > windowSm) {
    $('.l-header__gnavMenu__item').hover(function () {
      $(this).children('.l-header__megaMenu').addClass('is-active');
    }, function () {
      $(this).children('.l-header__megaMenu').removeClass('is-active');
    });
  }
});

$(function () {
    $('.l-header__gnavMenu__title').each(function(i,o) {
      if ($(o).siblings('.l-header__megaMenu').length) {
        $(o).addClass('has-mega');
      }
    }); //グローバルナビの下に小メニューあればスマホ開閉用クラス付与

    $('.l-header__megaChild__title').each(function(i,o) {
      if ($(o).siblings('.l-header__megaChild__item').length) {
        $(o).addClass('has-child');
      }
    }); //小メニューの下にさらにリンクあればスマホ開閉用クラス付与
});

$(function () {
  
  $('.l-header__spbtn').click(function () {
    var windowWidth = $(window).width();
    if (windowWidth <= windowSm) {
      $(this).toggleClass('is-open');
      if($(this).hasClass('is-open')) {
        $('.l-header').addClass('is-menuOpen');
        $('.l-header__container').slideToggle(200);
      } else {
        $('.l-header__container').slideToggle(200);
        $('.l-header').removeClass('is-menuOpen');
      }//slideToggleアニメーションのため開閉でトグルの順番入れ替え
    }
  });

  $('.l-header__gnavMenu__title').click(function () {
    var windowWidth = $(window).width();
    if (windowWidth <= windowSm) {
    if($(this).hasClass('has-mega')) {
      $(this).toggleClass('is-open');
      $(this).siblings('.l-header__megaMenu').slideToggle();
    }
  }
  });

  $('.l-header__megaChild__title').click(function () {
    var windowWidth = $(window).width();
    if (windowWidth <= windowSm) {
    if($(this).hasClass('has-child')) {
      $(this).toggleClass('is-open');
      $(this).siblings('.l-header__megaChild__item').slideToggle();
    }
  }
  });

});

var timer = false;
$(window).resize(function(){
  if (timer !== false) {
    clearTimeout(timer);
    }
timer = setTimeout(function() {
  var windowWidth = $(window).width();
  $('.l-header').removeClass('is-menuOpen');
  $('.l-header__spbtn').removeClass('is-open');
  $('.l-header__megaChild__title').removeClass('is-open');
  $('.l-header__gnavMenu__title').removeClass('is-open');
  if (windowWidth > windowSm) {
    $('.l-header__container').show();
    $('.l-header__megaChild__item').show();
    $('.l-header__megaMenu').show();

    $('.l-header__gnavMenu__item').hover(function () {
      $(this).children('.l-header__megaMenu').addClass('is-active');
    }, function () {
      $(this).children('.l-header__megaMenu').removeClass('is-active');
    });

  } else {
    $('.l-header__megaMenu').hide();
    $('.l-header__container').hide();
    $('.l-header__megaChild__item').hide();
  }

},200);
});