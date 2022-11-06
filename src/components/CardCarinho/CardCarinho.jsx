import React, { useState, useParams } from "react";

import { CardCarrinhoContainer, CardCarrinho, TopCardCarrinho, TopCardCarrinhoImage, BottomCardCarrinho } from "./StyleCardCarrinho";


export const CarrinhoCards = (props) => {
    //const {id} = useParams();
    const [produtos, setProduto] = useState([]);
   /* useEffect(() => {
        api
      .get(`/produto/${id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, []);*/


    return (
        <CardCarrinhoContainer>
            {props.lista.map((produto) => (

                <CardCarrinho key={produto.id}>
                    <TopCardCarrinho>
                        <TopCardCarrinhoImage src={produto.fotoLink} />
                    </TopCardCarrinho>
                    <BottomCardCarrinho>
                        <span>{produto.nome}</span>
                        <span>R${produto.valor}</span>

                    </BottomCardCarrinho>
                </CardCarrinho>
            ))}
        </CardCarrinhoContainer>
    );
};