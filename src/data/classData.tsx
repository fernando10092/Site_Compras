class Data {

    id;
    nome;
    endereco;
    cidade;
    cep;
    numero;
    complemento;

    constructor(id: string, nome: string, endereco: string, cidade: string, cep: number, numero: number, complemento: string) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.cidade = cidade;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
    }
}

export default Data;