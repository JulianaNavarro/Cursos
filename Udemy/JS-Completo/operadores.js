//OPERADORES ARITMÉTICOS

let n1 = 10;
let n2 = 5;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

//OPERADORES DE ATRIBUIÇÃO

let n3 = 20;
let n4 = 20;
//n3 = n3 + 15; OU
n3 += 15;
n4 -= 15;

// e serve para divisão e multiplicação tbm
console.log(n3);
console.log(n4);

// OPERADORES INCREMENTO E DECREMENTO

let i = 0;
//i = i + 1; ou i =+ 1;
i++
//serve pra negativo tbm = --
console.log(i);

//OPERADORES DE COMPARAÇÃO

/*

igualdade de valor ==
igualdade de valor e tipo ===
<  menor, < maior, <= menor ou igual e >= maior ou igual
!= valores diferentes
!== valores e tipos diferentes

*/

let n5 = "10";
console.log(n1 >= n5);

/* 
OPERADORES LÓGICOS

and (&&) ex: true x true = true  //  true x false = false // false x true = false // false x false = false
or (||)  ex: true x true = true //  true x false = true // false x true = true // false x false = false
not(!)  é a negação. ex: true = false // false = true

*/

// Para uma pessoa viajar para o exterior: - precisar ser +18 anos OU acompanhado dos pais

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log (`Pode Viajar: ${podeViajar}`);


nu1 = 6
nu2 = 8
let media = (n1 + n2) / 2

console.log (nu1, nu2,);
console.log(`media: ${media}`);
console.log((3 * 2 ) ** 2);




