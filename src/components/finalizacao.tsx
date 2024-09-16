import { useDispatch, useSelector } from "react-redux";
import { ContainerCarrinho, BotaoContinuar, TitleDelivery, LabelText, InputDelivery, DivSmall, ContainerCarrinhoBlack, Paragrafo } from "./carrinhoStyled";
import { entregaVisible, carrinhoVisible, cartaoVisible, concluirVisible } from "../store/reducers/carrinhoReducer";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import { useNavigate } from 'react-router-dom';
const Finalizacao = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const concluir = ()=>{
        navigate(0);
    }
    const idSelector = useSelector((state: RootState)=>state.carrinho.dados);
    idSelector.map((e)=>e.id)

    return (
        <>
            <ContainerCarrinhoBlack opacidade="0.9">
                <ContainerCarrinho>
                    <TitleDelivery>
                        Pedido Realizado - {idSelector.map((e)=>e.id)}
                    </TitleDelivery>

                    <Paragrafo>
                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                    </Paragrafo>
                    <Paragrafo>
                        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                    </Paragrafo>
                    <Paragrafo>
                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                    </Paragrafo>
                    <Paragrafo>
                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                    </Paragrafo>

                    <BotaoContinuar onClick={concluir}>Concluir</BotaoContinuar>

                </ContainerCarrinho>

            </ContainerCarrinhoBlack>

        </>
    )
}

export default Finalizacao;