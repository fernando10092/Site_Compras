import styled from "styled-components";

export const ContainerCarrinhoBlack = styled.div`
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

export const ContainerCarrinho = styled.div`
background-color: #E66767;
padding: 5px;
top: 0px;
right: 0px;
width: 360px;
height: 1524px;
position: absolute;
z-index: 8;
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
`