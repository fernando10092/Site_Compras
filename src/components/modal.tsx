// Modal.tsx
import { useEffect, useRef } from "react";
import { ContStyledModal, ContImg, ImgPizzaModal, ContStyledModalText, ProdutoModal, DescricaoModal, ContBtn, BotaoModal, BotaoClose } from ".";
import pizza from '../public/assets/marguerita2.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { adicionarItem, callModal2, toggleCarrinho, valorItem, listaChartReducer, carrinhoVisible, delCarrinho } from "../store/reducers/carrinhoReducer";

// MODAL COMPONENT
const Modal = () => {

    const nomeProduto = "Pizza Marguerita";
    const valorPizza = 60.90;
    const imgPizza = "../public/assets/marguerita2.png";

    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDivElement>(null);
    const modalVisible = useSelector((state: RootState) => state.carrinho.modalVisible);

    const adicionadoCarrinho = useSelector((state: RootState)=>state.carrinho.addCarrinho);

    // Função para fechar o modal
    const closeModal = () => {
        dispatch(callModal2(false));
        dispatch(delCarrinho(true));
       
    };

    // Fechar o modal ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Adiciona item ao carrinho, fecha o modal e exibe o carrinho
    const callCarrinho = () => {
        dispatch(adicionarItem(1));
        dispatch(valorItem(valorPizza));

        adicionadoCarrinho.map((p, index)=>{
            dispatch(listaChartReducer({ nome: p.produto, valor: p.valor, img: p.img }))
        })

        //dispatch(listaChartReducer({ nome: nomeProduto, valor: valorPizza, img: imgPizza })) //nome, valor e imagem
        closeModal();
        //dispatch(toggleCarrinho(true)); // Abre o carrinho
        dispatch(carrinhoVisible(true));
    };

    return (
        <>
            {modalVisible && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
                    <ContStyledModal ref={modalRef}>
                        <ContImg>
                            {adicionadoCarrinho.map((e)=>(<ImgPizzaModal src={e.img}/>))}
                           
                        </ContImg>
                        <ContStyledModalText>
                            <ContBtn>
                                <BotaoClose onClick={closeModal}>X</BotaoClose>
                            </ContBtn>
                            <ProdutoModal>{adicionadoCarrinho.map((e)=>e.produto)}</ProdutoModal>
                            <DescricaoModal>
                                {adicionadoCarrinho.map((e)=>e.descricao)}
                                <br/>
                                <br/>
                                Serve: {adicionadoCarrinho.map((e)=>e.descricao)}
                            </DescricaoModal>
                            <BotaoModal onClick={callCarrinho}>Adicionar ao carrinho - R$ {adicionadoCarrinho.map((e)=>e.valor.toFixed(2))}</BotaoModal>
                        </ContStyledModalText>
                    </ContStyledModal>
                </div>
            )}
        </>
    );
};

export default Modal;
