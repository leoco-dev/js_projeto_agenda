const form = document.querySelector('#form-atividade')
const inputNomeAtividade = document.querySelector('#nome-atividade')
const inputNotaAtividade = document.querySelector('#nota-atividade')

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji feliz" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji feliz" />'

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const atividades = []
const notas = []

const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    limpaLinha ()
    atualizaMediaFinal()
})

function adicionaLinha() {
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi incluída.`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha  = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function limpaLinha() {
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    
    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}