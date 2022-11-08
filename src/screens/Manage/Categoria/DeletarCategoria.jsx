import {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {api} from "../../../api";


export const DeleteCategoria = () => {
  const [listaCategorias, setListaCategorias] = useState([]);
  const [id, setId] = useState();
  const[nome,setNome] = useState("");
  
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

    const deletar = (e) => {
      e.preventDefault();
      try {
        api.delete(`/categoria/${id}`, {  
          descricao,        
          nome,});
           
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h1>Deletar Categoria</h1>
      <Form onSubmit={(e) => deletar(e)}>
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
        </Form.Group>

        <Button type="submit">Deletar</Button>
      </Form>
    </>
  );
};
export default DeleteCategoria;
 