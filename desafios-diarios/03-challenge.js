// 02 - Opposites Attract

// link: https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// input: (1, 4);

// output: true

// Função declarada
function lovefunc(flower1, flower2) {
  // return (flower1 % 2 === 0 && flower2 % 2 === 1) || (flower1 % 2 === 1 && flower2 % 2 === 0); // Outra forma de fazer
  return flower1 % 2 !== flower2 % 2;
}

// Função de seta
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

console.log(lovefunc(1, 4)); // true
console.log(lovefunc(2, 2)); // false
console.log(lovefunc(0, 0)); // false
console.log(lovefunc(0, 1)); // true
