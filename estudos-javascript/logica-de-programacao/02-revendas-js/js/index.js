const veiculo = document.querySelector('#veiculo');
const preco = document.querySelector('#preco');
const button = document.querySelector('#button');

const resVeiculo = document.querySelector('#res-veiculo');
const resEntrada = document.querySelector('#res-entrada');
const resParcela = document.querySelector('#res-parcela');

button.addEventListener('click', () => {
  const veiculoValue = veiculo.value;
  const precoValue = Number(preco.value.replace(',', '.'));
  const entrada = precoValue / 2;

  if (isNaN(precoValue)) {
    resEntrada.textContent = `Coloque um preço válido`;
  } else if (veiculoValue === '') {
    resVeiculo.textContent = `Promoção: Veículo`;
    resEntrada.textContent = `Entrada de R$ ${entrada.toFixed(2)} Reais`;
    resParcela.textContent = `+ 12x de R$ ${(entrada / 12).toFixed(2)} Reais`;
  } else {
    resVeiculo.textContent = `Promoção: ${veiculoValue}`;
    resEntrada.textContent = `Entrada de R$ ${entrada.toFixed(2)} Reais`;
    resParcela.textContent = `+ 12x de R$ ${(entrada / 12).toFixed(2)} Reais`;
  }

  veiculo.value = '';
  preco.value = '';
});
