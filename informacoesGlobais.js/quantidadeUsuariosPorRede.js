
async function quantidadesUsuariosPorRede (params){
const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

const res = await fetch (url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados);

const data = [
    {
        x: nomeDasRedes,
        y: quantidadesUsuariosPorRede,
        type: 'bar'
    }
    
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('usuarios-container')

}