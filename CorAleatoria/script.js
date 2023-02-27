const hexaResult = document.querySelector("#hexa-container span");
const rgbResult = document.querySelector("#rgb-container span");

function setRandomColor(){
  let hexaArray = '';
  let randomNumber = [5];
  let rgbArray = [2];

  for(let i=0;i<=5;i++){

    randomNumber[i] = (Math.random()*15).toFixed(0);

    if(randomNumber[i] == 0){
      hexaArray += '0';
    }else if(randomNumber[i] == 1){
      hexaArray += '1';
    }else if(randomNumber[i] == 2){
      hexaArray += '2';
    }else if(randomNumber[i] == 3){
      hexaArray += '3';
    }else if(randomNumber[i] == 4){
      hexaArray += '4';
    }else if(randomNumber[i] == 5){
      hexaArray += '5';
    }else if(randomNumber[i] == 6){
      hexaArray += '6';
    }else if(randomNumber[i] == 7){
      hexaArray += '7';
    }else if(randomNumber[i] == 8){
      hexaArray += '8';
    }else if(randomNumber[i] == 9){
      hexaArray += '9';
    }else if(randomNumber[i] == 10){
      hexaArray += 'A';
    }else if(randomNumber[i] == 11){
      hexaArray += 'B';
    }else if(randomNumber[i] == 12){
      hexaArray += 'C';
    }else if(randomNumber[i] == 13){
      hexaArray += 'D';
    }else if(randomNumber[i] == 14){
      hexaArray += 'E';
    }else if(randomNumber[i] == 15){
      hexaArray += 'F';
    }
  }

  for(let i=0; i<=2;i++){
    rgbArray[i] = parseInt(randomNumber[i+i]*16) + parseInt(randomNumber[i+i+1]) ;
  }
  
  document.body.style.backgroundColor = `#${hexaArray}`;
  hexaResult.innerText = hexaArray;
  rgbResult.innerText = rgbArray;
}