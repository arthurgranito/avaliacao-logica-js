function calcular() {
    let alunos = document.getElementById("alunos").value;
    let alunosPCD = document.getElementById("alunos_pcd").value;
    const totalAlunos = document.getElementById("total_alunos");
    const percentualPCD = document.getElementById("percentual_pcd");

    let total = parseInt(alunos) + parseInt(alunosPCD);
    let porcentagem = ((parseInt(alunosPCD) / total) * 100).toFixed(1);

    totalAlunos.innerText = `${total}`;
    percentualPCD.innerText = `${porcentagem}`;
}