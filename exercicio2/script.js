// EXERCÍCIO 2:

// A:

function calcularSoma(numero1, numero2){
    const soma = numero1+numero2
    console.log(soma)
}

calcularSoma(5, 6)

// B:

function maior(num1, num2){ 
    const compare = num1 >= num2
    console.log(compare)
}

maior(6, 9)

// C:

function par(numero){

    if(numero % 2 ===0){
        console.log("O número é par.")
    }else{
        console.log("O número é impar.")
    }
}

par(11)

// D:

function mensagem(frase){
    
    console.log(frase.length)
    console.log(frase.toUpperCase())
}

mensagem("Bom dia")