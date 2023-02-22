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

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")

controle.forEach((elemento) =>
{
    elemento.addEventListener("click", (evento) => 
    {
        manipuladados(evento.target.dataset.controle , evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca ,evento.target.dataset.controle );
    })
})


function manipuladados(operacao, controle)
{
    const peca = controle.querySelector("[data-contador]");
    //console.log(controle.querySelector("[data-contador]"));
    
    if(operacao === "-" && parseInt(peca.value) != 0)
    {
        peca.value = parseInt(peca.value) - 1;
    }
    else if( operacao === "+" ) 
    {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca , operacao)
{

    //console.log(peca)
    estatisticas.forEach((elemento) => 
    {
        if(operacao === "-" && parseInt(elemento.textContent) != 0)
        {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca] [elemento.dataset.estatistica]
        }
        else if(operacao === "+")
        {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
        }
        
    })
}
