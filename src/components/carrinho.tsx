//IMPORTAÇÕES
import { ContainerCarrinho, Ul, ListaChart, ContainerItens, ImgCarrinho, ContainerText, Item, Valor, ContainerIcon, Icon, ContainerDetalhes, Detalhes, BotaoContinuar } from "./carrinhoStyled";
import lixeira from '../public/assets/lixeira.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { excluirItem, carrinhoVisible, entregaVisible, excluirValor } from "../store/reducers/carrinhoReducer";

//COMPONENTE CARRINHO
const Carrinho = () => {
    //USEDISPACTH
    const dispatch = useDispatch();
    const valor = useSelector((state: RootState) => state.carrinho.valor);
    const listaReducer = useSelector((state: RootState) => state.carrinho.lista);

    //FUNÇÃO VAI PARA A ENTREGA
    const goDelivery = () => {
        if (valor > 0) {
            dispatch(carrinhoVisible(false));
            dispatch(entregaVisible(true));
        } else {
            alert("Seu carrinho está vazio");
        }
    }

    //RETURN
    return (
        <>
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
        </>
    )
}

//EXPORTAÇÃO CARRINHO
export default Carrinho;