var intermitencia_carrusel = false;
var switch_author = false;
var switch_paragraph = false;

function show_author(){
  
  let deg = (switch_author) ? 0:180;
  document.getElementById("paragraph_author_expand").style.webkitTransform = 'rotate('+deg+'deg)';
  document.getElementsByClassName("paragraph_author")[0].scroll({ top: (deg*10), behavior: 'smooth' });
  switch_author=!switch_author;
}

function show_paragraph(){
    
    
    var content = document.getElementsByClassName('paragraph_hided')[0];
    let deg = (switch_paragraph) ? 0:270;
    switch_paragraph=!switch_paragraph;
    document.getElementById("explodeButton").style.webkitTransform = 'rotate('+deg+'deg)';
    console.log("display",content);

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}




window.onload = function () {

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    
    let $botonStop = document.getElementsByClassName('carousel')[0];
    var liEls = document.querySelectorAll('.carousel p');
    let cant_comments = liEls.length ;
    let posicionActual = cant_comments;
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarReview() {

      if(!this.elementInViewport($botonStop)) return;

        posicionActual--;
        if(posicionActual<0)
          posicionActual= cant_comments;

        liEls[posicionActual].scrollIntoView({block: 'nearest', behavior: 'smooth'});
    }

  
    /**
     * Activa el autoplay de la comment
     */
    function playIntervalo() {
        intervalo = setInterval(pasarReview, TIEMPO_INTERVALO_MILESIMAS_SEG);

        intermitencia_carrusel = true;

    }

    /**
     * Para el autoplay de la comment
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        intermitencia_carrusel = false;
    }

    function startStop(){
        (intermitencia_carrusel)? stopIntervalo() : playIntervalo();
    }

    // Eventos
    
    $botonStop.addEventListener('click', startStop);
    // Iniciar
    playIntervalo();
} 