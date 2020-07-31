
var switch_home = false;



function isDesktop(event){
  event.stopPropagation();
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) &&
   (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
    window.location.href = "../index.html";
  }
  
}

var pages= [{name:'menu',title:'Menu'}, {name:'home',title:'Home'},{name:'author',title:'The Author'},{name:'book',title:'The Book'},{name:'iframe',title:'Ancillary Material'},{name:'purchase',title:'Where to Purchase'},{name:'contact',title:'Contact'}];

function displayPages(div_name){
  
    let pagina;
    

    this.pages.forEach(element=>{
      pagina = document.querySelectorAll('.body .'+ element.name)[0];
      
      pagina.hidden = (div_name!=element.name);
      if(div_name==element.name)  
        this.change_title(element);

    });

    
}


function toggle_menu(){
  
  if(switch_home){
    
    this.displayPages('home');
  }else{
    
    this.displayPages('menu');
  }
  switch_home =!switch_home;
}


function change_title(elem_head){
 
  if(elem_head.name!='home' && elem_head.name!='menu'){
    document.getElementsByClassName('menu')[0].hidden=true;
    let head = document.getElementsByClassName('page')[0];
    head.hidden=(elem_head.name=='menu');
    head.querySelector('h3').innerHTML=elem_head.title;
  }else{
    document.getElementsByClassName('menu')[0].hidden=false;
    document.getElementsByClassName('page')[0].hidden=true;
  }
    
}



window.onload = function (e) {

    this.isDesktop(e);
    this.displayPages('home');

   
} 