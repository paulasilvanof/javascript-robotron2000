const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})
  
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas (peca) {
    
    estatisticas.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    }) 
}


// Exemplos de como o código funciona
//Forma de escrever função anônima com arrow function. 
//É uma função não nomeada que só executa uma vez, e não pode ser chamada novamente. 
// robotron.addEventListener("click", (evento) => {
//     console.log(evento)
// });

// //Dentro dos () temos um parâmetro. Essa função vai receber um nome e vai imprimir esse nome
// function dizOi(nome) {
//     console.log("Oi " + nome)
//     console.log("Bem vindo ao robotron 2000")
// }

// // Aqui eu tenho que declarar qual seria esse parâmetro, no caso o nome da pessoa
// dizOi("Paula")