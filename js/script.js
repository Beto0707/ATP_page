window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});

function toggleMenu() {
  var menu = document.getElementById("menuDesplegable");
  menu.classList.toggle("mostrar-menu");
  var botonMenu = document.querySelector(".boton-menu");
  if (menu.classList.contains("mostrar-menu")) {
      botonMenu.style.visibility = "hidden";
  } else {
      botonMenu.style.visibility = "visible";
  }
}
// Corrección en la inicialización del Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Indicamos el sentido de las fotos
    loop: true, // Bucle, pasa las fotos, sin fin
    allowTouchMove: true, // Para que si estamos en el celular se pueda deslizar con el dedo
    effect: 'fade',
    autoplay: {
      delay: 2000, // Tiempo en milisegundos (2000 ms = 2 segundos)
      disableOnInteraction: false, // Para que no se detenga al interactuar manualmente
    },
  });
