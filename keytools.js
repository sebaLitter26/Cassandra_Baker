var intermitencia_carrusel = false;

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

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    let posicionActual = 0;
    let $botonStop = document.getElementsByClassName('carousel')[0];
    var liEls = document.querySelectorAll('.carousel p');
    let cant_comments = liEls.length ;
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarReview() {
      
        posicionActual++;
        posicionActual=posicionActual%cant_comments;

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