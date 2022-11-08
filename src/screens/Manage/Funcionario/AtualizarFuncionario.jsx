import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const UpdateFuncionario = () => {
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [id, setId] = useState();
    const[cpf,setCPF] = useState("");
    const[nome,setNome] = useState("");

    useEffect(() =>{
    const getFuncionarios = async () => {
      try{
        const response = await api.get("/funcionario");
        setListaFuncionarios(response.data)
      }catch(err){
        console.log(err);
      }
    }
    getFuncionarios()
  },[])

  console.log(listaFuncionarios);

    const atualizar = (e) => {
      e.preventDefault();
      try {
        api.put(`/funcionario/${id}`, {  
          cpf,        
          nome:nome,
          });
        
      } catch (err) {
        console.log(err);
      }};

  return (
    <>
      <h1>Atualizar Funcionários</h1>
      <Form onSubmit={(e) => atualizar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaFuncionarios.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option> 
              );
            })}
          </Form.Control>
          <Form.Label>CPF</Form.Label>
                  <Form.Control
                      value={cpf}
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
export default UpdateFuncionario;