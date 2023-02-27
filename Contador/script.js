const text = document.querySelector("#text");
let number = 0;
let data = new Date();

function diminuir (){
  number--;
  var dia = String(data.getDate()).padStart(2, '0');
  text.innerText = number;
}
function resetar (){
  number = 0;
  text.innerText = 0;
}
function acrescentar (){
  number ++;
  text.innerText = number;
}