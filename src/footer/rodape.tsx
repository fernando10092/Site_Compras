import { Rodape, ImgStyled, SocialStyled, PStyledFooter } from "."
import logo from '/src/public/assets/logo.png';
import social from '/src/public/assets/social.png'

const Rodapecomponents = () => {
    return (
        <>
            <Rodape>
                <ImgStyled src={logo} /> <br/>
                <SocialStyled src={social}/>
                <PStyledFooter>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
                    qualidade <br/> dos produtos é toda do estabelecimento contratado.
                </PStyledFooter>

            </Rodape>
        </>
    )
}

export default Rodapecomponents;