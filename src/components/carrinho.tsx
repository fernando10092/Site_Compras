import { useState } from "react";
import { ContainerCarrinhoBlack, ContainerCarrinho, ContainerItens, ImgCarrinho, ContainerText, Item, Valor, ContainerIcon, Icon, ContainerDetalhes, Detalhes, BotaoContinuar } from "./carrinhoStyled";
import itens from '/src/public/assets/imgCarrinho.png';
import lixeira from '/src/public/assets/lixeira.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { valorItem } from "../store/reducers/carrinhoReducer";
const Carrinho = () => {

    const valor = useSelector((state: RootState) => state.carrinho.valor);

    return (
        <>
            <ContainerCarrinhoBlack onClick={(e) => e.stopPropagation()}>
                <ContainerCarrinho>
                    <ContainerItens>
                        <ImgCarrinho src={itens} />
                        <ContainerText>
                            <Item>Pizza Marguerita</Item>
                            <Valor>R$ 50</Valor>
                            <ContainerIcon>
                                <Icon src={lixeira} />
                            </ContainerIcon>
                        </ContainerText>

                    </ContainerItens>
                    <ContainerDetalhes>
                        <Detalhes>Valor Total</Detalhes>
                        <Detalhes>R$ {valor}</Detalhes>
                    </ContainerDetalhes>
                    <BotaoContinuar>Continuar com a entrega</BotaoContinuar>
                </ContainerCarrinho>

            </ContainerCarrinhoBlack>

        </>
    )
}

export default Carrinho;