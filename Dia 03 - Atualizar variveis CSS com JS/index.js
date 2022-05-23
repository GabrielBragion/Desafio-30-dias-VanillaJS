const inputs = document.querySelectorAll("input")

inputs.forEach(input => input.addEventListener("change", handleInput))

function handleInput(){
  const suffix = this.dataset.size || ""
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
