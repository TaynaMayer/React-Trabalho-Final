import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { api } from '../../api';
import React, { useEffect, useState } from "react";

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
            <Card style={{ 
              width: '18rem',
              margin: '20px',
              marginTop: '75px',
              float: 'left'
              

          }}>
          
            <Card.Img variant="top" src={produto.fotoLink} />
            <Card.Body>
              
              <Card.Title>{produto.nome}</Card.Title>
              <Card.Text>{produto.descricao}</Card.Text>
              <Card.Text>R${produto.valor}</Card.Text>

            {/* <Button>
            </Button> */}
             <Link to={"/DetalheProduto"}>Comprar</Link>  
  
            </Card.Body>
            
          </Card>)
            
      } ) }
      
      </>   
    );

}