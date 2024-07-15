let nomeConvidado = document.getElementById('convidado');
const listaFinal = document.getElementById('lista_convidados');
let listaConvidados = [];

function cadastrarConvidados() {
    if (nomeConvidado.value == '') {
        alert('Você precisa adicionar algum convidado para cadastrá-lo!')
    } else {
        if (listaConvidados.length < 10) {
            listaConvidados.push(nomeConvidado.value);
            nomeConvidado.value = '';
        } else {
            alert('Sua lista de convidados está cheia! Por favor remova algum convidado para adicionar outro!');
        }
    }
}

function removerConvidados() {
    if (nomeConvidado.value == '') {
        alert('Você precisa dizer qual convidado deseja remover');
    } else {
        let nomeRemovido = listaConvidados.indexOf(nomeConvidado.value);

        if (nomeRemovido >= 0) {
            listaConvidados.splice(nomeRemovido, 1);
            nomeConvidado.value = '';
            listaFinal.innerHTML = '';
        } else{
            alert('O nome escrito não está na sua lista de convidados!');
        }
    }
}

function exibirConvidados() {
    listaFinal.innerHTML = '';
    for (let i = 0; i < listaConvidados.length; i++) {
        listaFinal.innerHTML += `<li>${listaConvidados[i]}</li>`;
    }
}