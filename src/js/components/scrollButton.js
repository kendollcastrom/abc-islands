const scrollButton = () => {
  const btnScrollTop = document.querySelector('.button--scroll-top');

  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

export default scrollButton;


