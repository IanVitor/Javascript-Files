var n1 = Number(window.prompt('Digite um número:'))
var n2 = Number(window.prompt('Digite outro número:'))

var soma = n1 + n2

document.write(`Seu nome tem ${nome.length} letras`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)

function trocar(){
    let troca = document.querySelector("h3")

    troca.innerHTML = `${n1} + ${n2} = ${soma}`
}