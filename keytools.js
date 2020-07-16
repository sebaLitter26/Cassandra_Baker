
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

    console.log("win load");
    // Variables
    const COMMENTS = [
        'The book is amazing, I have shared information from the book with family and friends. ',
        'I loved the book and find its resources quite valuable as I continue to refer to it throughout my college experience.  I rather look forward to the next publication by this author.  My only word of advice is merely that Dr. Baker continue to share her expertise and life knowledge both through her publications as well as through the classroom.',
        'Excellent textbook which will benefit all college students.',
        'Great Book!',
        'Chapter 6 of the book is the longest chapter.  I think if it is divided into two parts, it is easier for student to study.  Thank you for all of your efforts.',
        'Dr Baker did a wonderful job!!',
        'The book is well-designed and planned to teach everyone who is interested İn writing step by step what to do and how to do it.  It is simple to understand, yet professionally written.  It is a unique book of its kind.',
        'This textbook helped me out a lot.  I was able to use it to assist me in all three of my business classes this term. ',
        'Everything was informative and easy to understand.',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $commentRetroceder = document.querySelector('#comments_retroceder');
    let $commentAvanzar = document.querySelector('#comments_avanzar');
    let $comment = document.querySelector('#comments');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.getElementsByClassName('carousel')[0];
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= COMMENTS.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarComment();
    }

   
    /**
     * Funcion que actualiza la comment de comment dependiendo de posicionActual
     */
    function renderizarComment () {

        let total = COMMENTS.length;
        $commentRetroceder.innerHTML = COMMENTS[posicionActual];
        $comment.innerHTML = COMMENTS[(posicionActual+1)%total];
        $commentAvanzar.innerHTML = COMMENTS[(posicionActual+2)%total];
    }

    /**
     * Activa el autoplay de la comment
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

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