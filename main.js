const form = document.querySelector('#form-agenda')
const inputNomeContato = document.querySelector('#nome')
const inputTelefone = document.querySelector('#tel')

const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    limpaLinha()
})

function adicionaLinha() {
    if (nomes.includes(inputNomeContato.value)) {
        alert(`Este contato: ${inputNomeContato.value} já foi adicionado.`)
    } else {
        nomes.push(inputNomeContato.value)
        numeros.push(parseFloat(inputTelefone.value))
    
        let linha  = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += `</tr>`
    
        linhas += linha
    }
}

function atualizaTabela() {
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas
}

function limpaLinha() {
    inputNomeContato.value = ''
    inputTelefone.value = ''
}