import { useDispatch, useSelector } from "react-redux";
import { ContainerCarrinho, BotaoContinuar, TitleDelivery, LabelText, InputDelivery, DivSmall, ContainerCarrinhoBlack, ContClickExit } from "./carrinhoStyled";
import { entregaVisible, carrinhoVisible, cartaoVisible, dadosCompra } from "../store/reducers/carrinhoReducer";
import { useState } from "react";
import { RootState } from "../store";

const Entrega = () => {

    const date = new Date()

    //USESTATE
    const [nome, setNome] = useState<string>();
    const [cep, setCep] = useState<string>();
    const [endereco, setEndereco] = useState<string>();
    const [numero, setNumero] = useState<string>();
    const [cidade, setCidade] = useState<string>();
    const [complemento, setComplemento] = useState<string>();

    const dispatch = useDispatch();
    const goBackDelivery = () => {
        dispatch(entregaVisible(false));
        dispatch(carrinhoVisible(true));
    }

    const idSelector = useSelector((state: RootState)=> state.carrinho.dados);
    const ident = date.getFullYear()+""+date.getMonth()+""+date.getDay()+""+date.getMilliseconds()//idSelector.length + 1;
    

    const goPay = () => {
        if(nome && endereco && cidade && cep && numero !=""){
            dispatch(dadosCompra({id:ident,nome:nome,endereco:endereco,cidade:cidade,cep:cep,numero:numero,complemento:complemento}));
            dispatch(entregaVisible(false))
            dispatch(cartaoVisible(true))
        }else{
            alert("Preencha os campos obrigatórios!!!")
        }
  
    }

    const closeCarrinho = () => {
        dispatch(entregaVisible(false))
    }



    return (
        <>
            <ContainerCarrinhoBlack opacidade="0.4">
                <ContClickExit onClick={closeCarrinho} />
                <ContainerCarrinho>
                    <TitleDelivery>
                        Entrega
                    </TitleDelivery>
                    <LabelText>Quem irá receber</LabelText>
                    <InputDelivery onChange={(event) => setNome(event.target.value)} width={344} display="block" />
                    <LabelText>Endereço</LabelText>
                    <InputDelivery onChange={(event) => setEndereco(event.target.value)} width={344} display="block" />
                    <LabelText>Cidade</LabelText>
                    <InputDelivery onChange={(event) => setCidade(event.target.value)} width={344} display="block" />

                    <DivSmall>
                        <LabelText>CEP</LabelText>
                        <InputDelivery onChange={(event) => setCep(event.target.value)} width={155} display="inline-block" />
                    </DivSmall>

                    <DivSmall>
                        <LabelText>Número</LabelText>
                        <InputDelivery onChange={(event) => setNumero(event.target.value)} width={155} display="inline-block" />
                    </DivSmall>
                    <LabelText>Complemento (opcional)</LabelText>
                    <InputDelivery onChange={(event) => setComplemento(event.target.value)} width={344} display="block"></InputDelivery>
                    <BotaoContinuar onClick={goPay}>Continuar com o Pagamento</BotaoContinuar>
                    <BotaoContinuar type="submit" onClick={goBackDelivery}>Voltar para o carrinho</BotaoContinuar>

                </ContainerCarrinho>

            </ContainerCarrinhoBlack>

        </>
    )
}

export default Entrega;