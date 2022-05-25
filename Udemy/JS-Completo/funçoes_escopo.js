let n = "global"

function mostraN(){
    let n1 = "n1 local"
   
    if (true){
        let n1 = "n1 dentro de if com let"
    }
    console.log ("valor de n1: " + n1)
}
mostraN()
console.log ("valor de n: " + n)

function fnExt(){

    let n = "n local na função fnExt"

    function fnInt(){
        let n = "n local na função fnInt"
        console.log(n)
    }
    fnInt()
    console.log(n)

}

    fnExt()