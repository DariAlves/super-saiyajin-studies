const nomeDoAluno = document.getElementById('nome-do-aluno');
const inputs = document.querySelectorAll('input');
const botao = document.getElementById('botao');
const mediaDosAlunos = document.getElementById('media-do-aluno');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
  let somaValores = 0;
  inputs.forEach(input => {
    let valor = Number(input.value.replace(',', '.')); // OBS -> 1
    somaValores += valor;
    input.value = '';
  });

  const media = somaValores / inputs.length;

  if (isNaN(media)) {
    mediaDosAlunos.textContent = `Média do Aluno: :(`;
    resultado.textContent = `Digite um valor válido, por favor!`;
    resultado.style.color = `gray`;
  } else if (media >= 7) {
    mediaDosAlunos.textContent = `Média do Aluno: ${media.toFixed(2)}`;
    resultado.textContent = `Parabéns, jovem ninja. Você foi aprovado!`;
    resultado.style.color = `green`;
  } else if (media >= 5) {
    mediaDosAlunos.textContent = `Média do Aluno: ${media.toFixed(2)}`;
    resultado.textContent = `Rapadura é doce, mas não é mole não. Você ficou de recuperação!`;
    resultado.style.color = `orange`;
  } else {
    mediaDosAlunos.textContent = `Média do Aluno: ${media.toFixed(2)}`;
    resultado.textContent = `Que burro da 0 pra ele! Você foi reprovado!`;
    resultado.style.color = `red`;
  }
});

// ========================== OBSERVAÇÕES =================================== //

// 1 - O valor do input vem em formato de string, portanto devemos transformá-lo em number para podermos fazer as contas.
// 1 - No Brasil, nossos números recebem vírgula (,) nos valores decimais, por isso devemos trocar a nossa vírgula para o ponto (.), que é o formato aceito no javascript.
