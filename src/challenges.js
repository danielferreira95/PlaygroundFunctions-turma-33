// Desafio 1 - Crie a função compareTrue

function compareTrue(param1, param2) {
      if(param1 & param2){
        return true
      }else{return false}
}
const girafa = true;
const elefante = true;
const macaco = false;

// compareTrue(elefante, macaco);

// Desafio 2 - Crie a função splitSentence

function splitSentence(string){
    return string.split(' ');
}
// splitSentence('go Trybe');
// splitSentence('vamo que vamo');
// splitSentence('foguete');


// Desafio 3 - Crie a função concatName
let array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let array2 = ['foguete', 'não', 'tem', 'ré'];
let array3 = ['captain', 'my', 'captain'];
function concatName(paramet){
    const concat = paramet[paramet.length-1] + ", " + paramet[0]
   return concat
};

// concatName(array1);
// concatName(array2);
// concatName(array3);


// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties){
  return wins*3+ties;
}

// footballPoints(14, 8);
// footballPoints(1, 2);
// footballPoints(0, 0);

// Desafio 5 - Crie a função highestCount
// let array1 = [9, 1, 2, 3, 9, 5, 7];
// let array2 = [0, 4, 4, 4, 9, 2, 1];
// let array3 = [0, 0, 0];

function highestCount(array) {
  let maior = 0;
  for(let index = 0; index<array.length; index+=1){

    if(array[index]>maior){
      maior=array[index];
    }
  } return maior;
}  
//console.log(highestCount(array1));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas



function calcTriangleArea(base, height){
  //console.log((base * height) / 2)
     return (base * height) / 2
};
//calcTriangleArea(10, 50);

function calcRectangleArea(base, height){
  //console.log(base*height);
  return base*height;
};
//calcRectangleArea(10, 50);

function calcAllAreas(base, height, form){
  if(form==='triângulo'){
    return 'O valor da área do triângulo é de: ' + calcTriangleArea(base, height);
  }
  if(form==='retângulo'){
   return 'O valor da área do retângulo é de: ' + calcRectangleArea(base, height);
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
}

// Desafio 7 - Crie a função catAndMouse

let catAndMouse = function (mouse, cat1, cat2){
  if(Math.abs(cat1-mouse)===Math.abs(cat2-mouse)){
    return 'os gatos trombam e o rato foge';
  }else if(Math.abs(cat1-mouse)>Math.abs(cat2-mouse)){
    return 'cat2';
  }else if(Math.abs(cat1-mouse)<Math.abs(cat2-mouse)){
    return 'cat1';
  }
};
// let catAndMouse = function(mouse, cat1, cat2) {
// if(cat1-mouse>0 && cat2-mouse>0){
//   if(cat1-mouse>cat2-mouse){
//     console.log('cat2');
//     return 'cat2';
//   }
//   else if(cat2-mouse>cat1-mouse){
//     console.log('cat1');
//     return 'cat1';
//   }else if(cat1-mouse===cat2-mouse){
//     console.log('os gatos trombam e o rato foge');
//     return 'os gatos trombam e o rato foge';
//   }
// }else if(cat1-mouse<0 && cat2-mouse<0){
//   if(cat1-mouse>cat2-mouse){
//     console.log('cat1');
//     return 'cat1';
//   }else if(cat2-mouse>cat1-mouse){
//     console.log('cat2');
//     return 'cat2';
//   }else if(cat1-mouse===cat2-mouse){
//     console.log('os gatos trombam e o rato foge');
//     return 'os gatos trombam e o rato foge';
//   }
// }else if(cat1-mouse<0 && cat2-mouse>0){
// if(cat1-mouse-0<cat2-mouse-0){
// console.log('cat1');
// return 'cat1';
// }else if(cat1-mouse-0>cat2-mouse-0){
// console.log('cat2');
// return 'cat2';
// }else if(cat1-mouse-0===cat2-mouse-0){
//   console.log('os gatos trombam e o rato foge');
//   return 'os gatos trombam e o rato foge';
// }
// }else if(cat1-mouse>0 && cat2-mouse<0){
//   if(cat1-mouse-0<cat2-mouse-0){
//     console.log('cat2');
//     return 'cat2';
//   }else if(cat1-mouse-0>cat2-mouse-0){
//     console.log('cat1');
//     return 'cat1';
//   }else if(cat1-mouse-0===cat2-mouse-0){
//     console.log('os gatos trombam e o rato foge');
//     return 'os gatos trombam e o rato foge';
//   }
// }if else(cat1===0 && cat2===0 && mouse===0){
//   console.log('os gatos trombam e o rato foge');
//   return 'os gatos trombam e o rato foge';
// }
// };
// catAndMouse(0, 1, 2);


// Desafio 8 - Crie a função fizzBuzz

let fizzBuzz = function(conjunt){
  for(let i=0; i<conjunt.length; i+=1){
    if(conjunt[i]%3===0 && conjunt[i]%5!==0){
      conjunt.splice(i, 1, 'fizz');
    }else if(conjunt[i]%5===0 && conjunt[i]%3!==0){
      conjunt.splice(i, 1, 'buzz');
    }else if(conjunt[i]%5===0 && conjunt[i]%3===0){
      conjunt.splice(i, 1, 'fizzBuzz');
    }else{conjunt.splice(i, 1, 'bug!');
    }
  }console.log(conjunt);
};
fizzBuzz([9, 25])

// Expected output: "Fire-Air-Water"

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
