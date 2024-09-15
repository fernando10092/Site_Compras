import { Lista, Botao, Paragrafo, Titulo, Conteudo, Imagem, Contetitle, Avaliacao, Textimage, Textimage2, Containerfoto, Estrela } from ".";
import estrela from '../public/assets/estrela.png';
import { ListaProduct } from "../products/lista";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { restaurante, restauranteErase } from "../store/reducers/carrinhoReducer";

//DESTAQUES PAGINA INICIAL
const Destaques = () => {

    //USEDISPATCH
    const dispatch = useDispatch();

    const navPerfil = useNavigate();
    const funcPerfil = () => {
        //dispatch(restaurante({tipo:"Italiana",restaurante:"La Dolce Vita Trattoria"}))
        //navPerfil('/perfil');
    }
    return (
        <>
            <ul>
                {ListaProduct.map((p) =>
                    <Lista>
                        <Containerfoto>
                            <Imagem src={p.imagem} />
                            <Textimage>
                                {p.destaque}
                            </Textimage>
                            <Textimage2>
                                {p.comida}
                            </Textimage2>
                        </Containerfoto>
                        <Conteudo>
                            <Contetitle>
                                <Titulo>
                                    {p.nome}
                                </Titulo>
                                <Avaliacao>
                                    <Titulo>
                                        {p.nota}
                                    </Titulo>
                                    <Estrela src={estrela} />
                                </Avaliacao>
                            </Contetitle>
                            <Paragrafo>
                                {p.descricao}
                            </Paragrafo>
                            <Botao onClick={

                                () => {

                                    if (p.nome == "Hioki Sushi") {
                                        dispatch(restauranteErase(true));
                                        navPerfil('/perfil2');
                                        dispatch(restaurante({ tipo: p.comida, restaurante: p.nome }));
                                    } else if (p.nome == "La Dolce Vita Trattoria") {
                                        dispatch(restauranteErase(true));
                                        navPerfil('/perfil');
                                        dispatch(restaurante({ tipo: p.comida, restaurante: p.nome }));
                                    } else if (p.nome == "Chatue de la France") {
                                        dispatch(restauranteErase(true));
                                        navPerfil('/perfil3');
                                        dispatch(restaurante({ tipo: p.comida, restaurante: p.nome }));
                                    } else if (p.nome == "Are Baba Restaurante") {
                                        dispatch(restauranteErase(true));
                                        navPerfil('/perfil4');
                                        dispatch(restaurante({ tipo: p.comida, restaurante: p.nome }));
                                    } else if (p.nome == "Restaurante Portugal do Brasil") {
                                        dispatch(restauranteErase(true));
                                        navPerfil('/perfil5');
                                        dispatch(restaurante({ tipo: p.comida, restaurante: p.nome }));
                                    }
                                }
                            }>
                                Saiba mais
                            </Botao>
                        </Conteudo>
                    </Lista>
                )}
            </ul>
        </>
    )
}

export default Destaques;