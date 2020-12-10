import axios from 'axios';

class Github {
    static async getRepositories(repo) {
            try{
                const response = await axios.get(`https://api.github.com/repos/${repo}`);
                console.log(response.data);
            
            }
            catch(err){
                console.log(err.message, '- Repositório inexistente')
            };
        
    }
}

Github.getRepositories('milenalinsb/AtividadeLinguagemDeScript');
Github.getRepositories('milenalinsb/nonexiste');