import { Header, Imagem, Textheader, Logo, Divheader } from "."

//HEADER
const Headinit = () => {
    return (
        <>
            <Header>
                <Imagem>
                    <Divheader>
                        <Logo />
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