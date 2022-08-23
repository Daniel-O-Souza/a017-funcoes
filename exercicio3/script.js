//EXERCÍCIO 3:

const number1 = +prompt("Digite um número:")

const number2 = +prompt("digite um número:")

function somar(numero1, numero2){
    const soma = numero1+numero2
    console.log(`${number1} + ${number2} = ${soma}`)

}

function subtrair(num1, num2){
    const subtracao = num1-num2
    console.log(`${number1} - ${number2} = ${subtracao}`)
    
}

function dividir(n1, n2){
    const divisao = n1/n2
    console.log(`${number1} / ${number2} = ${divisao}`)
}

function multiplicar(numb1, numb2){
    const multiplicacao = numb1*numb2
    console.log(`${number1} x ${number2} = ${multiplicacao}`)
}


somar(number1, number2)

subtrair(number1, number2)

dividir(number1, number2)

multiplicar(number1, number2)