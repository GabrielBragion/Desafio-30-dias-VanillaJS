window.addEventListener("keydown", function(event){
  const audio = this.document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = this.document.querySelector(`kbd[data-key="${event.keyCode}"]`)
  if(!audio) return

  audio.currentTime = 0
  audio.play()
  key.classList.add("playing")
})

const keys = document.querySelectorAll("kbd")
keys.forEach(key => key.addEventListener("transitionend", removePlaying))
function removePlaying(event){
  if(event.propertyName !== "transform") return
  this.classList.remove("playing")
}