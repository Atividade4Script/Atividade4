"use strict";
// Questão 2
;
function createUser(_a) {
    var nome = _a.nome, idade = _a.idade, cpf = _a.cpf, empresa = _a.empresa;
    var useObjt = {
        nome: nome,
        idade: idade,
        cpf: cpf,
        empresa: empresa
    };
    return useObjt;
}
;
// Criando 4 objetos e colocando-os em userArray
var usuarios = {
    user1: createUser({ nome: 'Milena', idade: 18, cpf: 'ADS111', empresa: 'Rocketseat' }),
    user2: createUser({ nome: 'Gabriel', idade: 18, cpf: 'ADS222', empresa: 'Digital Innovation One' }),
    user3: createUser({ nome: 'Caio', idade: 18, cpf: 'ADS333', empresa: 'Udemy' }),
    user4: createUser({ nome: 'Willian', idade: 18, cpf: 'ADS444', empresa: 'Alura' }),
    user5: createUser({ nome: 'SeeCrano', idade: 74, cpf: 'ADS555', empresa: 'Google' })
};
var userArray = [];
var ind = 0;
for (var _i = 0, _a = Object.entries(usuarios); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    userArray[ind] = value;
    ind++;
}
;
console.log('\n Array de users:');
console.log(userArray);
// 2.1 Usando map para retornar as idades dos users criados
var userAges = userArray.map(function (valor) {
    return valor.idade;
});
console.log("\n Array de Idades: " + userAges);
// 2.2 Usando filter para retornar users maiores de idade que trabalham na Rocketseat
var overAgeRS = userArray.filter(function (objeto) { return objeto.empresa == 'Rocketseat' && objeto.idade >= 18; });
console.log('\n Array de funcionários maiores de idade da Rocketseat: ');
overAgeRS.forEach(function (object) {
    console.log(object.nome);
});
// 2.3 Usando o find para retornar o primeiro user que trabalhe na Google
var googleWorker = userArray.find(function (objeto) { return objeto.empresa == 'Google'; });
console.log("\n Trabalhador da Google: " + (googleWorker === null || googleWorker === void 0 ? void 0 : googleWorker.nome));
// 2.4 
// let doubleAgedUsers = userArray.map(function(valor, index) { 
//         return (
//             {
//                 valor.nome
//                 ((valor.idade) * 2),
//                 valor.empresa
//             }
//         )
// });
var doubleAgedUsers2 = userArray;
doubleAgedUsers2.forEach(function (object) {
    object.idade *= 2;
});
console.log('\n Array de users com idades dobradas:');
console.log(doubleAgedUsers2);
//console.log(userArray.keys);
var ageUntil50 = doubleAgedUsers2.filter(function (objeto) { return objeto.idade <= 50; });
console.log('\n Array de users com até 50 anos:');
console.log(ageUntil50);
