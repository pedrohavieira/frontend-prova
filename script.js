let gastos = [];
const form = document.getElementById('form-gasto');
const lista = document.getElementById('lista-gastos');
const totalSpan = document.getElementById('total');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // ...
  });
  const descricao = document.getElementById('descricao').value.trim();
const valor = parseFloat(document.getElementById('valor').value);
const categoria = document.getElementById('categoria').value.trim();

if (descricao === '' || isNaN(valor) || categoria === '') {
  alert('Por favor, preencha todos os campos corretamente.');
  return;
}

gastos.push({ descricao, valor, categoria });
atualizarLista();
form.reset();