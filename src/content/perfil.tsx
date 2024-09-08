//IMPORTANÇÕES
import { Lista, Botao, Paragrafo, Titulo, Conteudo, Imagem, Contetitle, Avaliacao, Textimage2, Containerfoto, Estrela } from ".";
import estrela from '/src/public/assets/estrela.png';
import { ListaProduct } from "../products/lista";
import HeadPerfil from "../headers/headPerfil";
import { ContainerPerfil, Ul, CardPerfil, ImagemCard, NomeProdutoPerfil, DescricaoPerfil, BotaoPerfil } from "./perfilStyled";
import Rodapecomponents from "../footer/rodape";
import marguerita from '/src/public/assets/Marguerita.png';
import { ListaCarrinho } from "../products/listaAdd";
import Modal from "../components/modal";
import { useState } from "react";
import { ContainerBlack, Op, ContStyledModal, Props, DivOpen } from "../components";
import { preprocessCSS } from "vite";
import Carrinho from "../components/carrinho";
import { useDispatch } from "react-redux";
import { callModal, callModal2 } from "../store/reducers/carrinhoReducer";

//CONSTANTE PERFIL
const Perfil = () => {

    //INSTANCIANDO O USEDISPATCH
    const dispatch = useDispatch()

    //USESTATE MOSTRAR DISPLAY CARRINHO
    const [carrinho, setCarrinho] = useState<Props>({ Display: "none" });

    //USESTATE PARA ELEMENTOS JSX
    const [add, setAdd] = useState<JSX.Element>();

    // FUNCAO CHAMANDO MODAL 1
    function funcaoModal1() {
        dispatch(callModal(setAdd(<Modal />)))
    }


    //RETURN - /PERFIL
    return (
        <>

            <HeadPerfil />
            <ContStyledModal Display={carrinho.Display} />
            <DivOpen>{add}</DivOpen>

            {/**PERCORRENDO A LISTA COM MAP */}
            {ListaCarrinho.map((p) => {
                return (
                    <>
                        <ContainerPerfil>
                            <Ul>
                                <CardPerfil>
                                    <ImagemCard src={marguerita} alt="marguerita" />
                                    <NomeProdutoPerfil>{p.produto}</NomeProdutoPerfil>
                                    <DescricaoPerfil>{p.descricao}</DescricaoPerfil>
                                    {/**BOTAO PARA CHAMAR O MODAL 1 E ADD CARRINHO*/}
                                    <BotaoPerfil onClick={funcaoModal1}>Adicionar ao carrinho</BotaoPerfil>
                                </CardPerfil>
                            </Ul>
                        </ContainerPerfil>
                    </>
                )
            })}
            <Rodapecomponents />

        </>
    )
}

//EXPORTANDO
export default Perfil;