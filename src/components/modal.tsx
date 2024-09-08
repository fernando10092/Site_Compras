import { useState } from "react";
import { ContStyledModal, ImgPizzaModal, ContStyledModalText, ProdutoModal, DescricaoModal, BotaoModal, BotaoClose } from ".";
import pizza from '/src/public/assets/marguerita2.png';
import { DivOpen } from ".";
import Carrinho from "./carrinho";
import fcTest from "../headers/headPerfil";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { adicionarItem, callModal, callModal2, valorItem } from "../store/reducers/carrinhoReducer";
import Perfil from "../content/perfil";
import { ContainerBlack, Op } from ".";

//MODAL
const Modal = () => {

    //USESTATE FUNDO MODAL OPACIDADE
    const [opac, setOpac] = useState<Op>({ Opacidade: "0.5" });

    //INSTANCIANDO O USEDISPATCH
    const dispatch = useDispatch();

    //USESTATE MOSTRAR CONTEUDO
    const [isVisible, setIsVisible] = useState(true);
    // DUNCAO PARA FECHAR O MODAL
    const closeModal = () => {
        setIsVisible(false); //DEFINE PARA FALSO
        window.location.reload(); // RECARREGA A PAGINA
    };

    //USESTATE CARRINHO - USANDO ??
    const [lcarrinho, setLcarrinho] = useState<JSX.Element>();

    //USESTATE ELEMENTO JSX
    const [add, setAdd] = useState<JSX.Element>()

    //FUNCAO PARA ? #####RESOLVER AQUI
    const [chart, setChart] = useState<boolean>(false);

    function callCarrinho() {
        //ADICIONA A QUATIDADE NO CARRINHO /PERFIL
        dispatch(adicionarItem(1))
        dispatch(valorItem(69.90))

        ///Fechar Modal 1
        setIsVisible(false);

        //CHAMA O CARRINHO ? MODAL 2 #####RESOLVER AQUI
        dispatch(callModal2(setChart(true)));
    }
  

    //RETURN <MODAL 1>
    return (
        <>
            {chart && <Carrinho />}
            {isVisible && (

                < ContainerBlack Opacidade={opac.Opacidade}>
                    <ContStyledModal>
                        <ImgPizzaModal src={pizza} />
                        <ContStyledModalText>
                            <div>
                                <BotaoClose onClick={closeModal}>X</BotaoClose>
                            </div>
                            <ProdutoModal>
                                Pizza Marguerita
                            </ProdutoModal>
                            <DescricaoModal>
                                A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e
                                sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco,
                                queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de
                                sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso
                                e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa,
                                que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.

                                Serve: de 2 a 3 pessoas
                            </DescricaoModal>
                            {/**#####RESOLVER AQUI */}
                            <BotaoModal onClick={callCarrinho}>Adicionar ao carrinho - R$ 60,90</BotaoModal>
                        </ContStyledModalText>
                    </ContStyledModal>
                </ContainerBlack >
            )}
        </>
    )
}

export default Modal;