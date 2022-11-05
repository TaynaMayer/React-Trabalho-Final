import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { api } from '../../api';
import React, { useEffect, useState } from "react";
import { Col } from 'react-bootstrap';
import './Style.css'; 

export const Cards = () => {
  const [produtos, setProduto] = useState([]);
  useEffect(() => {
    api
      .get("/produto")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

    return (

          <>
          {produtos.map((produto) => {
            return(
              <Col md="6" sm= "12" lg= "4" xl= "4">                              
                <Card style={{ 
                  height: '525px',
                  width: '250px',                 
                  border: '1px solid',
                  marginTop: '70px',
                  textAlign: 'center'
                  
                            
                  
              }}>
              
                <Card.Img variant="top" src={produto.fotoLink} />
                <Card.Body>
                  
                  <Card.Title>{produto.nome}</Card.Title>
                  <Card.Text>{produto.descricao}</Card.Text>
                  <Card.Text>R${produto.valor}</Card.Text>
                  <Button variant="success"><Link to={`/DetalheProduto/${produto.id}`}>Comprar</Link></Button>{' '}
                
                </Card.Body>
                
              </Card>
              </Col>
            )
      } ) }
        </>   
    );

}