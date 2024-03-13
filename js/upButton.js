const refs = {
    toTopBtn: document.querySelector('.button-to-top'),
    svgIcon: document.querySelector('.to-top-icon'),
    // toTopBtn: document.querySelector('#btn-to-top'),
    // svgIcon: document.querySelector('#to-top-icon'),
}

refs.toTopBtn.addEventListener('click', onButtonClick);

function onButtonClick() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
    refs.toTopBtn.style.visibility = 'visible';
    refs.svgIcon.style.opacity = 1;
    refs.toTopBtn.style.opacity = 1;
  } else {
    refs.toTopBtn.style.visibility = 'hidden';
    refs.svgIcon.style.opacity = 0;
    refs.toTopBtn.style.opacity = 0;
  }
}