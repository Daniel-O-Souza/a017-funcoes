// EXERCÍCIO 1:

// A:

// function olaNome(nome){
//     console.log(`Olá, ${nome}`)
// }

// olaNome("Daniel")

// B:

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function tabuada(numero){

//     for(let i of array){

//     console.log(`${i} X ${numero} = ${i*numero}`)
//     }
// }

// tabuada(6)

// C:

const olaNome = (nome) => {
    console.log(`Olá, ${nome}`)
}

olaNome("Daniel")


const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tabuada = (numero) => {

    for(let i of array){

    console.log(`${i} X ${numero} = ${i*numero}`)
    }
}

tabuada(6)

tabuada(8)

