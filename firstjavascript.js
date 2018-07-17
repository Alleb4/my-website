function changeHeading(){
  document.getElementById("Heading").innerHTML = "About Me";
}
var fact = 0;
function changePic(){
  if (fact == 0){
    document.getElementById("Husky").src = "puppy.jpg";
    document.getElementById("Husky").alt = "Picture of German Shepherd puppy.";
    fact = fact + 1;
  }
  else{
    document.getElementById("Husky").src = "husky.jpg";
    document.getElementById("Husky").alt = "Picture of Husky puppy.";
    fact = fact - 1;
  }
}

function enlarge1(){
  document.getElementById("Mulan").style.height ="50%";
  document.getElementById("Mulan").style.width ="25%";
  document.getElementById("Mulan").alt = "Picture of Mulan Movie cover."
}

function enlarge2(){
  document.getElementById("Lion").style.height ="50%";
  document.getElementById("Lion").style.width ="25%";
  document.getElementById("Lion").alt = "Picture of The Lion King Movie Cover.";
}

function small1(){
  document.getElementById("Mulan").style.width = "100px";
  document.getElementById("Mulan").style.length = "50px";
  document.getElementById("Mulan").alt = "Picture of Mulan Movie cover.";
}

function small2(){
  document.getElementById("Lion").style.width = "100px";
  document.getElementById("Lion").style.length = "50px";
  document.getElementById("Lion").alt = "Picture of The Lion King Movie Cover.";
}
