export function initMenu() {

  const toggleButton = document.querySelector('.menu__toggle');
  const menuContent = document.querySelector('.menu__content');
  const closeButton = document.querySelector('.menu__content__close');
  const wrapperOverlay = document.querySelector('.menu__wrapper');

  toggleButton.addEventListener('click', () => {
    menuContent.classList.toggle('is-open');
    wrapperOverlay.classList.toggle('open-overlay');
  });

  closeButton.addEventListener('click', () => {
    menuContent.classList.remove('is-open');
    wrapperOverlay.classList.remove('open-overlay');
  });
}

