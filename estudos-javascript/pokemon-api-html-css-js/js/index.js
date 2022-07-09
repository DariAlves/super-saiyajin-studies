let url = `https://pokeapi.co/api/v2/pokemon`;
const div = document.getElementById('root');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();

  next.setAttribute('data-url', data.next);
  prev.setAttribute('data-url', data.previous);

  // console.log(typeof prev.getAttribute('data-url'));

  if (prev.getAttribute('data-url') == 'null') {
    prev.style.display = 'none';
  } else {
    prev.style.display = '';
  }

  if (next.getAttribute('data-url') == 'null') {
    next.style.display = 'none';
  } else {
    next.style.display = '';
  }

  showPokemon(data);
}

getPokemon(url);

/* Pokemons aparecem na ordem sequencial */
async function showPokemon(data) {
  // Limpar dados antes de voltar a exibir os novos
  div.innerHTML = '';

  // console.log(data);

  const pokemons = [];

  const arrayLength = data.results.length;

  for (let i = 0; i < arrayLength; i++) {
    // Recebo a url
    const url = data.results[i].url;
    // console.log(url);
    // Faço o fetch de cada uma das urls
    const response = await fetch(url);
    // Converto o resultado em json
    const pokemon = await response.json();

    // console.log(pokemon);

    pokemons.push(pokemon);
  }

  pokemons.map(pokemon => {
    const pokeInfo = {
      id: pokemon.id,
      nome: pokemon.name,
      imagem: pokemon.sprites.other['official-artwork'].front_default,
      tipos: pokemon.types.map(type => type.type.name),
      color: pokemon.types.map(type => type.type.name)[0],
    };

    div.innerHTML += `

      <div class="${pokeInfo.color}">
      <h2>${pokeInfo.id} - ${pokeInfo.nome}</h2>
      <img src="${pokeInfo.imagem}" />
      <p>Tipo: </p>
      <ol>
        <li>${pokeInfo.tipos.join('</li><li>')}</li>
      </ol>
      </div>
    `;
  });
}

next.addEventListener('click', () => {
  getPokemon(next.getAttribute('data-url'));
  console.log(next.getAttribute('data-url'));
});

prev.addEventListener('click', () => {
  getPokemon(prev.getAttribute('data-url'));
  console.log(prev.getAttribute('data-url'));
});

/* Primeiro código */
// function showPokemon(data) {
//   // Limpar dados antes de voltar a exibir os novos
//   div.innerHTML = '';

//   data.results.forEach(async pokemon => {
//     const response = await fetch(pokemon.url);
//     const data = await response.json();

//     const pokeInfo = {
//       id: data.id,
//       nome: data.name,
//       imagem: data.sprites.other['official-artwork'].front_default,
//       tipos: data.types.map(type => type.type.name),
//       color: data.types.map(type => type.type.name)[0],
//     };

//     div.innerHTML += `
//       <div class="${pokeInfo.color}">
//       <h2>${pokeInfo.id} - ${pokeInfo.nome}</h2>
//       <img src="${pokeInfo.imagem}" />
//       <p>Tipo: </p>
//       <ol>
//         <li>${pokeInfo.tipos.join('</li><li>')}</li>
//       </ol>
//       </div>
//     `;
//   });
// }
