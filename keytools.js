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

var playButton = document.querySelector("#play-button-shape");

playButton.addEventListener("click", function() {
  alert("test");
});

function show_paragraph(){
    
    //this.classList.toggle("active");
    var content = document.getElementsByClassName("paragraph_hided")[0];
    console.log("display",content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}