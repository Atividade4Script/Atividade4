// Segunda - 3.2

import axios from 'axios';

async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch(err){
        console.log(err.message, '- user not found');
    };

}

getUserFromGithub('milenalinsb');
getUserFromGithub('milenalinsBBB2021');