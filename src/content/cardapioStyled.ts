import styled from 'styled-components';
//Center
export const Center = styled.div`
min-height: 125vh;
padding: 0px;
justify-content: center;
text-align: center;
margin-bottom: 15px;
max-width: 100vw;
`

//Container
export const ContainerPerfil = styled.div`
text-align: center;
margin: 0 auto;
padding: 0px;
width: 80%;
display: grid;
grid-template-columns: auto auto auto;
column-gap: 0px;
position: relative;
justify-content: center;

@media (max-width: 790px){
grid-template-columns: auto;
left: 0px;
}

@media (min-width: 791px) and (max-width: 1020px){
grid-template-columns: auto auto;
}
`
//UL
export const Ul = styled.ul`
text-align: center;
margin: 15px;
padding: 0px;
width: 320px;
height: 338px;
`

//Card LI
export const CardPerfil = styled.li`
background-color: #E66767;
width: 320px;
height: 338px;
text-align: center;
padding: 5px;
margin: 5px;
list-style: none;

`

//Imagem
export const ImagemCard = styled.img`
width: 304px;
height: 167px;
object-fit: fill;
`

//Nome Produto
export const NomeProdutoPerfil = styled.h1`
color: #FFEBD9;
font-size: 16px;
text-align: left;
padding-left: 5px;
`

//Descrição
export const DescricaoPerfil = styled.p`
color: #FFEBD9;
font-size: 14px;
text-align: left;
padding-left: 5px;
`

//Botão
export const BotaoPerfil = styled.button`
background-color: #FFEBD9;
color: #E66767;
width: 304px;
height: 24px;
border: none;
cursor: pointer;
`