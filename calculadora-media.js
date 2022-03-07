/*
Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
Imprimir na própria página o resultado, ao invés do console
*/
var notaPrimeiroBimestre = prompt("Digite o valor da nota do Primeiro Bimestre: ");
var notaSegundoBimestre = prompt("Digite o valor da nota do Segundo Bimestre");
var notaTerceiroBimestre = prompt("Digite o valor da nota do Terceiro Bimestre: ");
var notaQuartoBimestre = prompt("Digite o valor da nota do Quarto Bimestre: ");
var resultado;
var notaFinal = parseFloat(notaPrimeiroBimestre) + parseFloat(notaSegundoBimestre) + parseFloat(notaTerceiroBimestre) + parseFloat(notaQuartoBimestre)

var media = (notaFinal / 4).toFixed(2);

console.log(media);

if(media>=6){
    resultado = "aprovado"
} else{
    resultado= "reprovado"
}

alert("O valor da média de notas é " + media + ". O aluno foi " + resultado + ".");

