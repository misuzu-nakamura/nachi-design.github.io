
/*----------------------------------------
アニメーション
プラグイン『inview.js』
----------------------------------------*/




/* **************************

フェードイン（ふわっと）

-- css ----------------------

.fadeIn.inview

************************** */

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

/* 繰り返す：.inview_re */

$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});




/* **************************

下からフェードイン（ふわっと）

-- css ----------------------

.fadeIn_up.inview

************************** */


$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

/* 繰り返す：.inview_re */

$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});


/* **************************

左からフェードイン（ふわっと）

-- css ----------------------

.fadeIn_left.inview

************************** */

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

/* 繰り返す：.inview_re */

$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});



/* **************************

右からフェードイン（ふわっと）

-- css ----------------------

.fadeIn_right.inview

************************** */

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

/* 繰り返す：.inview_re */

$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});



/* **************************

応用：カーテンを開くように表示

-- css ----------------------

.visible

************************** */

$(function() {
  $('.visible').on('inview', function(event, isInView) {
    if (isInView) {
    	$(this).addClass('effect');
    }
  });
});

/* 繰り返す：.visible_re */

$(function() {
  $('.visible_re').on('inview', function(event, isInView) {
    if (isInView) {
    	$(this).addClass('effect');
    } else {
    	$(this).removeClass('effect');
    }
  });
});