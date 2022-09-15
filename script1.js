"use strict"

let tabela = document.lastChild.lastChild.childNodes[7] 

let num1 = (Math.random() * 10).toFixed(2)
let num2 = (Math.random() * 10).toFixed(2)
let num3 = (Math.random() * 10).toFixed(2)


// let linha1 = tabela.lastChild.childNodes[1].innerText = num1
// let linha2 = tabela.childNodes[1].childNodes[3].innerText = num2
// let linha3 = tabela.childNodes[1].childNodes[5].innerText = num3

if(num1 > num2 && num1 > num3){
    tabela.lastChild.childNodes[1].innerText = num1
}else if(num2 > num1 && num2> num3){
    tabela.lastChild.childNodes[1].innerText = num2
}else if(num3 > num1 && num3>num2){
    tabela.lastChild.childNodes[1].innerText = num3
}

if(num1 < num2 && num1 > num3){
    tabela.childNodes[1].childNodes[3].innerText = num1
}else if(num2 < num1 && num2 > num3){
    tabela.childNodes[1].childNodes[3].innerText = num2
}else if(num3 < num1 && num3 > num2){
    tabela.childNodes[1].childNodes[3].innerText = num3
}


if(num1 < num2 && num1 < num3){
    tabela.childNodes[1].childNodes[5].innerText = num1
}else if(num2 < num1 && num2 < num3){
    tabela.childNodes[1].childNodes[5].innerText = num2
}else if(num3 < num1 && num3<num2){
    tabela.childNodes[1].childNodes[5].innerText = num3
}


