// OBJETOS

//const nomes = [ "Daniel" , "Maria", "João"]
//const idades = [40, 28, 35]
//console.log(nomes[0], idades [0])


//linguagem formal
const pessoa = new Object()
pessoa.nome = "Daniel"
pessoa.idade = 40
console.log (pessoa)


let prop = "nome"

console.log (pessoa[prop])
console.log (pessoa.idade)


//Linguagem literal

const pessoa = {
    nome: "Juliana",
    idade: 36
}

pessoa.nome "Juliana"
pessoa.idade = 36
console.log(pessoa)
let prop = "nome"
console.log(pessoa[prop])
console.log(pessoa["idade"])