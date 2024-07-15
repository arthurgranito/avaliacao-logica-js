let valorDaVenda = document.getElementById('venda');
let metodoPagamento = document.getElementById('pagamento');
const totalVenda = document.getElementById('resultado_venda');

function calcular() {
    if (valorDaVenda.value == '' || metodoPagamento.value == '') {
        alert('Você precisa preencher todos os dados!!');
    }

    if (metodoPagamento.value == 'avista') {
        totalVenda.innerText = `R$ ${parseFloat(valorDaVenda.value) - (0.05 * parseFloat(valorDaVenda.value))}`;
    } else {
        totalVenda.innerText = `R$ ${parseFloat(valorDaVenda.value)}`;
    }
}

function confirmar() {
    let confirmacao = confirm(`Você confirma essa venda no valor de ${totalVenda.innerText}?`);

    if (confirmacao) {
        alert(`Parabéns!! Venda realizada com sucesso!`)
    }
}