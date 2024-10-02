import styled from "styled-components";

type Opacidade = {
    opacidade: string;
}

export const ContainerCarrinhoBlack = styled.div<Opacidade>`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, ${(e)=>e.opacidade});
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;

`
export const ContClickExit = styled.div`
background-color:  rgba(0, 0, 0, 0.7);
position: absolute;
z-index: 1002;
width: 72.5%;
min-height: 100%;
left: 0px;

@media (max-width: 790px){
width: 19%;
}
`

export const ContainerCarrinho = styled.div`
background-color: #E66767;
padding: 5px;
top: 0px;
right: 0px;
width: 27%;
height: 100%;
position: absolute;
z-index: 1001;
overflow-y: auto;
@media (max-width: 790px){
width: 80%;
}
`
export const Ul = styled.ul`
padding: 0px;

`

export const ListaChart = styled.li`
list-style: none;

`

export const ContainerItens = styled.div`
background-color: #FFEBD9;
width: 344px;
height: 100px;
display: flex;
padding: 5px;
margin-top: 30px;
margin-left: 3px;
margin-right: 3px;
@media (max-width: 790px){
width: 95%;
}
`

export const ImgCarrinho = styled.img`
width: 80px;
height: 80px;
`

export const ContainerText = styled.div`
margin-left: 10px;
width: 100%;
`

export const Item = styled.h1`
color: #E66767;
font-size: 18px;
`

export const Valor = styled.h2`
color: #E66767;
font-size: 14px;
`

export const ContainerIcon = styled.div`
width: 100%;
text-align: end;
`

export const Icon = styled.img`
width: 16px;
height: 16px;
cursor: pointer;
`

export const ContainerDetalhes = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const Detalhes = styled.h2`
color: #FFEBD9;
display: inline;
font-size: 16px;
`

export const BotaoContinuar = styled.button`
background-color: #FFEBD9;
color: #E66767;
width: 344px;
height: 24px;
border: none;
margin-top: 30px;
margin-left: 3px;
margin-right: 3px;
cursor: pointer;
@media (max-width: 790px){
width: 95%;
}
`

export const TitleDelivery = styled.h2`
font-size: 16px;
color: #FFEBD9;
`

export const LabelText = styled.label`
font-size: 14px;
color: #FFEBD9;
display: inline-block;
`
export const DivSmall = styled.div`
width: 175px;
height: 64px;
margin-top: 10px;
display: inline-block;
`

type Mod = {
    width: number;
    display: string;
}
export const InputDelivery = styled.input<Mod>`
width: ${(e)=>e.width}px;
height: 32px;
border: none;
display: ${(e)=>e.display};
`

export const Paragrafo = styled.p`
color: #FFEBD9;
font-size: 14px;

`
