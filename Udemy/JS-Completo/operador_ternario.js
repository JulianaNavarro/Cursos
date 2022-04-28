// OPERADOR TERNÁRIO

let idade = 22;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log (`Pode Viajar: ${podeViajar}`);

//let msgMaiorIdade = ""
//if (idade >= 18) {
//    msgMaiorIdade = " É maior de idade"
//}else {
//    msgMaiorIdade = "É menor de 18 anos."
//}



let msgMaiorIdade = (idade >= 18) ? "É maior de idade." : "É menor de 18 anos."
console.log (msgMaiorIdade);