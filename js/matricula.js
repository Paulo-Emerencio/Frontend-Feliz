const tdTotalCursos = document.querySelector(".js-total-de-cursos");
const tdTotalHoras = document.querySelector(".js-total-de-horas");
const botaoMatricula = document.querySelector(".js-botao-matricula");

let totalHoras = 0;
let totalCursos = 0;

function adicionaCurso(checkbox) {
    /* Troquei os if, else por if ternários */
    checkbox.checked ? 
    (totalCursos++, totalHoras += parseInt(checkbox.value)) : 
    (totalCursos--, totalHoras -= parseInt(checkbox.value));

    tdTotalHoras.textContent = totalHoras + "h";
    totalCursos === 1 ? 
    tdTotalCursos.textContent = totalCursos + " curso" : 
    tdTotalCursos.textContent = totalCursos + " cursos";
}

botaoMatricula.onclick = confirmaMatriculas;

function confirmaMatriculas() {
    totalCursos === 0 ? 
    alert("Nenhum curso selecionado") : 
    (alert("Matricula confirmada nos cursos!"),
    location.href = 'index.html');
}


