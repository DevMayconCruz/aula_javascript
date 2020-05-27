/*Comentários */
/*Strings*/
/*var nome = "Maycon";
var idade = 35;
console.log(nome+" tem  "+idade+" anos");

var frase = "Japão é o melhor time do mundo! ";
console.log(frase),
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLocaleLowerCase());
/*Processamento*/
/*var n1 = 10;
var n2 = 3;
var r;
r = n1 + n2;
alert("O resultado é: "+r)
console.log("O resultado é: "+r);
/*Arrays */
/*var numeros = ["0","1","2","3","4","5"];
numeros.reverse();
console.log(numeros);
var lista = ["Maça","Uva","Pera"];
lista.push("Uva");
lista.pop();
console.log(lista);
console.log(lista.length)
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
var frutas = [{nome:"maça",cor:" vermela"}, {nome:"uva",cor:"roxa"}]

console.log(frutas.nome);
console.log(frutas.cor);
console.log("A maça é "+frutas.cor);
console.log(frutas);
alert(frutas[1].nome);
/* Condicionais, laços de repetição e date*/
/*var idade = 18;
if(idade >= 18){

alert("Maior de idade");


}else{

    alert("Menor de idade");

}
var idadeB = prompt("Qual a sua idade");
if(idadeB>=18){

    alert("Maior!");

}else{
    alert("Menor!");
}

var contador = 0;
while(contador<5){
    contador = contador+1;
    /*contador++;*/
    /*alert(contador);
    console.log(contador-1);
   

}

var cont;
for(cont=0;cont <= 2;cont++){
 console.log(lista[cont-1])
}
var d = new Date();
alert(d);
console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getDay());*/

/* Funções */
/*function validaIdade(idade){
if(idade >= 18){

 return true;

}else{
 
return  false;
      
}

return validador;

}
var idade = prompt("Digite um valor! ");
alert(validaIdade(idade));
function clicou(){

    alert(" Quer se casar comigo! ");

}
function clicouB(){

      document.getElementById("agradecimento".innerHTML = "Obrigado por clicar");
   // console.log(document.getElementById("agradecimento"));


}
function sub(a,b){

    return a-b;

}

alert(sub(5,2));
function saudacaoA(nome,sobrenome){
return 'Olá '+nome+' '+sobrenome;
saudacaoA('Rafael', 'Souza');

}
console.log(saudacaoA());
function saudacao(nome = 'visitante',sobrenome='anonimo'){

return 'Olá '+nome+' '+sobrenome;

}
console.log(saudacao());
function dobro(numero){

return numero*2;

}

console.log(dobro(5));
aler(dobro(10));*/
function clicou(){

document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
 // console.log(document.getElementById("agradecimento"));*//


}
function redirecionar(){

window.open("https://github.com/DevMayconCruz/aula_javascript");/*Abrir em outra aba*/
window.location.href ="https://github.com/DevMayconCruz/aula_javascript";/*Abrir na mesma aba*/ 
}
function trocar(){
document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
//alert("Trocar texto");

}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
}
function load(){

    alert("Página carregada!");
}
function funcaoChange(elemento){
console.log(elemento.value)

}
