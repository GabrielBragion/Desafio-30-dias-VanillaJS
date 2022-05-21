
const ponteiroSeg = document.querySelector(".ponteiro-segundos")
const ponteiroMin = document.querySelector(".ponteiro-minutos")
const ponteiroHor = document.querySelector(".ponteiro-horas")


function setDate(){
  const agora = new Date()
  const segundos = agora.getSeconds()
  const segundosDegre = ((segundos / 60) * 360) + 90
  const minutos = agora.getMinutes()
  const minutosDegre = ((minutos / 60) * 360) + 90
  const horas = agora.getHours()
  const horasDegre = ((horas / 12) * 360) + 90


  ponteiroSeg.style.transform = `rotate(${segundosDegre}deg)`
  ponteiroMin.style.transform = `rotate(${minutosDegre}deg)`
  ponteiroHor.style.transform = `rotate(${horasDegre}deg)`
}

setInterval(setDate, 1000)