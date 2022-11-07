import React, { useState, useParams } from "react";
import { BotaoRemoverCarrinho } from "../Button/ButtonRemoverCarinho";
import { CardCarrinhoContainer, CardCarrinho, TopCardCarrinho, TopCardCarrinhoImage, BottomCardCarrinho } from "./StyleCardCarrinho";



export const CarrinhoCards = (props) => {
    
    const [produtos, setProduto] = useState([]);

    return (
        <CardCarrinhoContainer>
            {props.lista.map((produto) => (

                <CardCarrinho>
                    <TopCardCarrinho>
                        <TopCardCarrinhoImage src={produto.fotoLink} />
                    </TopCardCarrinho>
                    <BottomCardCarrinho>
                        <span>{produto.nome}</span>
                        <span>R${produto.valor}</span>
                        <BotaoRemoverCarrinho produto={produto}>dasdasd</BotaoRemoverCarrinho>

                    </BottomCardCarrinho>
                </CardCarrinho>
            ))}
        </CardCarrinhoContainer>
    );
};