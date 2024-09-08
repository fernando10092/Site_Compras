import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";
import Modal from "../../components/modal";

type Props = {
    qtd: number,
    valor: number,
}

const initialState: Props = {
    qtd: 0,
    valor: 0,
}

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
        callModal: (state, action) => {
            //Gerando State
            const [add, setAdd] = useState<JSX.Element>();
            setAdd(action.payload);
        },
        callModal2: (state, action)=>{
            const [chart, setChart] = useState<boolean>();
            setChart(action.payload)
        }
    }
})

export const { adicionarItem, valorItem, callModal, callModal2 } = carrinhoSlice.actions

export default carrinhoSlice.reducer