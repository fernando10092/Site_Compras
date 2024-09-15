import { useDispatch, useSelector } from "react-redux";
import { ContainerCarrinho, BotaoContinuar, TitleDelivery, LabelText, InputDelivery, DivSmall, ContainerCarrinhoBlack, ContClickExit } from "./carrinhoStyled";
import { entregaVisible, carrinhoVisible, cartaoVisible, concluirVisible } from "../store/reducers/carrinhoReducer";
import { RootState } from "../store";
import { useState } from "react";
const Cartao = () => {
    const dispatch = useDispatch();
    const goBackAdress = () => {
        dispatch(cartaoVisible(false))
        dispatch(entregaVisible(true));

    }

    const goConcluir = () => {
        if (nome && numero && cvv && mes && ano != "") {
            dispatch(cartaoVisible(false));
            dispatch(concluirVisible(true));
        }else{
            alert("Preencha todos os campos");
        }
    }

    const closeCarrinho = () => {
        dispatch(cartaoVisible(false))
    }

    const valor = useSelector((state: RootState) => state.carrinho.valor);
    const listaReducer = useSelector((state: RootState) => state.carrinho.lista);

    const [nome, setNome] = useState<string>();
    const [numero, setNumero] = useState<string>();
    const [cvv, setCvv] = useState<string>();
    const [mes, setMes] = useState<string>();
    const [ano, setAno] = useState<string>();

    return (
        <>
            <ContainerCarrinhoBlack opacidade="0.4">
                <ContClickExit onClick={closeCarrinho} />
                <ContainerCarrinho>
                    <TitleDelivery>
                        Pagamento - Valor a pagar R$ {listaReducer.reduce((acumulado, item) => acumulado + item.valor, 0).toFixed(2)}
                    </TitleDelivery>
                    <LabelText>Nome no cartão</LabelText>
                    <InputDelivery onChange={(event) => setNome(event.target.value)} width={344} display="block"></InputDelivery>

                    <DivSmall>
                        <LabelText>Número do cartão</LabelText>
                        <InputDelivery onChange={(event) => setNumero(event.target.value)} width={155} display="inline-block"></InputDelivery>
                    </DivSmall>

                    <DivSmall>
                        <LabelText>CVV</LabelText>
                        <InputDelivery onChange={(event) => setCvv(event.target.value)} width={155} display="inline-block"></InputDelivery>
                    </DivSmall>

                    <DivSmall>
                        <LabelText>Mês de vencimento</LabelText>
                        <InputDelivery onChange={(event) => setMes(event.target.value)} width={155} display="inline-block"></InputDelivery>
                    </DivSmall>

                    <DivSmall>
                        <LabelText>Ano de vencimento</LabelText>
                        <InputDelivery onChange={(event) => setAno(event.target.value)} width={155} display="inline-block"></InputDelivery>
                    </DivSmall>

                    <BotaoContinuar onClick={goConcluir}>Finalizar pagamento</BotaoContinuar>
                    <BotaoContinuar onClick={goBackAdress}>Voltar para edição de endereço</BotaoContinuar>

                </ContainerCarrinho>

            </ContainerCarrinhoBlack>

        </>
    )
}

export default Cartao;