// 02 - Find the vowels

// link: https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

// input: Apple;

// output: [1, 5]

// tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

const vowelIndices = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const vowelPosition = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      vowelPosition.push(i + 1);
    }
  }

  return vowelPosition;
};

console.log(vowelIndices('VegeTA')); // [ 1, 4, 5, 7 ]
console.log(vowelIndices('vegeta')); // [ 1, 4, 5, 7 ]
console.log(vowelIndices('xxxxxx')); // []
console.log(vowelIndices('Apple')); // [1, 5]
