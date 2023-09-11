import * as calculadora from "./calculadora.js";
import { toggleDisplay } from "./display.js";


const corpo = document.querySelector('#buttons')

//operadores
const somar = document.getElementById('mais')
const igual = document.getElementById("igual")
const limpar = document.getElementById("limpar")
const troca = document.getElementById("troca")
const vezes = document.getElementById("vezes")
const menos = document.getElementById("menos")
const mais = document.getElementById("mais")
const ponto = document.getElementById("ponto")

let numberone = ""
let numbertwo = ""
let operacao = ""
let operacao2 = ""

corpo.addEventListener('click', (e) => {

    if (e.target.classList.contains('operadores')) {

        if (operacao == "") {

            operacao = e.target.innerText
            toggleDisplay(0)

        } else {
            operacao2 = e.target.innerText
            if (operacao2 != "=") {
                cal(operacao2)
            } else {
                cal(operacao)
            }
        }

    } else if (e.target.dataset.action === "number" && operacao != "" && numberone != "") {
        const clicado2 = e.target.innerText
        numbertwo = clicado2 + numbertwo
        toggleDisplay(numbertwo.split('').reverse().join(''))

    } else if (e.target.dataset.action === "number") {
        // operacao = ""

        const clicado = e.target.innerText

        numberone = clicado + numberone
        toggleDisplay(numberone.split('').reverse().join(''))

    }

    else if (numberone != "" && numbertwo != "" && operacao != "" && operacao2 != "") {

        numberone = ""
        numbertwo = ""
        operacao = ""
        operacao2 = ""
        toggleDisplay(0)

    }

})

//funções

function cal(valor) {

    switch (valor) {
        case '+':
            const resul = calculadora.somar(numberone.split('').reverse().join(''), numbertwo.split('').reverse().join(''))
            toggleDisplay(resul)
            break;
        case '-':
            const resul2 = calculadora.subtrair(numberone.split('').reverse().join(''), numbertwo.split('').reverse().join(''))
            toggleDisplay(resul2)
            break;
        case '÷':
            const result3 = calculadora.dividir(numberone.split('').reverse().join(''), numbertwo.split('').reverse().join(''))
            toggleDisplay(result3)
            break;
        case 'x':
            const resul4 = calculadora.multiplicar(numberone.split('').reverse().join(''), numbertwo.split('').reverse().join(''))
            toggleDisplay(resul4)
            break;
        case 'AC':
            numberone = ""
            numbertwo = ""
            operacao = ""
            operacao2 = ""
            toggleDisplay(0)
            break;
        case '+/-':
            if (numberone > 0 || numberone < 0) {
                numberone = (numberone * -1)
                toggleDisplay(numberone)
            } else if (numbertwo < 0 || numbertwo > 0) {
                numbertwo = numbertwo * -1
                toggleDisplay(numbertwo)
            }
            break;
        case '=':
            if (resul != 0) {
                toggleDisplay(resul)
            } else if (resul2 != 0) {
                toggleDisplay(resul2)
            } else if (result3 != 0) {
                toggleDisplay(result3)
            } else if (resul4 != 0) {
                toggleDisplay(resul4)
            }
    }
}
document.querySelectorAll(".button").forEach((size) => {  //função para ativar a tecla 
    size.addEventListener('click', (e) => {
        document.querySelector('#buttons .button.selecionado').classList.remove('selecionado');
        size.classList.add('selecionado')
    })
})

corpo.addEventListener('click', (event) => {
    console.log("numberONE: " + numberone)
    console.log("Operacao: " + operacao)
    console.log("NUMBERTWO: " + numbertwo)
    console.log("Operacao2: " + operacao2)
    console.log("---------------------")
})
