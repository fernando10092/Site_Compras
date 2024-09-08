import { HeaderStyledPerfil, ImagemStyledPerfil, LogoPerfil, TextStyledPerfil, ContainerStyledPerfil, ImagemStyledPerfilFood } from "./perfil";
import Modal from "../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { adicionarItem } from "../store/reducers/carrinhoReducer";
import { RootState } from "../store";

//HEADER
const HeadPerfil = () => {
    const carrinho = useSelector((state: RootState)=>state.carrinho.qtd)

    return (
        <>
            <HeaderStyledPerfil>
                <ImagemStyledPerfil>
                    <ContainerStyledPerfil>
                        <TextStyledPerfil>
                            Restaurantes
                        </TextStyledPerfil>
                        <LogoPerfil />
                        <TextStyledPerfil>
                            {carrinho} produto(s) no carrinho
                        </TextStyledPerfil>
                    </ContainerStyledPerfil>
                </ImagemStyledPerfil>
            </HeaderStyledPerfil>
            <ImagemStyledPerfilFood />
        </>
    )
}

export default HeadPerfil;