// carrinhoReducer.ts
import { createSlice, isAction } from "@reduxjs/toolkit";

type Item = {
    nome: string,
    valor: number,
    img: string
}

type DadosGerais = {
    id:string,
    nome:string,
    endereco:string,
    cidade:string,
    cep:string,
    numero:string,
    complemento:string,
}
//IMAGEM / PRODUTO / DESCRICAO / SERVE / VALOR
type AddCarrinho = {
    index: number,
    img: string,
    produto: string,
    descricao: string,
    serve: string,
    valor: number
}

type Restaurante = {
    tipo: string,
    restaurante: string
}

type Props = {
    qtd: number;
    valor: number;
    modalVisible: boolean;
    carrinhoVisivel: boolean;
    lista: Item[];
    excluir: [];
    excluirValor: [];
    carrinhoVisible: boolean;
    entrega: boolean;
    cartao: boolean;
    concluir: false;
    dados: DadosGerais[];
    addCarrinho: AddCarrinho[];
    deleteCarrinho: boolean,
    restaurante: Restaurante[];
    selectRestaurante: string;
    numRestaurante: number
};

const initialState: Props = {
    qtd: 0,
    valor: 0,
    modalVisible: false,
    carrinhoVisivel: false,
    lista: [],
    excluir: [],
    excluirValor: [],
    carrinhoVisible: false,
    entrega: false,
    cartao: false,
    concluir: false,
    dados: [],
    addCarrinho: [],
    deleteCarrinho: false,
    restaurante: [],
    selectRestaurante: "",
    numRestaurante: 0
};

export const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        adicionarItem: (state, action) => {
            state.qtd += action.payload;
        },
        valorItem: (state, action) => {
            state.valor += action.payload;
        },
        callModal2: (state, action) => {
            state.modalVisible = action.payload;
        },
        toggleCarrinho: (state, action) => {
            state.carrinhoVisivel = action.payload;
        },
        listaChartReducer: (state, action) =>{
            state.lista.push(action.payload);
        },
        excluirItem: (state, action) => {
            state.lista.splice(action.payload, 1);
        },
        excluirValor:(state, action)=>{
            state.lista.splice(action.payload, 1);
        },
        carrinhoVisible: (state, action)=>{
            state.carrinhoVisible = action.payload;
        },
        entregaVisible: (state, action)=>{
            state.entrega = action.payload;
        },
        cartaoVisible: (state, action)=>{
            state.cartao = action.payload;
        },
        concluirVisible: (state, action)=>{
            state.concluir = action.payload;
        },
        dadosCompra: (state,action)=>{
            state.dados.push(action.payload);
        },
        addCarrinho: (state, action) => {
            state.addCarrinho.push(action.payload);
        },
        delCarrinho: (state, action) => {
            state.addCarrinho.pop();
        },
        restaurante: (state, action) => {
            state.restaurante.push(action.payload);
        },
        restauranteErase: (state, action) => {
            state.restaurante.pop();
        },
        selecionado:(state, action)=>{
            state.selectRestaurante = action.payload
        },
        numeracaorestaurante: (state, action)=>{
            state.numRestaurante = action.payload;
        }
    },
});

export const { adicionarItem, valorItem, callModal2, toggleCarrinho, listaChartReducer, excluirItem, excluirValor, carrinhoVisible, entregaVisible, cartaoVisible, concluirVisible, dadosCompra, addCarrinho, delCarrinho, restaurante, restauranteErase, selecionado, numeracaorestaurante } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
