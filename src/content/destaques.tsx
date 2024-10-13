import { ContainerLista, Lista, ConteBtn, Botao, Paragrafo, Titulo, Conteudo, Imagem, Contetitle, Avaliacao, Textimage, Textimage2, Containerfoto, Estrela } from ".";
import estrela from '../public/assets/estrela.png';
import { ListaProduct } from "../products/lista";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { restaurante, restauranteErase, numeracaorestaurante } from "../store/reducers/carrinhoReducer";
import { useEffect, useState } from "react";
import Load from "./load";

//DESTAQUES PAGINA INICIAL
const Destaques = () => {

    //USEDISPATCH
    const dispatch = useDispatch();

    const navPerfil = useNavigate();
    const funcPerfil = () => {
        //dispatch(restaurante({tipo:"Italiana",restaurante:"La Dolce Vita Trattoria"}))
        //navPerfil('/perfil');
    }

    //API  
    const [meuestado, setMeuestado] = useState([]);
    const [load, setLoading] = useState(true);
    const carregando = () => {
        setLoading(false);
    }
    try {
        useEffect(() => {
            setInterval(carregando, 3000);
            fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then((res) => res.json()).then((res) => setMeuestado(res))
        }, []);
    } catch (e) {
        alert('Erro: ' + e);
    };

    return (
        <>
            {load && <Load />}
            <ContainerLista>
            {
                //meuestado.forEach((e) => { e['titulo']})
                
                meuestado.map((e, index) => (
                        <Lista key={index}>
                            <Containerfoto>
                                <Imagem src={e['capa']} />
                                <Textimage>
                                    {e['destacado'] == true ? 'destaque' : ''}
                                </Textimage>
                                <Textimage2>
                                    {e['tipo']}
                                </Textimage2>
                            </Containerfoto>
                            <Conteudo>
                                <Contetitle>
                                    <Titulo>
                                        {e['titulo']}
                                    </Titulo>
                                    <Avaliacao>
                                        <Titulo>
                                            {e['avaliacao']}
                                        </Titulo>
                                        <Estrela src={estrela} />
                                    </Avaliacao>
                                </Contetitle>
                                <Paragrafo>
                                    {e['descricao']}
                                </Paragrafo>
                                <ConteBtn>
                                    <Botao onClick={

                                        () => {

                                            if (e['id'] == "1") {
                                                dispatch(restauranteErase(true));
                                                navPerfil('/cardapio1');
                                                dispatch(numeracaorestaurante(0));
                                            } else if (e['id'] == "2") {
                                                dispatch(restauranteErase(true));
                                                navPerfil('/cardapio2');
                                                dispatch(numeracaorestaurante(1));
                                            } else if (e['id'] == "3") {
                                                dispatch(restauranteErase(true));
                                                navPerfil('/cardapio3');
                                                dispatch(numeracaorestaurante(2));
                                            } else if (e['id'] == "4") {
                                                dispatch(restauranteErase(true));
                                                navPerfil('/cardapio4');
                                                dispatch(numeracaorestaurante(3));
                                            } else if (e['id'] == "5") {
                                                dispatch(restauranteErase(true));
                                                navPerfil('/cardapio5');
                                                dispatch(numeracaorestaurante(4));
                                            } else if (e['id'] == "6") {
                                                dispatch(restauranteErase(true));
                                                navPerfil('/cardapio6');
                                                dispatch(numeracaorestaurante(5));
                                            }
                                        }
                                    }>
                                        Saiba mais
                                    </Botao>

                                </ConteBtn>

                            </Conteudo>
                        </Lista>

                    


                ))
                

            }
            </ContainerLista>
        </>
    )
}

export default Destaques;