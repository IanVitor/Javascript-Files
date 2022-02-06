var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

var n1 = document.getElementById('nota1')

var n2 = document.getElementById('nota2')



form.addEventListener('submit', function(e) {
    let hh = document.querySelector('#text')

    hh.innerHTML = `Olá, ${campo.value}`
    let resul = n1 + n2
    alert(`${resul}`)

    // impede o envio do form
    e.preventDefault();
});
