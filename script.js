
// Evento do botão cor de fundo do togle 

document.querySelector("#esquerdo").addEventListener("change", () => {
  const togle = document.querySelector("#togle")
  togle.style.background = "#D9D9D9"
  // console.log("esquerdo-cinza")
})


document.querySelector("#direito").addEventListener("change", () => {
  const togle = document.querySelector("#togle")
  togle.style.background = "linear-gradient(#D586E0 0%, #91A1FA 98.93%)"
  // console.log("direito-colorido")
})



const form = document.querySelector("form")
const numeros = document.querySelector("#numero")
const dprimary = document.querySelector("#dprimary")
const dsecundary = document.querySelector("#dsecundary")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  
  let quantoNumeros = Number(numeros.value)
  let numeroMinimo = Number(dprimary.value)
  let numeroMaximo = Number(dsecundary.value)

  let operador = 0
  let resultado = []
  for (i=0; i < quantoNumeros; i++) {

     operador = Math.floor(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo)

    resultado.push(operador)
  }
  
  mostrarResultado(resultado)
})


function mostrarResultado(value){

  for (i=0; i < value.length; i++){
    const impar = "NumeroUM"
    const par = "NumeroDois"

    if((i % 2) === 0) {

      const div = document.createElement("div")
      const span = document.createElement("span")
      div.classList = impar
      div.innerHTML = `<span>${value[i]}</span>`
      document.querySelector("article").append(div)
      
    } else {
      
      const div = document.createElement("div")
      const span = document.createElement("span")
      div.classList = par
      div.innerHTML = `<span>${value[i]}</span>`
      document.querySelector("article").append(div)

    }
  }
  document.querySelector(".sortear").style.display = "none"
  document.querySelector(".resultados").style.display = "flex"
}



function voltar() {
  
  document.querySelector(".sortear").style.display = "block"
  document.querySelector(".resultados").style.display = "none"

  numeros.value = ""
  dprimary.value = ""
  dsecundary.value = ""

  window.location.reload();
}