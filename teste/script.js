n1 = Number(window.prompt('Digite um valor:'))
n2 = Number(window.prompt('Digite um valor:'))

function Soma(){
    let conta = document.querySelector('#tela')

    conta.innerHTML = `${n1} + ${n2} = ${n1+n2}`
}

function Sub(){
    let conta = document.querySelector('#tela')

    conta.innerHTML = `${n1} - ${n2} = ${n1-n2}`
}

function Div(){
    let conta = document.querySelector('#tela')

    conta.innerHTML = `${n1} / ${n2} = ${(n1/n2).toFixed(2)}`
}

function Mult(){
    let conta = document.querySelector('#tela')

    conta.innerHTML = `${n1} * ${n2} = ${n1*n2}`
}