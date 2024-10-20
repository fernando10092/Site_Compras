import { useDispatch, useSelector } from "react-redux";
import { ContainerCarrinho, BotaoContinuar, TitleDelivery, LabelText, InputDelivery, DivSmall } from "./carrinhoStyled";
import { entregaVisible, carrinhoVisible, cartaoVisible, concluirVisible, ordem } from "../store/reducers/carrinhoReducer";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import { usePurchaseMutation } from "../services/api";

const Cartao = () => {

    //USE DISPATCH
    const dispatch = useDispatch();

    //API
    const [purchase, { isLoading, isError, data }] = usePurchaseMutation();

    useEffect(() => {
        purchase({
            products: [{ id: 100, price: 20 }], delivery: {
                receiver: "Receiver teste", address: {
                    description: "Description teste", city: "maua",
                    zipCode: "0000", number: 10, complement: "casa"
                }
            }, payment: { card: { name: "123", number: "456", code: "789", expires: { month: 10, year: 2024 } } }
        }).then((e) => dispatch(ordem(e.data.orderId)));
    },[])


    //FORMATAR VALOR
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    //VOLTAR
    const goBackAdress = () => {
        dispatch(cartaoVisible(false))
        dispatch(entregaVisible(true));
    }

    //CONCLUIR
    const goConcluir = () => {
        if (nome && numero && cvv && mes && ano != "") {
            dispatch(cartaoVisible(false));
            dispatch(concluirVisible(true));
        } else {
            alert("Preencha todos os campos");
        }
    }

    const listaReducer = useSelector((state: RootState) => state.carrinho.lista);

    //USESTATE
    const [nome, setNome] = useState<string>();
    const [numero, setNumero] = useState<string>();
    const [cvv, setCvv] = useState<string>();
    const [mes, setMes] = useState<string>();
    const [ano, setAno] = useState<string>();

    //RETURN
    return (
        <>
            <ContainerCarrinho>
                <TitleDelivery>
                    Pagamento - Valor a pagar {formatCurrency(listaReducer.reduce((acumulado, item) => acumulado + item.valor, 0))}
                </TitleDelivery>
                <LabelText>Nome no cartão</LabelText>
                <InputDelivery onChange={(event) => setNome(event.target.value)} width={"95%"} display="block"></InputDelivery>

                <br />
                <DivSmall width="60%">
                    <LabelText>Número do cartão</LabelText>
                    <InputDelivery onChange={(event) => setNumero(event.target.value)} width={"100%"} display="inline-block"></InputDelivery>
                </DivSmall>

                <DivSmall width="25%" marginlf="10%">
                    <LabelText>CVV</LabelText>
                    <InputDelivery onChange={(event) => setCvv(event.target.value)} width={"100%"} display="inline-block"></InputDelivery>
                </DivSmall>

                <DivSmall width="42.5%">
                    <LabelText>Mês de vencimento</LabelText>
                    <InputDelivery onChange={(event) => setMes(event.target.value)} width={"100%"} display="inline-block"></InputDelivery>
                </DivSmall>

                <DivSmall width="42.5%" marginlf="10%">
                    <LabelText>Ano de vencimento</LabelText>
                    <InputDelivery onChange={(event) => setAno(event.target.value)} width={"100%"} display="inline-block"></InputDelivery>
                </DivSmall>

                <BotaoContinuar onClick={goConcluir}>Finalizar pagamento</BotaoContinuar>
                <BotaoContinuar onClick={goBackAdress}>Voltar para edição de endereço</BotaoContinuar>
            </ContainerCarrinho>
        </>
    )
}

export default Cartao;