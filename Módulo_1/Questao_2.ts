// Questão 2

// Definindo interface dos objetos 'user' e a função de criação desses objetos

interface UserInterface{
    nome: string,
    idade: number,
    cpf: string,
    empresa: string
};

function createUser({nome, idade, cpf, empresa}:UserInterface) {
    const useObjt = {
        nome,
        idade,
        cpf,
        empresa
    };
    return useObjt;
};

// Criando 4 objetos e colocando-os em userArray

const usuarios = {
    user1: createUser({nome: 'Milena', idade: 18, cpf: 'ADS111', empresa: 'Rocketseat'}),
    user2: createUser({nome: 'Gabriel', idade: 18, cpf: 'ADS222', empresa: 'Digital Innovation One'}),
    user3: createUser({nome: 'Caio', idade: 18, cpf: 'ADS333', empresa: 'Udemy'}),
    user4: createUser({nome: 'Willian', idade: 18, cpf: 'ADS444', empresa: 'Alura'}),
    user5: createUser({nome: 'SeeCrano', idade: 74, cpf: 'ADS555', empresa: 'Google'})
};

let userArray: Array<UserInterface> = [];

let ind: number = 0;

for (var [key, value] of Object.entries(usuarios)) {
    userArray[ind] = value;
    ind++;
};

console.log('\n Array de users:')
console.log(userArray);

// 2.1 Usando map para retornar as idades dos users criados

let userAges = userArray.map((valor) =>
    valor.idade
);

console.log(`\n Array de Idades: ${userAges}`);

// 2.2 Usando filter para retornar users maiores de idade que trabalham na Rocketseat

let overAgeRS = userArray.filter((objeto) => objeto.empresa == 'Rocketseat' && objeto.idade >= 18);

console.log('\n Array de funcionários maiores de idade da Rocketseat: ');
overAgeRS.forEach(object => {
    console.log(object.nome);
});

// 2.3 Usando o find para retornar o primeiro user que trabalhe na Google

let googleWorker = userArray.find((objeto) => objeto.empresa == 'Google');

console.log(`\n Trabalhador da Google: ${googleWorker?.nome}`);

// 2.4 

let doubleAgedUsers = userArray.map(function(valor, index) { 
        {
            valor.nome,
            ((valor.idade) * 2),
            valor.empresa
        }
});

// let doubleAgedUsers2 = userArray;

// doubleAgedUsers2.forEach(function(object) {
//     object.idade *= 2;
// });

console.log('\n Array de users com idades dobradas:');
console.log(doubleAgedUsers);

//console.log(userArray.keys);

let ageUntil50 = doubleAgedUsers.filter((objeto) => objeto);

console.log('\n Array de users com até 50 anos:')
console.log(ageUntil50);