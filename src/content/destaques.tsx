import { Lista, Botao, Paragrafo, Titulo, Conteudo, Imagem, Contetitle, Avaliacao, Textimage2, Containerfoto, Estrela } from ".";
import estrela from '/src/public/assets/estrela.png';
import { ListaProduct } from "../products/lista";

const Destaques = () => {
    return (
        <>
            <ul>
                {ListaProduct.map((p) =>
                    <Lista>
                        <Containerfoto>
                            <Imagem src={p.imagem} />
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
                            <Botao>
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