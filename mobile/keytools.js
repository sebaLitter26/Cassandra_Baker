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



function isDesktop(event){
  event.stopPropagation();
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) &&
   (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
    window.location.href = "../index.html";
  }
  
}


function displayPages(div_name){
  
    let pagina;

    let pages= ['menu', 'home','author','book','iframe','purchase','contact'];
    pages.forEach(element=>{
      pagina = document.querySelectorAll('.body .'+ element)[0];
      console.log(pagina);
      pagina.hidden = (div_name!=element);
    });
    
}



window.onload = function (e) {

    this.isDesktop(e);

   
} 