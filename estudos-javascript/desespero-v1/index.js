const usuarios = [
  {
    id: 1,
    nome: 'Adriana',
    pets: [
      {
        id: 1,
        nome: 'Frida',
        brinquedos: ['bolinha', 'ossinho'],
      },
      {
        id: 2,
        nome: 'Margareth',
        brinquedos: ['lixo', 'cadarço'],
      },
    ],
  },
  {
    id: 2,
    nome: 'Dari',
    pets: [
      {
        id: 1,
        nome: 'Renzo',
        brinquedos: ['bolinha', 'gatinha', 'roupinha'],
      },
    ],
  },
];

usuarios.forEach(usuario => {
  console.log(`\n`);
  console.log(`ID usuário: ${usuario.id}`);
  console.log(`Nome usuário: ${usuario.nome}`);
  console.log(
    `O(a) usuário(a) ${usuario.nome} tem ${usuario.pets.length} pet(s).\n`
  );
  usuario.pets.forEach(pet => {
    console.log(`\n\n`);

    console.log(`ID pet: ${pet.id}`);
    console.log(`Nome pet: ${pet.nome}`);
    console.log(`O nome do pet ${pet.id} é ${pet.nome}`);
    console.log(
      `O(a) ${pet.nome} adora seus ${pet.brinquedos.length} brinquedos:`
    );
    pet.brinquedos.forEach((brinquedo, index) => {
      console.log(`${index + 1} - ${brinquedo}`);
    });
  });
});
