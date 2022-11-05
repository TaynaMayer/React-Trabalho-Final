import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { api } from '../../api';

export const Cards = () => {

console.log("fora cima");
  useEffect(()=>{
    console.log('useEffect');
  }, []);
  console.log("fora baixo");


    return (
        <Card style={{ 
            width: '18rem',
            float: 'left',
            margin: '20px',
            marginTop: '75px'
        }}>

          <Card.Img variant="top" src="https://ecommerce-api-penguin.herokuapp.com/produto/1/foto" />
          <Card.Body>
            <Card.Title>Cadeira bx9</Card.Title>
            <Card.Text>
            cadeira ergonomica confortavel
            </Card.Text>
          {/* <Button>
          </Button> */}
           <Link to={"/DetalheProduto"}>Comprar</Link>  

          </Card.Body>
        </Card>
    );
}