// Questão 1

// Definindo classes e verificando se seus objetos são admins ou não

class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    };
    isAdmin = function(){
        return this.admin;
    }
};

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha);
        super.admin = true;
    };
};

let user = new Usuario('user@gmail.com', 'user****');

let admin = new Admin('admin@gmail.com', 'admin****');

console.log(user.isAdmin());

console.log(admin.isAdmin());