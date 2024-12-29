const form = document.querySelector("form")
const quantityNumbers = document.querySelector("#quantityNumber")
const numberInitial = document.querySelector("#numberInitial")
const numberEnd = document.querySelector("#numberEnd")


// Evento do botão cor de fundo do togle 
document.querySelector("#togleLeft").addEventListener("change", () => {
  const togle = document.querySelector("#togle")
  togle.style.background = "#D9D9D9"
  // console.log("togleLeft-cinza")
})


document.querySelector("#togleRight").addEventListener("change", () => {
  const togle = document.querySelector("#togle")
  togle.style.background = "linear-gradient(#D586E0 0%, #91A1FA 98.93%)"
  // console.log("togleRight-colorido")
})

// Evento do formulario e realização do sorteio
form.addEventListener("submit", (event) => {
  event.preventDefault()
  
  let quantoquantityNumbers = Number(quantityNumbers.value)
  let quantityNumberMinimo = Number(numberInitial.value)
  let quantityNumberMaximo = Number(numberEnd.value)

  try {
    if (campo()) {
      let operador = 0
      let resultado = []

      for (i=0; i < quantoquantityNumbers; i++) {

        operador = Math.floor(Math.random() * (quantityNumberMaximo - quantityNumberMinimo) + quantityNumberMinimo)
        resultado.push(operador)
      }
      mostrarResultado(resultado)
    }
  } catch (error){
    alert("ERROR: Não foi possivel coletar os números! Tente outra vez.")
    console.log(error)
  } 
})


// Valida entrada do valor digitos
quantityNumbers.addEventListener("keyup", () => {
  quantityNumbers.value = quantityNumbers.value.replace(/\D/g,"")
  
  if(quantityNumbers.value >= 7) {
    alert("favor digitar o valor maximo 6 numeros para sortear!")
    quantityNumbers.value = ""
  }  
})

numberInitial.addEventListener("keyup", () => {
  numberInitial.value = numberInitial.value.replace(/\D/g,"")

  if(numberInitial.value.length >= 4) {
    alert("favor digitar o maximo 3 digitos!")
    numberInitial.value = ""
  }
})

numberEnd.addEventListener("keyup", () => {
  numberEnd.value = numberEnd.value.replace(/\D/g,"")
 
  if(numberEnd.value.length >= 4){
    alert("favor digitar o maximo 3 digitos!")
    numberEnd.value = ""
  }
})


// Validar o campo se tem 0 ou vazio
function campo() {
  if (Number(quantityNumbers.value) === 0 || Number(numberEnd.value) === 0){
    alert('Campo deve ser maior que 0!')
    quantityNumbers.value = ""
    numberInitial.value = ""
    numberEnd.value = ""
    return false
  } else if (quantityNumbers.value === "" || numberInitial.value === "" || numberEnd.value === ""){
    alert("Campo vazio, favor digitar um número!")
    quantityNumbers.value = ""
    numberInitial.value = ""
    numberEnd.value = ""
    return false
  } else {
    return true
  }
}

// Mostrar os resultados
function mostrarResultado(value){

  try {
    for (i=0; i < value.length; i++){
      const impar = "NumberOne"
      const par = "NumberTwo"

      if((i % 2) === 0) {

        const div = document.createElement("div")
        const span = document.createElement("span")
        div.classList = impar
        div.innerHTML = `<div></div><span>${value[i]}</span>`
        document.querySelector("article").append(div)
        
      } else {
        
        const div = document.createElement("div")
        const span = document.createElement("span")
        div.classList = par
        div.innerHTML = `<div></div><span>${value[i]}</span>`
        document.querySelector("article").append(div)

      }
    }
    document.querySelector(".draw").style.display = "none"
    document.querySelector(".results").style.display = "flex"
  } catch (error) {
    alert("ERROR: Não foi possivel gerar os números! Tente outra vez.")
    console.log(error)
  } 
}

// Evento do botão de retorno
document.querySelector(".results button").addEventListener("click", () => {
  document.querySelector(".draw").style.display = "block"
  document.querySelector(".results").style.display = "none"

  quantityNumbers.value = ""
  numberInitial.value = ""
  numberEnd.value = ""

  window.location.reload();
})