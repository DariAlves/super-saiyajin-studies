const numeros = [2, 4, 5, 7];

const triplo = array => {
  const triploValores = [];

  for (let i = 0; i < array.length; i++) {
    triploValores.push(array[i] * 3);
  }

  return triploValores;
};

// Função com map
// const triplo = array => {
//   const triploValores = array.map(numero => numero * 3);

//   return triploValores;
// }

console.log(triplo(numeros));

// const numeros = [2, 4, 5, 7, 7, 2, 2];

// const quantidadeRepetidos = (array, valor) => {
//   let contador = [];

//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] == valor) {
//       contador++;
//     }
//   }

//   return contador;
// };

// console.log(quantidadeRepetidos(numeros, 2));
