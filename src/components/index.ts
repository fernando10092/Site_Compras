import styled from "styled-components";

export type Props = {
    Display?: string;
}

export type Op = {
    Opacidade?: string;
}

//Container Black
export const ContainerBlack = styled.div<Op>`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
`

//Container
export const ContStyledModal = styled.div<Props>`
background-color: #E66767;
width: 1024px;
height: 344px;
margin: 0 auto;
margin-top: 100px;
padding: 25px;
position: absolute;
left: 100px;
opacity: 1;
display: ${(props) => props.Display};
`
//Imagem
export const ImgPizzaModal = styled.img<Props>`
width: 280px;
height: 280px;
display: ${(props) => props.Display};
`
//Container escrita
export const ContStyledModalText = styled.div`
display: inline-block;
width: 656px;
height: 280px;
padding: 25px;
text-align: justify;
`

//Titulo
export const ProdutoModal = styled.h1`
font-size: 18px;
color: #FFFFFF;
`
//Paragrafo
export const DescricaoModal = styled.p`
font-size: 14px;
color: #FFFFFF;
`
//Botao
export const BotaoModal = styled.button`
width: 218px;
height: 24px;
color: #E66767;
background-color: #FFFFFF;
cursor: pointer;
border: none;
`

//Botao Close
export const BotaoClose = styled.button`
width: 20px;
height: 20px;
color: #E66767;
background-color: #FFFFFF;
cursor: pointer;
border: none;
`

//Div Add
export const DivOpen = styled.div`

`