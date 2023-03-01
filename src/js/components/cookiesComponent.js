const cookiesComponent = () => {
  const cookieBanner = document.querySelector('.cookie-banner');
  const acceptButton = document.querySelector('.cookie-banner__button--accept');
  const rejectButton = document.querySelector('.cookie-banner__button--reject');

  acceptButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    // aquí iría el código para aceptar las cookies
  });

  rejectButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    // aquí iría el código para rechazar las cookies
  });
}

export default cookiesComponent;
