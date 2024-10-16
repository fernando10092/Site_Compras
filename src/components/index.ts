import styled from "styled-components";

//Container Black
export const ContainerBlack = styled.div`
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
width: 100%;
height: 100%;
`

//Container
export const ContStyledModal = styled.div`
background-color: #E66767;
width: 1024px;
height: 344px;
margin: 0 auto;
margin-top: 100px;
position: absolute;
top: 5%;
opacity: 1;
display: grid;
grid-template-columns: auto auto;
text-align: center;

@media (min-width: 958px) and (max-width: 1025px){
width: 100%;
margin-top: 25px;
}

@media (min-width: 800px) and (max-width: 957px){
width: 100%;
margin-top: 25px;
}

@media (min-width: 655px) and (max-width: 799px){
display: flex;
height: 500px;
width: 90%;
margin-top: 0px;
}

@media (max-width: 654px){
margin: 10px;
height: 600px;
width: 95%;
grid-template-columns: auto;
overflow-y: auto;
}

`
//Container IMG
export const ContImg = styled.div`
max-width: 280px;
max-height: 280px;
margin: 22.5px;
grid-template-columns: auto;
text-align: center;

@media (min-width: 800px) and (max-width: 957px){
width: 280px;
height: 280px;
}

@media (min-width: 655px) and (max-width: 799px){
width: 280px;
height: 280px;
}

@media (max-width: 654px){
width: 200px;
height: 200px;
margin: 0px;
margin-top: 10px;
margin-left: 10px;
}

`

//Imagem
export const ImgPizzaModal = styled.img`
width: 100%;
height: 100%;

@media (min-width: 655px) and (max-width: 799px){
width: 280px;
height: 280px;
}

@media (max-width: 654px){
width: 200px;
height: 200px;
}

`
//Container escrita
export const ContStyledModalText = styled.div`
display: inline-block;
width: 656px;
height: 280px;
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
@media (max-width: 799px){
font-size: 14px;
width: 100%;
margin: 10px;
}
`
//Paragrafo
export const DescricaoModal = styled.p`
font-size: 14px;
color: #FFFFFF;
margin-right: 25px;

@media (min-width: 800px) and (max-width: 957px){
margin-right: 0px;
width: 70%;
}

@media (max-width: 799px){
font-size: 12px;
padding: 10px;
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
@media (max-width: 799px){
margin: 10px;
}
`

//Botao Close
export const BotaoClose = styled.button`
width: 25px;
height: 25px;
color: #FFFFFF;
font-weight: bold;
background-color: rgb(0,0,0,0.0);
cursor: pointer;
border: none;

@media (max-width: 791px){
width: 30px;
height: 30px;
}
`

//Div Add
export const DivOpen = styled.div`
`