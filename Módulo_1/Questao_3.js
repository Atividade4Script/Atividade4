// Questão 3

// Convertendo as funções convencionais em arrow functions

// 3.1

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((item) => item + 10);

console.log(arr2);

// 3.2 

const usuario = { nome: 'Diego', idade: 23 };

const idade = ((user) => {
    return user.idade;
});

console.log(idade(usuario));

// 3.3 

const nome = "Diego";
const idade2 = 23;

let userObj = ((nome, idade2) => {
    return {nome, idade2};
});

console.log(userObj(nome, idade2));
console.log(userObj(nome));

// 3.4

const promise = (() => new Promise((resolve) => resolve()));

console.log(promise);