// Desafio 1 - Crie a função compareTrue

function compareTrue(param1, param2) {
      if(param1 & param2){
        return true
      }else{return false}
}
const girafa = true;
const elefante = true;
const macaco = false;

compareTrue(elefante, macaco);

// Desafio 2 - Crie a função splitSentence

function splitSentence(string){
    return string.split(' ');
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');


// Desafio 3 - Crie a função concatName
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let array2 = ['foguete', 'não', 'tem', 'ré'];
let array3 = ['captain', 'my', 'captain'];
function concatName(array){
   return ("'" + array[array.length-1] + ", " + array[0] + "'")
};

concatName(array);
concatName(array2);
concatName(array3);


// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties){
  return wins*3+ties;

}

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 5 - Crie a função highestCount



// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

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
