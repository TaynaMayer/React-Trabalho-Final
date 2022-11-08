import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const CreateCategoria = () => {
  const [id, setId] = useState();
  const[descricao,setDescricao] = useState("");
  const[nome,setNome] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/categoria", {
        id: 0,
        descricao,        
        nome,});
    
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Adicionar Categoria</h1>
      <Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>
          <Form.Label>Descrição</Form.Label>
                  <Form.Control
                      value={descricao}
                      type="text"
                      onChange={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />           
              <Form.Label>Nome</Form.Label>      
                    <Form.Control
                    value={nome}
                    type="text"
                    onChange={(e) =>  {
                    setNome(e.target.value);
                    }}       
                />     
        </Form.Group>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
export default CreateCategoria;