// Importando Usuario por default, {idade} e {idade} com alias, de function.js

import ClassUsuario from './functions.js';
ClassUsuario.info();

import {idade} from './functions.js';
console.log (idade);

import {idade as IdadeUsuario} from './functions.js';
console.log(IdadeUsuario);
