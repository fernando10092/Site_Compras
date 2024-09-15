// IMPORTAÇÕES
import React, { useEffect, useRef, useState } from "react";
import HeadPerfil from "../headers/headPerfil";
import { ContainerPerfil, Ul, CardPerfil, ImagemCard, NomeProdutoPerfil, DescricaoPerfil, BotaoPerfil } from "./perfilStyled";
import marguerita from '../public/assets/marguerita.png';
import { ListaCarrinho } from "../products/listaAdd";
import Modal from "../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { callModal2, toggleCarrinho as toggleCarrinhoAction, carrinhoVisible, cartaoVisible, addCarrinho } from "../store/reducers/carrinhoReducer";
import { RootState } from "../store";
import Carrinho from "../components/carrinho";
import Rodapecomponents from "../footer/rodape";
import Entrega from "../components/entrega";
import Cartao from "../components/cartao";
import Finalizacao from "../components/finalizacao";
import { isAction } from "@reduxjs/toolkit";
import { ListaCarrinho4 } from "../products/listaAdd4";

//PERFIL
const Perfil4 = () => {
    //USEDISPATCH
    const dispatch = useDispatch();
    //USESELECTOR
    const modalVisible = useSelector((state: RootState) => state.carrinho.modalVisible);
    //USESELECTOR
    const carrinhoVisivel = useSelector((state: RootState) => state.carrinho.carrinhoVisivel);
    //USESELECTOR
    const carrinhoV = useSelector((state: RootState) => state.carrinho.carrinhoVisible);
    //USESELECTOR
    const entregaVisible = useSelector((state: RootState) => state.carrinho.entrega);
    //USESELECTOR
    const cartaoVisible = useSelector((state: RootState) => state.carrinho.cartao);
    //USESELECTOR
    const finalizacaoVisible = useSelector((state: RootState) => state.carrinho.concluir);

    //USEREF
    const carrinhoRef = useRef<HTMLDivElement>(null);

    //INDEX / IMAGEM / PRODUTO / DESCRICAO / SERVE / VALOR
    const [id, setId] = useState<number>();
    const [imagem, setImagem] = useState<string>();
    const [produtos, setProdutos] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [serve, setServe] = useState<string>();
    const [valores, setValores] = useState<string>();

    const adicionado = useSelector((state: RootState)=>state.carrinho.addCarrinho)

    const showModal = () => {
        dispatch(callModal2(true));
    };

    const handleToggleCarrinho = () => {
        dispatch(toggleCarrinhoAction(!carrinhoVisivel));
    };

    // Fechar o carrinho ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (carrinhoRef.current && !carrinhoRef.current.contains(event.target as Node)) {
                dispatch(toggleCarrinhoAction(false));
            }
        };

        // Adiciona o event listener para detectar cliques fora do carrinho
        document.addEventListener("mousedown", handleClickOutside);

        // Remove o event listener quando o componente for desmontado
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch, carrinhoVisivel]);



    return (
        <>
            <HeadPerfil onCarrinhoClick={handleToggleCarrinho} />
            {modalVisible && <Modal />}
            {carrinhoV && <Carrinho />}
            {entregaVisible && <Entrega />}
            {cartaoVisible && <Cartao />}
            {finalizacaoVisible && <Finalizacao />}

            {carrinhoVisivel && (
                <div ref={carrinhoRef} style={{ position: 'relative', zIndex: 1000 }}>
                    <Carrinho />
                </div>
            )}
            <ContainerPerfil >
                {ListaCarrinho4.map((p, index) => (
                    <Ul>
                        <CardPerfil key={index}>
                            <ImagemCard src={p.img} />
                            <NomeProdutoPerfil>{p.produto}</NomeProdutoPerfil>
                            <DescricaoPerfil>{p.descricao}</DescricaoPerfil>
                            <BotaoPerfil onClick={
                                ()=>{dispatch(addCarrinho({index:index,img:p.img,produto:p.produto,descricao:p.descricao,serve:p.serve,valor:p.valor})); showModal()}
                            }>Adicionar ao carrinho</BotaoPerfil>
                        </CardPerfil>
                    </Ul>
                ))}
            </ContainerPerfil>

            <Rodapecomponents />
        </>
    );
};

export default Perfil4;
