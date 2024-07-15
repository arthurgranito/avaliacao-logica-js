const litros = document.getElementById('resultado_gasolina_litros');
const custo = document.getElementById('resultado_custo');
const custoPessoa = document.getElementById('resultado_custo_pessoa');

function calcular() {
    let distancia = document.getElementById('distancia').value;
    let consumo = document.getElementById('consumo').value;
    let preco = document.getElementById('preco').value;
    let passageiros = document.getElementById('passageiros').value;

    const totalLitros = parseFloat(distancia) / parseFloat(consumo);
    const custoTotal = totalLitros * parseFloat(preco);
    const custoPorPessoa = custoTotal / parseFloat(passageiros);

    litros.innerText = `${totalLitros}`;
    custo.innerText = `${custoTotal}`;
    custoPessoa.innerText = `${custoPorPessoa}`;
}