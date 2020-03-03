function valida() {
    if (valorProjeto.value === "" || diasEfetivos.value == "" || horasDiarias.value == "" || diasFerias.value == "") {
        alert("Preencha todos so campos por favor!");
    }
    else {
        calcula();
    }
    
}
function calcula() {
    let valor = valorProjeto.value;
    let dias = diasEfetivos.value;
    let horas = horasDiarias.value;
    let ferias = diasFerias.value;    

    var valorHoras = (valor / (dias * 4 * horas )) + (( ferias * dias * horas));

    console.log(valorHoras);
    resultado.innerHTML = `R$ ${valorHoras.toFixed(2)}`;
}
