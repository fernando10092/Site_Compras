import { useState } from "react";
import { ContainerCarrinhoBlack, ContClickExit, ContainerCarrinho, Ul, ListaChart, ContainerItens, ImgCarrinho, ContainerText, Item, Valor, ContainerIcon, Icon, ContainerDetalhes, Detalhes, BotaoContinuar } from "./carrinhoStyled";
import itens from '../public/assets/imgCarrinho.png';
import lixeira from '../public/assets/lixeira.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { valorItem, excluirItem, carrinhoVisible, entregaVisible, excluirValor } from "../store/reducers/carrinhoReducer";
import { Link, useNavigate } from "react-router-dom";
const Carrinho = () => {

    const dispatch = useDispatch();
    const valor = useSelector((state: RootState) => state.carrinho.valor);
    const item = useSelector((state: RootState) => state.carrinho.qtd);
    const listaReducer = useSelector((state: RootState) => state.carrinho.lista);
    const exclusao = useSelector((state: RootState) => state.carrinho.lista);
    const adicionadoCarrinho = useSelector((state: RootState) => state.carrinho.addCarrinho);

    const closeCarrinho = () => {
        dispatch(carrinhoVisible(false))
    }

    const goDelivery = () => {

        //{listaReducer.reduce((acumulado, item) => acumulado + item.valor, 0).toFixed(2)}

        if (valor > 0) {

            dispatch(carrinhoVisible(false));
            dispatch(entregaVisible(true));

        } else {
            alert("Seu carrinho está vazio");
        }

    }


    const removerValor = () => {

    }

    return (
        <>
            <ContainerCarrinhoBlack opacidade="0.4" onClick={(e) => e.stopPropagation()}>

                <ContClickExit onClick={closeCarrinho} />

                <ContainerCarrinho>
                    <Ul>
                        {listaReducer.map((p, index) => (

                            <ListaChart key={index}>

                                <ContainerItens>
                                    <ImgCarrinho src={p.img} />
                                    <ContainerText>
                                        <Item>{p.nome}</Item>
                                        <Valor>R$ {p.valor.toFixed(2)}</Valor>
                                        <ContainerIcon>
                                            <Icon onClick={() => dispatch(excluirItem(index))} src={lixeira} />
                                        </ContainerIcon>
                                    </ContainerText>
                                </ContainerItens>
                            </ListaChart>
                        ))}
                    </Ul>
                    <ContainerDetalhes>
                        <Detalhes>Valor Total</Detalhes>
                        <Detalhes>R$ {listaReducer.reduce((acumulado, item) => acumulado + item.valor, 0).toFixed(2)}</Detalhes>
                    </ContainerDetalhes>
                    <BotaoContinuar onClick={goDelivery}>Continuar com a entrega</BotaoContinuar>
                </ContainerCarrinho>
            </ContainerCarrinhoBlack>
        </>
    )
}

export default Carrinho;