// IMPORTAÇÕES
import { HeaderStyledPerfil, ImagemStyledPerfil, LogoPerfil, TextStyledPerfil, ContainerStyledPerfil, ImagemStyledPerfilFood, DivRestaurante, TextStyledRestaurante, TextStyledRestaurante2 } from "./perfil";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { carrinhoVisible, listaChartReducer } from "../store/reducers/carrinhoReducer";
import { useNavigate } from "react-router-dom";

//TIPO
type HeadPerfilProps = {
    onCarrinhoClick: () => void;
};

// COMPONENTE HEAD PERFIL
const HeadPerfil = ({ onCarrinhoClick }: HeadPerfilProps) => {

    const dispatch = useDispatch();

    //USESTATE QUANTIDADE NO CARRINHO
    const carrinho = useSelector((state: RootState) => state.carrinho.qtd);
    const qtd = useSelector((state: RootState) => state.carrinho.lista);

    //CHAMANDO PAGINA INICIAL
    const navigate = useNavigate();
    const funcHome = () => {
        navigate("/")
    }

    //
    const returnCarrinho = () => {
        dispatch(carrinhoVisible(true));
    }

    //USESELECTOR
    const dadosRestaurante = useSelector((state: RootState) => state.carrinho.restaurante);
    return (
        <>
            <HeaderStyledPerfil>
                <ImagemStyledPerfil>
                    <ContainerStyledPerfil>
                        <TextStyledPerfil onClick={funcHome}>Restaurantes</TextStyledPerfil>
                        <LogoPerfil onClick={()=>window.location.reload()} />
                        <TextStyledPerfil onClick={returnCarrinho}>
                            {qtd.length} produto(s) no carrinho
                        </TextStyledPerfil>
                    </ContainerStyledPerfil>
                </ImagemStyledPerfil>
            </HeaderStyledPerfil>

            <ImagemStyledPerfilFood>
                {dadosRestaurante.map((p) => (
                    <>
                        <DivRestaurante>
                            <TextStyledRestaurante>{p.tipo}</TextStyledRestaurante>
                            <TextStyledRestaurante2>{p.restaurante}</TextStyledRestaurante2>

                        </DivRestaurante>
                    </>
                ))}

            </ImagemStyledPerfilFood>
        </>
    );
};

export default HeadPerfil;
