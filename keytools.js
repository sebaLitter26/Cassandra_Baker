
var intermitencia_carrusel = false;

/*
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      
    }
  });
}

*/
function show_paragraph(i){
    
    //this.classList.toggle("active");
    var content = document.getElementsByClassName("paragraph_hided")[i];
    console.log(i,content);
    console.log("display",content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}




window.onload = function () {

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonStop = document.getElementsByClassName('carousel')[0];
    let liEls = document.querySelectorAll('.carousel p');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarReview() {
        if(posicionActual >= liEls.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        //renderizarComment();
        console.log(posicionActual);
        liEls[posicionActual].scrollIntoView({behavior: 'smooth'});
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