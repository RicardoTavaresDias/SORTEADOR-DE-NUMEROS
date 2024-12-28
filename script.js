
// Evento do botão cor de fundo do togle 

document.querySelector("#esquerdo").addEventListener("change", () => {
  const togle = document.querySelector("#togle")
  togle.style.background = "#D9D9D9"
})


document.querySelector("#direito").addEventListener("change", () => {
  const togle = document.querySelector("#togle")
  togle.style.background = "linear-gradient(#D586E0 0%, #91A1FA 98.93%)"
})