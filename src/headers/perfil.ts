import styled from 'styled-components'

//Container header
export const HeaderStyledPerfil = styled.div`
background-color: #FFEBD9;
max-width: 100vw;
height: 186px;
top: -24px;
text-align: center;
`
type imagem = {
    img: string;
}
//Imagem
export const ImagemStyledPerfil = styled.div<imagem>`
background-image: url('${(e)=>e.img}');
background-color: #FFEBD9;
max-width: 100vw;
height: 186px;
align-content: center;
justify-content: space-around;
`
//Container texthead
export const ContainerStyledPerfil = styled.div`
display: flex;
justify-content: space-around;
`

//Logo
export const LogoPerfil = styled.img`
width: 125px;
height: 57.5px;
background-repeat: no-repeat;
cursor: pointer;
`

//Texto Head
export const TextStyledPerfil = styled.h4`
color: #E66767;
font-size: 18px;
cursor: pointer;
`
//NOVO
export const DivHero = styled.div`
position: relative;
`
//NOVO
export const ImgHero = styled.div`


`
//NOVO
export const TextHero = styled.h1`
position: absolute;
`

//Imagem
export const ImagemStyledPerfilFood = styled.img`
background-image: url('../src/public/assets/fooditaliana.png');
height: 280px;
width: 100%;
margin-bottom: 25px;
object-fit: cover;
`
//DIV RESTAURANTE
export const DivRestaurante = styled.div`
height: 280px;
padding: 20px;
position: absolute;
max-width: 100vw;
@media (max-width: 790px){
margin-left: 0px;
}
`
//
//TEXT RESTAURANTE
export const TextStyledRestaurante = styled.h1`
color: #FFFFFF;
font-size: 32px;
margin-bottom: 70px;
margin-left: 130px;

`
//TEXT RESTAURANTE
export const TextStyledRestaurante2 = styled.h1`
color: #FFFFFF;
font-size: 32px;
font-weight: 900px;
margin-left: 130px;

`
