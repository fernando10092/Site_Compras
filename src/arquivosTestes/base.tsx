import { useState } from 'react';
import ArqTeste from './arqTest';
import { ContainerBaseTeste, GeneralCont, Black, ContainerTeste } from './arqTeste';
import ArqTest from './arqTest';
const Homer = () => {
    const [modif, setModif] = useState(false);
    const Alt = () => {
        setModif(!modif);
    }
    return (
        <>
            <GeneralCont>

                {modif && <Black onClick={Alt}/>}
                {modif && <ArqTest/>}

                <ContainerBaseTeste>
                    <h1>Teste</h1>
                    <p>Testando o componente</p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi minima voluptas in possimus enim ipsam corrupti adipisci quam tempora repellat quasi perspiciatis eligendi id sunt et consequuntur, atque consequatur.
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi minima voluptas in possimus enim ipsam corrupti adipisci quam tempora repellat quasi perspiciatis eligendi id sunt et consequuntur, atque consequatur.
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi minima voluptas in possimus enim ipsam corrupti adipisci quam tempora repellat quasi perspiciatis eligendi id sunt et consequuntur, atque consequatur.
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi minima voluptas in possimus enim ipsam corrupti adipisci quam tempora repellat quasi perspiciatis eligendi id sunt et consequuntur, atque consequatur.
                    </p>

                    <button onClick={Alt}>ALTERNAR</button>

                </ContainerBaseTeste>




            </GeneralCont>


        </>
    )
}

export default Homer;