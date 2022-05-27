const paineis = document.querySelectorAll(".painel")

function handleToogle(){
  this.classList.toggle("open")
}
function handleFall(event){
  if(event.propertyName.includes("font")){
    this.classList.toggle("open-active")
  }
}

paineis.forEach(painel => painel.addEventListener("click",handleToogle))
paineis.forEach(painel => painel.addEventListener("transitionend",handleFall))

