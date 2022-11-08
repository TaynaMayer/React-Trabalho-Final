import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const UpdateCategoria = () => {
    const [listaCategorias, setListaCategorias] = useState([]);
    const [id, setId] = useState();
    const[descricao,setDescricao] = useState("");

    useEffect(() =>{
    const getCategorias = async () => {
      try{
        const response = await api.get("/categoria");
        setListaCategorias(response.data)
      }catch(err){
        console.log(err);
      }
    }
    getCategorias()
  },[])

  console.log(listaCategorias);

    const atualizar = (e) => {
      e.preventDefault();
      try {
        api.put(`/categoria/${id}`, {  
          descricao,        
          nome:nome,
          });
        
      } catch (err) {
        console.log(err);
      }};

  return (
    <>
      <h1>Atualizar Categorias</h1>
      <Form onSubmit={(e) => atualizar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaCategorias.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option> 
              );
            })}
          </Form.Control>
          <Form.Label>Descrição</Form.Label>
                  <Form.Control
                      value={descricao}
                      type="text"
                      onChange={(e) => {
                        setCPF(e.target.value);
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
        <Button type="submit">Atualizar</Button>
      </Form>
    </>
  );
};
export default UpdateCategoria;