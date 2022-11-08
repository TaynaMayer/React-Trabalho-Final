import {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {api} from "../../../api";


export const DeleteCliente = () => {
  const [listaClientes, setListaClientes] = useState([]);
  const [id, setId] = useState();
  const [form,setForm] = useState("");
  const[cpf,setCPF] = useState("");
  const[dataNascimento,setDataNascimento] = useState("");
  const[email,setEmail] = useState("");
  const[bairro,setBairro] = useState("");
  const[cep,setCep] = useState("");
  const[cidade,setCidade] = useState("");
  const[complemento,setComplemento] = useState("");
  const[estado,setEstado] = useState("");
  const[numero,setNumero] = useState("");
  const[rua,setRua] = useState("");
  const[nome,setNome] = useState("");
  const[usuario,setUsuario] = useState("");
  
  

    useEffect(() =>{
    const getClientes = async () => {
      try{
        const response = await api.get("/cliente");
        setListaClientes(response.data)
        
      }catch(err){
        console.log(err);
      }
    }
    getClientes()
  },[])

  console.log(listaClientes);

    const deletar = (e) => {
      e.preventDefault();
      try {
        api.delete(`/cliente/${id}`, {  
          cpf,
          dataNascimento,
          email,
          endereco:{
              bairro,
              cep, 
              cidade,
              complemento,
              estado,
              numero,
              rua
           },
           nome,
           usuario});
      
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h1>Deletar Cliente</h1>
      <Form onSubmit={(e) => deletar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaClientes.map((d) => {
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
export default DeleteCliente;
 