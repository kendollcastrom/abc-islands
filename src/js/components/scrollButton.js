const scrollButton = () => {
  const btnScrollTop = document.querySelector('.button--scroll-top');

  // Oculta el botón de scroll al principio
  btnScrollTop.style.display = 'none';

  // Muestra el botón de scroll cuando el usuario ha hecho un poco de scroll hacia abajo
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Cambia 100 por la cantidad de píxeles que quieras
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  });

  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

export default scrollButton;
