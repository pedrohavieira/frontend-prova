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
function atualizarLista() {
    lista.innerHTML = '';
    let total = 0;
    gastos.forEach((gasto, index) => {
      total += gasto.valor;
      const li = document.createElement('li');
      const valorClasse = gasto.valor > 100 ? 'valor-alto' : '';
      li.innerHTML = ` <div> <strong>${gasto.descricao}</strong> - R$ <span class="${valorClasse}">${gasto.valor.toFixed(2)}</span> <em>(${gasto.categoria})</em> </div> <button onclick="removerGasto(${index})">Excluir</button> `;
      lista.appendChild(li);
    });
    totalSpan.textContent = total.toFixed(2);
  }