import {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {api} from "../../../api";


export const DeleteProduto = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [id, setId] = useState();
  const[nome,setNome] = useState("");
  const[dataFabricacao,setDataFabricacao] = useState("");
  const[descricao,setDescricao] = useState("");
  const[fotoLink,setFotoLink] = useState("");
  const[qtdEstoque,setQTDEstoque] = useState();
  const[valor,setValor] = useState();
  
  

    useEffect(() =>{
    const getProdutos = async () => {
      try{
        const response = await api.get("/produto");
        setListaProdutos(response.data)
      }catch(err){
        console.log(err);
      }
    }
    getProdutos()
  },[])

  console.log(listaProdutos);

    const deletar = (e) => {
      e.preventDefault();
      try {
        api.delete(`/produto/${id}`, {  
          dataFabricacao,
          descricao,
          fotoLink,
          nome,
          qtdEstoque,
          valor});
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h1>Deletar Produto</h1>
      <Form onSubmit={(e) => deletar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaProdutos.map((d) => {
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
export default DeleteProduto;
 