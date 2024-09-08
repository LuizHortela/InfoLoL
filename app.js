
// Associar os botões às funções de filtragem
document.getElementById("btnTopo").addEventListener("click", topoPesquisar);
document.getElementById("btnSelva").addEventListener("click", selvaPesquisar);
document.getElementById("btnMeio").addEventListener("click", meioPesquisar);
document.getElementById("btnAtirador").addEventListener("click", adcPesquisar);
document.getElementById("btnSuporte").addEventListener("click", supPesquisar);



function adcPesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        if (dado.rotaPrimaria.includes("Atirador")) {
            resultados += `
        <div class="item-resultado">
        <h2>
           ${dado.campeao}
        </h2>
            <p class="descricao-meta">ID: ${dado.ID}</p>
            <p class="descricao-meta">Data de Lançamento: ${dado.data}</p>
            <p class="descricao-meta">Ano de Lançamento: ${dado.ano}</p>
            <p class="descricao-meta">Rota Primária: ${dado.rotaPrimaria}</p>
            <p class="descricao-meta">Rota Secundária: ${dado.rotaSecundaria}</p>
            <p class="descricao-meta">Classe: ${dado.classeJogo}</p>
            <p class="descricao-meta">Tipo de Dano:  ${dado.tipoDano}</p>
            <p class="descricao-meta">Região de Origem:  ${dado.regiaoOrigem}</p>
            <p class="descricao-meta">${dado.lore}</p>
            <a href=${dado.build} target="_blank">Saiba mais</a>
            </div> 
        
        `
        }
    }

    section.innerHTML = resultados;
}

function topoPesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        if (dado.rotaPrimaria.includes("Topo")) {
            resultados += `
        <div class="item-resultado">
        <h2>
           ${dado.campeao}
        </h2>
            <p class="descricao-meta">ID: ${dado.ID}</p>
            <p class="descricao-meta">Data de Lançamento: ${dado.data}</p>
            <p class="descricao-meta">Ano de Lançamento: ${dado.ano}</p>
            <p class="descricao-meta">Rota Primária: ${dado.rotaPrimaria}</p>
            <p class="descricao-meta">Rota Secundária: ${dado.rotaSecundaria}</p>
            <p class="descricao-meta">Classe: ${dado.classeJogo}</p>
            <p class="descricao-meta">Tipo de Dano:  ${dado.tipoDano}</p>
            <p class="descricao-meta">Região de Origem:  ${dado.regiaoOrigem}</p>
            <p class="descricao-meta">${dado.lore}</p>
            <a href=${dado.build} target="_blank">Saiba mais</a>
            </div> 
        
        `
        }
    }

    section.innerHTML = resultados;
}

function selvaPesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        if (dado.rotaPrimaria.includes("Selva")) {
            resultados += `
        <div class="item-resultado">
        <h2>
           ${dado.campeao}
        </h2>
            <p class="descricao-meta">ID: ${dado.ID}</p>
            <p class="descricao-meta">Data de Lançamento: ${dado.data}</p>
            <p class="descricao-meta">Ano de Lançamento: ${dado.ano}</p>
            <p class="descricao-meta">Rota Primária: ${dado.rotaPrimaria}</p>
            <p class="descricao-meta">Rota Secundária: ${dado.rotaSecundaria}</p>
            <p class="descricao-meta">Classe: ${dado.classeJogo}</p>
            <p class="descricao-meta">Tipo de Dano:  ${dado.tipoDano}</p>
            <p class="descricao-meta">Região de Origem:  ${dado.regiaoOrigem}</p>
            <p class="descricao-meta">${dado.lore}</p>
            <a href=${dado.build} target="_blank">Saiba mais</a>
            </div> 
        
        `
        }
    }

    section.innerHTML = resultados;
}

function meioPesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        if (dado.rotaPrimaria.includes("Meio")) {
            resultados += `
        <div class="item-resultado">
        <h2>
           ${dado.campeao}
        </h2>
            <p class="descricao-meta">ID: ${dado.ID}</p>
            <p class="descricao-meta">Data de Lançamento: ${dado.data}</p>
            <p class="descricao-meta">Ano de Lançamento: ${dado.ano}</p>
            <p class="descricao-meta">Rota Primária: ${dado.rotaPrimaria}</p>
            <p class="descricao-meta">Rota Secundária: ${dado.rotaSecundaria}</p>
            <p class="descricao-meta">Classe: ${dado.classeJogo}</p>
            <p class="descricao-meta">Tipo de Dano:  ${dado.tipoDano}</p>
            <p class="descricao-meta">Região de Origem:  ${dado.regiaoOrigem}</p>
            <p class="descricao-meta">${dado.lore}</p>
            <a href=${dado.build} target="_blank">Saiba mais</a>
            </div> 
        
        `
        }
    }

    section.innerHTML = resultados;
}


function supPesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        if (dado.rotaPrimaria.includes("Suporte")) {
            resultados += `
        <div class="item-resultado">
        <h2>
           ${dado.campeao}
        </h2>
            <p class="descricao-meta">ID: ${dado.ID}</p>
            <p class="descricao-meta">Data de Lançamento: ${dado.data}</p>
            <p class="descricao-meta">Ano de Lançamento: ${dado.ano}</p>
            <p class="descricao-meta">Rota Primária: ${dado.rotaPrimaria}</p>
            <p class="descricao-meta">Rota Secundária: ${dado.rotaSecundaria}</p>
            <p class="descricao-meta">Classe: ${dado.classeJogo}</p>
            <p class="descricao-meta">Tipo de Dano:  ${dado.tipoDano}</p>
            <p class="descricao-meta">Região de Origem:  ${dado.regiaoOrigem}</p>
            <p class="descricao-meta">${dado.lore}</p>
            <a href=${dado.build} target="_blank">Saiba mais</a>
            </div> 
        
        `
        }
    }

    section.innerHTML = resultados;
}




function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;


    let resultados = ""
    let campeao = "";
    let ano = "";
    let rotaPrimaria = "";
    let classeJogo = "";
    let tipoDano = "";
    let regiaoOrigem = "";



    // Caso de campo vazio
    if (!campoPesquisa) {
        section.innerHTML = "Campo está vazio"
        return
    }




    // - NÃO TENHO IDEIA POR QUE NÃO ESTÁ FUNCIONANDO ESSA LINHA -
    // campoPesquisa = campoPesquisa.toLowerCase()
    for (let dado of dados) {
        campeao = dado.campeao.toLowerCase();
        ano = dado.ano.toLowerCase();
        rotaPrimaria = dado.rotaPrimaria.toLowerCase();
        classeJogo = dado.classeJogo.toLowerCase();
        tipoDano = dado.tipoDano.toLowerCase();
        regiaoOrigem = dado.regiaoOrigem.toLowerCase();


        if (dado.campeao.includes(campoPesquisa) || dado.ano.includes(campoPesquisa) || dado.rotaPrimaria.includes(campoPesquisa) || dado.classeJogo.includes(campoPesquisa) || dado.tipoDano.includes(campoPesquisa) || dado.regiaoOrigem.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <h2>
               ${dado.campeao}
            </h2>
                ID: <p class="descricao-meta">${dado.ID}</p>
                <p class="descricao-meta">Data de Lançamento: ${dado.data}</p>
                <p class="descricao-meta">Ano de Lançamento: ${dado.ano}</p>
                <p class="descricao-meta">Rota Primária: ${dado.rotaPrimaria}</p>
                <p class="descricao-meta">Rota Secundária: ${dado.rotaSecundaria}</p>
                <p class="descricao-meta">Classe: ${dado.classeJogo}</p>
                <p class="descricao-meta">Tipo de Dano:  ${dado.tipoDano}</p>
                <p class="descricao-meta">Região de Origem:  ${dado.regiaoOrigem}</p>
                <p class="descricao-meta">${dado.lore}</p>
                <a href=${dado.build} target="_blank">Saiba mais</a>
                </div> 
            
            `

        }


    }

    //Se nada for encontrado
    if (!resultados) {
        resultados = "Nada foi encontrado"

    }


    section.innerHTML = resultados;

}
// Obtém o elemento do campo de pesquisa
const campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um evento de pressionamento de tecla ao campo de pesquisa
campoPesquisa.addEventListener("keypress", function (event) {
    // Verifica se a tecla pressionada foi o Enter (código 13)
    if (event.keyCode === 13) {
        pesquisar();
    }
});