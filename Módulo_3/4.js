// Quarta - 3.4

import axios from 'axios';

const buscaUsuario = async(usuario) => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(resp.data);
    } catch (error) {
        console.log(error.message, '- user not found');
    }
};

buscaUsuario('milenalinsb');
buscaUsuario('milenalinsDonaDoCursoDeAds');

// const buscaUsuario = async(usuario) => {
//     new Promise((resolve, reject) => {
//         resolve(axios.get(`https://api.github.com/users/${usuario}`));
//     });
// };

// const buscaUserGithub = async(usuario) => {
//     const resp = Promise([await buscaUsuario(usuario)]);
    
//     return resp;
// };

// buscaUserGithub('GabrielAlvesssSssilvasss20001')
// .then((resp) =>{
//     console.log(resp);
// })
// .catch((resp) => {
//     throw new Error('Usuário não existe!')
// });