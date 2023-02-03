export const toggleMenu = () => {
  const iMenu = document.querySelector('#stv_button'),
        menu = document.querySelector('.main_menu'),
        cont = document.querySelector('.blur');
        close = document.querySelector('.main_menu-close')
   
  iMenu.addEventListener('click', function() {
    
    //alternamos estilos de menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    iMenu.classList.toggle('ac');
    cont.classList.toggle('blur');
  });

  close.addEventListener('click', function() {
    
    //alternamos estilos de menu y body
    menu.classList.add('no-active');
  });
};