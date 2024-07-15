let sanduiche = document.getElementById('sanduiche');
const resultado = document.getElementById('total');
let acompanhamentosDisponiveis = ['maionese', 'carne', 'queijo', 'bacon', 'salada'];
let acompanhamentosEscolhidos = [];
let preco;

function acompanhamentos() {
    if(sanduiche.value == ''){
        alert('Você precisa escolher seu sanduíche!');
    } else{
        for (let i = 0; i < acompanhamentosDisponiveis.length; i++) {
            let escolha = confirm(`Você quer ${acompanhamentosDisponiveis[i]}?`);
            
            if(escolha == true){
                acompanhamentosEscolhidos.push(acompanhamentosDisponiveis[i]);
            }
        }
    }
}

function finalizar(){
    if(sanduiche.value == ''){
        alert('Você precisa escolher seu sanduíche!');
    } else{
        switch(sanduiche.value){
            case 'frango':
                preco = 10 + (acompanhamentosEscolhidos.length * 2);
                resultado.innerText = ` um Hamburguer com ${acompanhamentosEscolhidos.join(', ')} e custou R$${preco},00`;
                break;
            case 'carne':
                preco = 15 + (acompanhamentosEscolhidos.length * 2);
                resultado.innerText = ` um Cheeseburguer com ${acompanhamentosEscolhidos.join(', ')} e custou R$${preco},00`;
                break;
            case 'atum':
                preco = 21 + (acompanhamentosEscolhidos.length * 2);
                resultado.innerText = ` um Cheesebacon com ${acompanhamentosEscolhidos.join(', ')} e custou R$${preco},00`;
                break;
            case 'ovo':
                preco = 20 + (acompanhamentosEscolhidos.length * 2);
                resultado.innerText = ` um Duplo Cheeseburguer com ${acompanhamentosEscolhidos.join(', ')} e custou R$${preco},00`;
                break;
        }
    }
}