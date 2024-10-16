// IMPORTAÇÕES
import { DivHero, ImgHero, HeaderStyledPerfil, ContLogo, ImagemStyledPerfil, LogoPerfil, TextStyledPerfil, ContainerStyledPerfil, ImagemStyledPerfilFood, DivRestaurante, TextStyledRestaurante, TextStyledRestaurante2 } from "./perfil";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { carrinhoVisible, listaChartReducer } from "../store/reducers/carrinhoReducer";
import { useNavigate } from "react-router-dom";
import logo from '../public/assets/logo.png';
import vector from '../public/assets/Vector.png';
import { useEffect, useState } from "react";

//TIPO
type HeadPerfilProps = {
    onCarrinhoClick: () => void;
};

// COMPONENTE HEAD PERFIL
const HeadPerfil = ({ onCarrinhoClick }: HeadPerfilProps) => {

    //USE DISPATCH
    const dispatch = useDispatch();

    //USESTATE QUANTIDADE NO CARRINHO
    const qtd = useSelector((state: RootState) => state.carrinho.lista);

    //CHAMANDO PAGINA INICIAL
    const navigate = useNavigate();
    const funcHome = () => {
        navigate("/")
    }

    //VISIBILIDADE DO CARRINHO
    const returnCarrinho = () => {
        dispatch(carrinhoVisible(true));
    }

    //USESELECTOR
    const dadosRestaurante = useSelector((state: RootState) => state.carrinho.restaurante);
    const numberRestaurante = useSelector((state: RootState) => state.carrinho.numRestaurante);

    //USEEFFECT E FETCH
    const [restaurantetipo, setRestaurantetipo] = useState([]);
    const [restaurantetitulo, setRestaurantetitulo] = useState([]);
    const [restauranteimg, setRestauranteimg] = useState<string>();
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then((res) => res.json()).then((res) => {
            setRestaurantetipo(res[numberRestaurante]['tipo']); setRestaurantetitulo(res[numberRestaurante]['titulo']); setRestauranteimg(res[numberRestaurante]['capa'])
        });
    }, []);

    //RETRUN
    return (
        <>
            <HeaderStyledPerfil>
                <ImagemStyledPerfil img={vector}>
                    <ContainerStyledPerfil>
                        <TextStyledPerfil onClick={funcHome}>Restaurantes</TextStyledPerfil>
                        <ContLogo>
                            <LogoPerfil src={logo} onClick={() => navigate(0)} />
                        </ContLogo>
                        <TextStyledPerfil onClick={returnCarrinho}>
                            {qtd.length} produto(s) no carrinho
                        </TextStyledPerfil>
                    </ContainerStyledPerfil>
                </ImagemStyledPerfil>
            </HeaderStyledPerfil>
            <DivHero>
                <>
                    <DivRestaurante>
                        <TextStyledRestaurante>{restaurantetipo}</TextStyledRestaurante>
                        <TextStyledRestaurante2>{restaurantetitulo}</TextStyledRestaurante2>
                    </DivRestaurante>
                </>
                <ImgHero><ImagemStyledPerfilFood src={restauranteimg} /></ImgHero>
            </DivHero>
        </>
    );
};

//EXPORTAÇÃO
export default HeadPerfil;
