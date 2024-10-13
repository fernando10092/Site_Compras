import styled from "styled-components";

type Opacidade = {
    opacidade: string;
}

export const BlackCarrinho = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
min-height: 300vh;
z-index: 1;
background-color: rgb(0,0,0,0.7);
`

export const ContainerCarrinho = styled.div`
background-color: #E66767;
padding: 10px;
top: 0px;
right: 0px;
width: 27%;
height: 100%;
position: fixed;
z-index: 2;
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
width: 95%;
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
width: 90px;
height: 90px;
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
width: 95%;
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
width: 95%;
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
width: 80%;
`

type Mg = {
    margin?: string;
}
export const LabelText = styled.label<Mg>`
font-size: 14px;
color: #FFEBD9;
display: block;
margin-left: ${(e)=> e.margin}px;
@media (max-width: 790px){
margin-left: 10px;
}
`
type DivControl = {
    marginlf?: string;
    width: string;
}
export const DivSmall = styled.div<DivControl>`
width: ${(e)=>e.width};
height: 64px;
margin-top: 10px;
margin-left: ${(e)=>e.marginlf};
display: inline-block;
text-align: justify;
justify-content: space-between;
padding: 0px;
`

type Mod = {
    width: string;
    display: string;
    margin?: string;
}
export const InputDelivery = styled.input<Mod>`
width: ${(e)=>e.width};
height: 32px;
border: none;
margin: 0px;
margin-left: ${(e)=>e.margin}px;
padding: 0px;
display: ${(e)=>e.display};
@media (max-width: 790px){
margin-left: 10px;
}
`

export const Paragrafo = styled.p`
color: #FFEBD9;
font-size: 14px;
`
