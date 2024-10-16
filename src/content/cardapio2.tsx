// IMPORTAÇÕES
import React, { useEffect, useRef, useState } from "react";
import HeadPerfil from "../headers/headPerfil";
import { ContainerPerfil, Center, Ul, CardPerfil, ImagemCard, NomeProdutoPerfil, DescricaoPerfil, BotaoPerfil } from "./cardapioStyled";
import Modal from "../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { callModal2, toggleCarrinho as toggleCarrinhoAction, addCarrinho } from "../store/reducers/carrinhoReducer";
import { RootState } from "../store";
import Carrinho from "../components/carrinho";
import Rodapecomponents from "../footer/rodape";
import Entrega from "../components/entrega";
import Cartao from "../components/cartao";
import Finalizacao from "../components/finalizacao";
import { BlackCarrinho } from "../components/carrinhoStyled";
import { carrinhoVisible, entregaVisible as ev, cartaoVisible as cv } from "../store/reducers/carrinhoReducer";

// DEFININDO A INTERFACE
interface Produto {
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: string;
}

//COMPONENTE CARDAPIO
const Cardapio2 = () => {
  //USEDISPATCH
  const dispatch = useDispatch();

  //USESELECTOR
  const modalVisible = useSelector((state: RootState) => state.carrinho.modalVisible);
  const carrinhoVisivel = useSelector((state: RootState) => state.carrinho.carrinhoVisivel);
  const carrinhoV = useSelector((state: RootState) => state.carrinho.carrinhoVisible);
  const entregaVisible = useSelector((state: RootState) => state.carrinho.entrega);
  const cartaoVisible = useSelector((state: RootState) => state.carrinho.cartao);
  const finalizacaoVisible = useSelector((state: RootState) => state.carrinho.concluir);

  //USEREF
  const carrinhoRef = useRef<HTMLDivElement>(null);

  //FUNÇÃO CHAMAR MODAL
  const showModal = () => {
    dispatch(callModal2(true));
  };

  //FUNÇÃO ALTERNAR ABRIR E FECHAR CARRINHO
  const handleToggleCarrinho = () => {
    dispatch(toggleCarrinhoAction(!carrinhoVisivel));
  };

  //FECHAR CARRINHO AO CLICAR FORA DA AREA
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (carrinhoRef.current && !carrinhoRef.current.contains(event.target as Node)) {
        dispatch(toggleCarrinhoAction(false));
      }
    };

    // Adiciona o event listener para detectar cliques fora do carrinho
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, carrinhoVisivel]);

  //ESTADO
  const [meuestado, setMeuestado] = useState<Produto[]>([]);

  //CHAMADA PARA API
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMeuestado(res[1]['cardapio']));
  }, []);

  //FUNÇÃO FECHAR
  const handleClose = () => {
    dispatch(carrinhoVisible(false));
    dispatch(ev(false));
    dispatch(cv(false));
  }

  return (
    <>
      <HeadPerfil onCarrinhoClick={handleToggleCarrinho} />
      {modalVisible && <Modal />}

      {carrinhoV && <BlackCarrinho onClick={handleClose} />}
      {carrinhoV && <Carrinho />}

      {entregaVisible && <BlackCarrinho onClick={handleClose} />}
      {entregaVisible && <Entrega />}

      {cartaoVisible && <BlackCarrinho onClick={handleClose} />}
      {cartaoVisible && <Cartao />}

      {finalizacaoVisible && <BlackCarrinho />}
      {finalizacaoVisible && <Finalizacao />}

      {carrinhoVisivel && (
        <div ref={carrinhoRef} style={{ position: 'relative', zIndex: 1000 }}>
          <Carrinho />
        </div>
      )}
      <Center>
        <ContainerPerfil>
          {meuestado.map((e, index) => (
            <Ul key={index}>
              <CardPerfil>
                <ImagemCard src={e['foto']} />
                <NomeProdutoPerfil>{e['nome']}</NomeProdutoPerfil>
                <DescricaoPerfil>
                  {e['descricao'].length > 180 ? `${e['descricao'].slice(0, 180)}...` : e['descricao']}
                </DescricaoPerfil>
                <BotaoPerfil
                  onClick={() => {
                    dispatch(addCarrinho({
                      index,
                      img: e['foto'],
                      produto: e['nome'],
                      descricao: e['descricao'],
                      serve: e['porcao'],
                      valor: e['preco']
                    }));
                    showModal();
                  }}
                >
                  Adicionar ao carrinho
                </BotaoPerfil>
              </CardPerfil>
            </Ul>
          ))}
        </ContainerPerfil>
      </Center>

      <Rodapecomponents />
    </>
  );
};

export default Cardapio2;
