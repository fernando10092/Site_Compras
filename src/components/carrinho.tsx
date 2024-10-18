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

    //FORMATAR VALOR
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value);
      };

    //FUNÇÃO VAI PARA A ENTREGA
    const goDelivery = () => {
        if (listaReducer.length > 0) {
            console.log(listaReducer.length);
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
                                    <Valor>{formatCurrency(p.valor)}</Valor>
                                    <ContainerIcon>
                                        <Icon onClick={() => {dispatch(excluirItem(index)); console.log(listaReducer.length)}} src={lixeira} />
                                    </ContainerIcon>
                                </ContainerText>
                            </ContainerItens>
                        </ListaChart>
                    ))}
                </Ul>
                <ContainerDetalhes>
                    <Detalhes>Valor Total</Detalhes>
                    <Detalhes>{formatCurrency(listaReducer.reduce((acumulado, item) => acumulado + item.valor, 0))}</Detalhes>
                </ContainerDetalhes>
                <BotaoContinuar onClick={goDelivery}>Continuar com a entrega</BotaoContinuar>
            </ContainerCarrinho>
        </>
    )
}

//EXPORTAÇÃO CARRINHO
export default Carrinho;