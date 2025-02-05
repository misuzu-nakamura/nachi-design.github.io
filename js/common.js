/*
 * スクロールトリガーで
 * 要素をふわっと表示するアニメーション
 */
function fadeAnime() {
  const fadeUpTriggers = document.querySelectorAll('.fadeUpTrigger');
  const fadeDownTriggers = document.querySelectorAll('.fadeDownTrigger');
  const wipeAnimeTriggers = document.querySelectorAll('.wipeAnimeTrigger');

  const scroll = window.pageYOffset;
  const windowHeight = window.innerHeight;

  fadeUpTriggers.forEach(element => {
    const elemPos = element.getBoundingClientRect().top + scroll + 100;
    if (scroll >= elemPos - windowHeight) {
      element.classList.add('fadeUp');
    }
  });

  fadeDownTriggers.forEach(element => {
    const elemPos = element.getBoundingClientRect().top + scroll + 100;
    if (scroll >= elemPos - windowHeight) {
      element.classList.add('fadeDown');
    }
  });

  wipeAnimeTriggers.forEach(element => {
    const elemPos = element.getBoundingClientRect().top + scroll + 100;
    if (scroll >= elemPos - windowHeight) {
      element.classList.add('wipeAnime');
    }
  });
}

// スクロール時にアニメーションを実行
window.addEventListener('scroll', fadeAnime);

// ページ読み込み時にもアニメーションを実行
document.addEventListener('DOMContentLoaded', fadeAnime);

/*
 * ハンバーガーメニュー
 */

// ハンバーガーメニューの開閉
const hbButton = document.querySelector('.l-header__hb-btn');
const header = document.querySelector('.l-header');

hbButton.addEventListener('click', () => {
  header.classList.toggle('is-active');

});

/*
 * ローディングオーバーレイのフェードアウト
 */
window.addEventListener('load', () => {
  const loadingOverlay = document.querySelector('.l-loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.style.transition = 'opacity 2s ease';
    loadingOverlay.style.opacity = 0;
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 2000);
  }
});