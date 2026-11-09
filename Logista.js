import {Usuario} from './Usuario.js';

class Logista extends Usuario{
    cnpj;
    razao_social;
    constructor(id,email,senha,cnpj,razao_social){
        // executa o construtor pai
        super(id,email,senha,cnpj,razao_social)

        this.razao_social = razao_social;
        this.cnpj = cnpj;
    }
    info(){
        console.log("======================")
        console.log("CNPJ " + this.cnpj);
        console.log("Razao_social: " + this.razao_social);
        console.log("======================")
    }
}