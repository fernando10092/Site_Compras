import { Header, Imagem, Textheader, Logo, Divheader } from ".";
import logo from '../public/assets/logo.png';

//HEADER
const Headinit = () => {
    return (
        <>
            <Header>
                <Imagem>
                    <Divheader>
                        <Logo onClick={()=>window.location.reload()} />
                    </Divheader>
                    <Divheader>
                        <Textheader>
                            Viva experiências gastronômicas <br/>no conforto da sua casa
                        </Textheader>
                    </Divheader>
                </Imagem>
            </Header>
        </>
    )
}

export default Headinit;