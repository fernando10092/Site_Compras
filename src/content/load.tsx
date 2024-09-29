import { useState } from "react";
import { LoadContainer, TextLoad } from "./loadStyled";
const Load = () => {
    return (
        <>
            <LoadContainer>

                <TextLoad>
                    {"Carregando..."}
                </TextLoad>

            </LoadContainer>

        </>

    )
}

export default Load;