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

// Defina a interface para o tipo dos objetos no estado
interface Produto {
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: string;
}

//PERFIL
const Cardapio3 = () => {
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

  //INDEX / IMAGEM / PRODUTO / DESCRICAO / SERVE / VALOR
  const [id, setId] = useState<number>();
  const [imagem, setImagem] = useState<string>();
  const [produtos, setProdutos] = useState<string>();
  const [descricao, setDescricao] = useState<string>();
  const [serve, setServe] = useState<string>();
  const [valores, setValores] = useState<string>();

  const adicionado = useSelector((state: RootState) => state.carrinho.addCarrinho);

  const showModal = () => {
    dispatch(callModal2(true));
  };

  const handleToggleCarrinho = () => {
    dispatch(toggleCarrinhoAction(!carrinhoVisivel));
  };

  // Fechar o carrinho ao clicar fora dele
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

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMeuestado(res[2]['cardapio']));
  }, []);

  return (
    <>
      <HeadPerfil onCarrinhoClick={handleToggleCarrinho} />
      {modalVisible && <Modal />}
      {carrinhoV && <Carrinho />}
      {entregaVisible && <Entrega />}
      {cartaoVisible && <Cartao />}
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

export default Cardapio3;
