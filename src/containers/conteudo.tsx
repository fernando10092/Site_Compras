import Headinit from "../headers/head"
import Destaques from "../content/destaques";
import { Body } from ".";
import Rodapecomponents from "../footer/rodape";

const Layout = () => {
    return (
        <>

            <Body>

                <Headinit />

                <Destaques />

                <Rodapecomponents/>
                

            </Body>



        </>


    )
}

export default Layout;