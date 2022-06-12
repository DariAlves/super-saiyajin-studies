// 01 - Welcome to the City

// input: sayHello(['John', 'Smith'], 'Phoenix', 'Arizona');

// output: Hello, John Smith! Welcome to Phoenix, Arizona!

// tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const sayHello = (name, city, state) => {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
};

const felipe = ['Carlos', 'Felipe', 'Leopoldino'];
const adriana = ['Adriana', 'Larusso'];

console.log(sayHello(felipe, 'Rio de Janeiro', 'RJ'));
console.log(sayHello(adriana, 'São Paulo', 'SP'));

