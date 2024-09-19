import styled from 'styled-components'

//Container header
export const Header = styled.div`
background-color: #FFEBD9;
max-width: 100vw;
height: 384px;
top: -24px;
text-align: center;
`
//Imagem
type imagem = {
    url: string;
}
export const Imagem = styled.div<imagem>`
background-image: url('${(e)=>e.url}');
background-color: #FFEBD9;
max-width: 100vw;
height: 384px;
align-content: center;
justify-content: space-around;
`
//Div header
export const Divheader = styled.div`
height: 50%;
align-content: center;
`

//Logo
export const Logo = styled.img`

width: 125px;
height: 57.5px;
background-repeat: no-repeat;
cursor: pointer;
`
//Texto header
export const Textheader = styled.h1`
color: #E66767;
font-weight: 900;
font-size: 36px;
`
