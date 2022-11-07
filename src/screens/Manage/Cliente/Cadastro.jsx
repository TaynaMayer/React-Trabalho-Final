import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Cadastro = () => {
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
  

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/cliente", {
        cpf,
        dataNascimento:dataNascimento,
        email:email,
        endereco:{
            bairro,
            cep, 
            cidade,
            complemento,
            estado,
            numero,
            rua
         },
         nome:nome,
         usuario});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Adicionar cliente</h1>
      <Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>
                s
        </Form.Group>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
