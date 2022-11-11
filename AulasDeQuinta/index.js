let dados = []

function criarBase() {
    let modelo = document.getElementById("modelo").value
    let placa = document.getElementById("placa").value
    let cor = document.getElementById("cor").value
    let entrada = document.getElementById("entrada").value

    let objeto = {
        nome: `${nome}`,
        rgm: `${rgm}`,
        faltas: `${faltas}`
    }

    dados.push(objeto)

    console.log(dados);
}

function criarTabela() {
    document.getElementById("corpotabela").innerHTML = ""

    dados.forEach(function(element, index){
        let tabela = document.getElementById("corpotabela")
        let tr = document.createElement('tr') //tr para tabela
        
        tr.innerHTML = `
            <tr>
                <td>${dados[index].nome}</td>
                <td>${dados[index].rgm}</td>
                <td>${dados[index].faltas}</td>
            </tr>
        `

        tabela.appendChild(tr)
    })
}