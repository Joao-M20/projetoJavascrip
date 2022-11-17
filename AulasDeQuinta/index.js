let dados = []

console.log(dados);

function Estacionar() {
    let modelo = document.getElementById('modelo').value;
    let placa = document.getElementById('placa').value;
    let cor = document.getElementById('cor').value;
    let entrada = document.getElementById('entrada').value;
    let saida = document.getElementById('saida').value;

    let objeto = {
        modelo: `${modelo}`,
        placa: `${placa}`,
        cor: `${cor}`,
        entrada: `${entrada}`,
        saida: `${saida}`
    }

    dados.push(objeto)
}

function Saida() {
    
    let entrada = dados[0].entrada
    let saida = dados[0].saida

    
    let Nentrada = Number(entrada.split(':')[0])
    let Nsaida = Number(saida.split(':')[0])
    
    let calculo = 5 + (2 * (Nsaida - Nentrada))

    alert(`O usuario vai pagar ${calculo}`)
}

function Mostrar() {

    let table = document.getElementById('table');       //tabela do html, onde vamos inserir os dados.
    let tabela;

    if (dados == 0) {
        alert("Primeiro Estacione o carro. Clique em Estacionar Carro")
    } else {

        dados.forEach(element => {
            table
        });

        
        let tabela = table.innerHTML + `
            <tr>
                <td>${dados[0].modelo}</td>
                <td>${dados[0].placa}</td>
                <td>${dados[0].cor}</td>
                <td>${dados[0].entrada}</td>
                <td>${dados[0].saida}</td>
            </tr>
        `
        table.innerHTML = tabela
    }    
}
