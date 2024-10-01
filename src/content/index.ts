import styled from 'styled-components';

//CONTAINER LISTA
export const ContainerLista = styled.div`
display: grid;
grid-template-columns: auto auto;
text-align: center;
width: 100%;
margin: 0 auto;
padding-top: 25px;
padding-bottom: 25px;
justify-content: center;

@media (max-width: 780px){
grid-template-columns: auto;
}

`

//LISTA
export const Lista = styled.li`
width: 472px;
height: 415px;
list-style: none;
border: solid #E66767;
border-width: 1px;
display: grid;
margin: 30px;


@media (max-width: 780px){
margin:10px;
width: 90%;
margin: 10px;
}
`

//CONTAINER FOTO
export const Containerfoto = styled.div`
position: relative;

background-color: #FFFFFF;
`

//IMAGEM
export const Imagem = styled.img`
object-fit: cover;
width: 472px;
height: 217px;
background-color: #FFFFFF;
@media (max-width: 780px){
margin:0px;
width: 100%;
}

`
//TEXTIMAGE2
export const Textimage = styled.h3`
margin: 10px;
background-color: #E66767;
color: #FFEBD9;
font-size: 12px;
height: 26px;
position: absolute;
align-content: center;
top: 8px;
left: 320px;

`

//TEXTIMAGE2
export const Textimage2 = styled.h3`
margin: 10px;
background-color: #E66767;
color: #FFEBD9;
font-size: 12px;
height: 26px;
position: absolute;
align-content: center;
top: 8px;
right: 16px;
`

//CONTEUDO ESCRITO
export const Conteudo = styled.div`
display: block;
padding: 10px;
background-color: #FFFFFF;
`
export const ConteBtn = styled.div`
text-align: start;
`
//BOTÃO
export const Botao = styled.button`
background-color: #E66767;
color: #FFEBD9;
border: none;
width: 82px;
height: 24px;
font-wight: 700;
font-size: 14px;
cursor: pointer;
@media (max-width: 780px){
margin-top: 5px;
width: 110px;
}
`

//PARAGRAFO
export const Paragrafo = styled.p`
color: #E66767;
font-size: 14px;
text-align: justify;
@media (max-width: 780px){
margin:0px;
width: 85%;
font-size: 12px;
}
`
//CONTAINER TITULO
export const Contetitle = styled.div`
justify-content: space-between;
width: 100%;
height: 24px;
display: flex;
align-itens: center;
padding: 0px;

@media (max-width: 780px){
margin-bottom: 15px;
width: 90%;
}
`
//TITULO
export const Titulo = styled.h2`
color: #E66767;
font-size: 18px;
margin: 0px;
`
//AVALIAÇÃO
export const Avaliacao = styled.div`
display: flex;
`

//ESTRELA
export const Estrela = styled.img`
width: 21px;
height: 21px;
margin-left: 8px;
`