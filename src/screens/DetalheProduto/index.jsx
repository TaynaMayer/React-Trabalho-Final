import { Button, Card, Col, Row } from "react-bootstrap"
import { api } from '../../api';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BodyContainer } from '../../components/BodyContainer/BodyContainer'
import './DetalheProduto.css'

export const DetalheProduto = () => {
    const {id} = useParams();
    console.log(id);

    const [produto, setProduto] = useState([]);
    useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

    return (
        <BodyContainer>
            <Row>
                <Col>
                    <div className="esquerda">
                        <img src={produto.fotoLink} />
                    </div>
                </Col>

                <Col>
                    <div className="direita">
                        <h1>{produto.nome}</h1>
                        <p>{produto.descricao}</p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        
                        <div className="botao">
                            <Button variant="success" size="lg">Comprar <i className="bi bi-bag-check"></i></Button>{' '}
                        </div>
                    </div>
                </Col>
            </Row>
        </BodyContainer>
        
    )
}