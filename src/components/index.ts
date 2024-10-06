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
top: 5%;
opacity: 1;
display: grid;
grid-template-columns: auto auto;
text-align: center;

@media (max-width: 791px){
margin-top: 0px;
left: 0px;
height: 80vh;
width: 90%;
position: relative;
grid-template-columns: 1fr;
padding: 10px;
}

`
//Container IMG
export const ContImg = styled.div`
width: 280px;
height: 344px;
align-content: center;
grid-template-columns: auto;
text-align: center;

@media (max-width: 791px){
width: 100%;
height: 5%;

}
`

//Imagem
export const ImgPizzaModal = styled.img<Props>`
width: 100%;
height: 200px;
@media (max-width: 791px){
width: 100%;

}

`
//Container escrita
export const ContStyledModalText = styled.div`
display: inline-block;
width: 656px;
height: 280px;
padding: 25px;
text-align: justify;
@media (max-width: 791px){
margin-top: 0px;
display: block;
width: 100%;
padding: 0px;
}
`

//Titulo
export const ProdutoModal = styled.h1`
font-size: 18px;
color: #FFFFFF;
@media (max-width: 791px){
font-size: 14px;
width: 100%;
}
`
//Paragrafo
export const DescricaoModal = styled.p`
font-size: 14px;
color: #FFFFFF;
@media (max-width: 791px){
font-size: 12px;
margin: 5px;
width: 100%;
}
`
//Container BTN
export const ContBtn = styled.div`
width: 100%;
text-align: end;
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
width: 25px;
height: 25px;
color: #FFFFFF;
font-weight: bold;
background-color: rgb(0,0,0,0.1);
cursor: pointer;
border: none;

@media (max-width: 791px){
margin-top: 20px;
}
`

//Div Add
export const DivOpen = styled.div`

`