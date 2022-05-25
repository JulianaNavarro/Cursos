// FORMAL - arrays

const array = new Array ()
//console.log (typeof array)

array [0] = "Daniel"
array[1] = 40
console.log (array)

const array2 = new Array(true, "Daniel", 28, new Array(2, 4, 10))
console.log (array2[3][array2 [3].length -1])

// LITERAL

const array3 = ["Daniel", 40, [3,6,9], true]

array3[4] = "novo valor"


array3.push("push")
array3.push("a, b, c, d, e")

console.log(array3)
console.log(array3[0])
console.log(array3[3])
console.log(array3[4])
console.log(array3[5])