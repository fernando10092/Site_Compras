import { PacmanLoader } from "react-spinners";
import { Container, ContPac } from "./loading";
const Pacman = () => {
    return (
        <Container>
            <ContPac>
                <PacmanLoader color="#E66767" />
            </ContPac>
        </Container>
    )
}

export default Pacman;