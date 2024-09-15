import styled from 'styled-components';

//LISTA
export const Lista = styled.li`
width: 472px;
height: 398px;
list-style: none;
border: solid #E66767;
border-width: 1px;
display: inline-grid;
margin: 50px;

@media (max-width: 780px){
margin:10px;
width: 90%;
}
`

//CONTAINER FOTO
export const Containerfoto = styled.div`
position: relative;
`

//IMAGEM
export const Imagem = styled.img`
object-fit: cover;
width: 472px;
height: 217px;
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
left: 150px;

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
width: 72px;
height: 20px;
}
`

//PARAGRAFO
export const Paragrafo = styled.p`
color: #E66767;
font-size: 14px;
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

`