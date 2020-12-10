// Questão 4

// Aplicando destructing em objetos 

// 4.1

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio Grande do Sul',
    estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2

function mostraInfo({nome, idade}) {
    return (`${nome} tem ${idade} anos.`);
};

let resp = mostraInfo({ nome: 'Diego', idade: 23 });

console.log(`\n ${resp}`);