let nomeAluno = document.getElementById('nome');
let bimestre1 = document.getElementById('primeiro');
let bimestre2 = document.getElementById('segundo');
let bimestre3 = document.getElementById('terceiro');
let bimestre4 = document.getElementById('quarto');
let aluno;
let resultadoFinal;
const listaAlunos = document.getElementById('lista_alunos');

const alunos = [];

class Aluno {
    constructor(nome, nota1, nota2, nota3, nota4, media) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = media;
    }
}

function cadastrarAluno() {
    let nome = nomeAluno.value;
    let nota1 = parseFloat(bimestre1.value);
    let nota2 = parseFloat(bimestre2.value);
    let nota3 = parseFloat(bimestre3.value);
    let nota4 = parseFloat(bimestre4.value);
    let mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4);

    aluno = new Aluno(nome, nota1, nota2, nota3, nota4, mediaFinal);

    if (aluno.media >= 7) {
        resultadoFinal = 'Aprovado';
    }

    if (aluno.media >= 4 && mediaFinal < 7) {
        resultadoFinal = 'Em Recuperação';
    }

    if (aluno.media < 4) {
        resultadoFinal = 'Reprovado';
    }


    alunos.push(aluno);
}

function relatorio() {
    listaAlunos.innerHTML = '';

    for (let index = 0; index < alunos.length; index++) {
        listaAlunos.innerHTML += `<li>${alunos[index].nome}: ${resultadoFinal}</li>`;
    }
}