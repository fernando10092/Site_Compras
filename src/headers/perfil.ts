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
justify-content: space-between;
padding: 10px;

@media (min-width: 2560px){
max-width: 40%;
margin: 0 auto;
}

@media (min-width: 2021px) and (max-width: 2559px){
max-width: 45%;
margin: 0 auto;
}

@media (min-width: 1440px) and (max-width: 2020px){
max-width: 70%;
margin: 0 auto;
}

@media (min-width: 1024px) and (max-width: 1439px){
max-width: 90%;
margin: 0 auto;

}

@media (max-width: 790px){
display: block;
max-width: 95%;
margin: 0 auto;
}
`
export const ContLogo = styled.div`
justify-content: center;
display: flex;
`

//Logo
export const LogoPerfil = styled.img`
width: 125px;
height: 57.5px;
background-repeat: no-repeat;
cursor: pointer;
display: inline-block;

@media (max-width: 790px){
display: block;

}
`

//Texto Head
export const TextStyledPerfil = styled.h4`
color: #E66767;
font-size: 18px;
cursor: pointer;
display: inline-block;
@media (max-width: 790px){
display: block;
}
`
//NOVO
export const DivHero = styled.div`
position: relative;
max-width: 100%;
`
//NOVO
export const ImgHero = styled.div`
max-width: 100%;
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
position: absolute;
max-width: 100vw;
padding: 10px;

@media (min-width: 2560px){
padding-left: 30%;
padding-right: 30%;
}

@media (min-width: 2021px) and (max-width: 2559px){
padding-left: 28%;
padding-right: 28%;
}

@media (min-width: 1440px) and (max-width: 2020px){
padding-left: 15%;
padding-right: 15%;
}

@media (min-width: 1024px) and (max-width: 1439px){
padding-left: 50px;
padding-right: 50px;
}

@media (max-width: 790px){
padding-left: 5%;
padding-right: 5%px;
}
`
//
//TEXT RESTAURANTE
export const TextStyledRestaurante = styled.h1`
color: #FFFFFF;
font-size: 32px;
margin-bottom: 70px;

`
//TEXT RESTAURANTE
export const TextStyledRestaurante2 = styled.h1`
color: #FFFFFF;
font-size: 32px;
font-weight: 900px;


`
