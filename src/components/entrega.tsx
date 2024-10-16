//IMPORTAÇÕES
import { useDispatch } from "react-redux";
import { ContainerCarrinho, BotaoContinuar, TitleDelivery, LabelText, InputDelivery, DivSmall } from "./carrinhoStyled";
import { entregaVisible, carrinhoVisible, cartaoVisible, dadosCompra } from "../store/reducers/carrinhoReducer";
import { useState } from "react";

//COMPONENTE ENTREGA
const Entrega = () => {

    //INSTANCIANDO DATA
    const date = new Date()

    //USESTATE
    const [nome, setNome] = useState<string>();
    const [cep, setCep] = useState<string>();
    const [endereco, setEndereco] = useState<string>();
    const [numero, setNumero] = useState<string>();
    const [cidade, setCidade] = useState<string>();
    const [complemento, setComplemento] = useState<string>();

    //USE DISPATCH
    const dispatch = useDispatch();

    //AÇÃO DE VOLTAR
    const goBackDelivery = () => {
        dispatch(entregaVisible(false));
        dispatch(carrinhoVisible(true));
    }

    //DATA
    const ident = date.getFullYear() + "" + date.getMonth() + "" + date.getDay() + "" + date.getMilliseconds()//idSelector.length + 1;

    //VAI PARA O PAGAMENTO
    const goPay = () => {
        if (nome && endereco && cidade && cep && numero != "") {
            dispatch(dadosCompra({ id: ident, nome: nome, endereco: endereco, cidade: cidade, cep: cep, numero: numero, complemento: complemento }));
            dispatch(entregaVisible(false))
            dispatch(cartaoVisible(true))
        } else {
            alert("Preencha os campos obrigatórios!!!")
        }
    }

    //RETURN
    return (
        <>
            <ContainerCarrinho>
                <TitleDelivery>
                    Entrega
                </TitleDelivery>
                <LabelText>Quem irá receber</LabelText>
                <InputDelivery onChange={(event) => setNome(event.target.value)} width={"95%"} display="block" />
                <LabelText>Endereço</LabelText>
                <InputDelivery onChange={(event) => setEndereco(event.target.value)} width={"95%"} display="block" />
                <LabelText>Cidade</LabelText>
                <InputDelivery onChange={(event) => setCidade(event.target.value)} width={"95%"} display="block" />
                <DivSmall width="40%">
                    <LabelText>CEP</LabelText>
                    <InputDelivery onChange={(event) => setCep(event.target.value)} width={"100%"} display="inline-block" />
                </DivSmall>
                <DivSmall width="40%" marginlf="13.5%">
                    <LabelText>Número</LabelText>
                    <InputDelivery onChange={(event) => setNumero(event.target.value)} width={"100%"} display="inline-block" />
                </DivSmall>
                <LabelText>Complemento (opcional)</LabelText>
                <InputDelivery onChange={(event) => setComplemento(event.target.value)} width={"95%"} display="block"></InputDelivery>
                <BotaoContinuar onClick={goPay}>Continuar com o Pagamento</BotaoContinuar>
                <BotaoContinuar type="submit" onClick={goBackDelivery}>Voltar para o carrinho</BotaoContinuar>
            </ContainerCarrinho>
        </>
    )
}

//EXPORTAÇÃO ENTREGA
export default Entrega;