// AULA CONDICIONAL - IF, ELSE

let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log (`Pode Viajar: ${podeViajar}`);

if (comprouBilhete === true) {
    console.log("Sim. Comprou o bilhete!")

} else{
    console.log("Não. Não comprou o bilhete! ") }

    if (idade >=18){
        console.log("É maior de idade, está liberado para viajar sozinho.")

    }else {
        console.log("ALERTA!!! É menor de idade, não pode viajar sem o responsável legal.")
    }



    nu1 = 4
    nu2 = 8
    let media = (nu1 + nu2) / 2
    
    console.log(`media: ${media}`);
    
    if (nu1 === 0 || nu2 === 0){
        console.log("Você está Reprovado!")
    }else if (media < 7) {
        console.log ("Você está reprovado, mas tem como recuperar no Exame.")
    }else{
        console.log(" PARABÉNS, Você está aprovado! ")
    }
    
        console.log("saiu do bloco 'If'")


