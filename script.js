/* Criar variaveis */
/* let = atribui uma variavel (pode mudar) */
/* const = constante (não muda)  */

/* let nome = "Samuel Santos" */
let idade = 45
let idadeEsposa = "45"
const anoNascimento = 1977

/* decisão */

if (idade === idadeEsposa) {

    alert("igual")
    
}else {
    alert ("Cada um no seu qudrado")
}

/* lendo informações do html */

const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const resultado = document.getElementById("resultado")

titulo.textContent = "mudei o titulo, eu posso!"


titulo.style.color = "#081040" /* mudando a cor */

function mostrarResultado() {
    resultado.textContent = nome.value + "" + email.value
}
