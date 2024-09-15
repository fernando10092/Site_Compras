import Data from "./classData"

const Dados = [{
    id:"",
    nome:"",
    endereco: "",
    cidade:"",
    cep:"",
    numero:"",
    complemento:""
}];

Dados[0].id

const dados = new Data("","","","",50,40,"");


//ENVIAR DADOS DO INPUT PARA LISTA
//1 - USESTATE
//2- ENVIAR DADOS PARA PUSH EM LISTA COM REDUCER
//GERAR REPORT NO FINAL COM AS INFORMAÇÕES DADOS + COMPRA