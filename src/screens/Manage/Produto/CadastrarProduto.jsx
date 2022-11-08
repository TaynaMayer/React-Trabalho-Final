import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const CreateProduto = () => {
  const [id, setId] = useState();
  const[nome,setNome] = useState("");
  const[dataFabricacao,setDataFabricacao] = useState("");
  const[descricao,setDescricao] = useState("");
  const[fotoLink,setFotoLink] = useState("");
  const[qtdEstoque,setQTDEstoque] = useState();
  const[valor,setValor] = useState();
  const[idCategoria,setIdCategoria] = useState();
  const[idFuncionario,setIdFuncionario] = useState();
  const[nomeCategoria,setNomeCategoria] = useState("");
  const[nomeFuncionario,setNomeFuncionario] = useState("");
  

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/cliente", {
          dataFabricacao,
          descricao,
          fotoLink,
          id:0,
          idCategoria,
          idFuncionario,
          nome,
          nomeCategoria,
          nomeFuncionario,
          qtdEstoque,
          valor});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Adicionar Produto</h1>
      <Form onSubmit={(e) => atualizar(e)}>
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

          <Form.Label>Data de Fabricacao</Form.Label>
                  <Form.Control
                      value={dataFabricacao}
                      type="date"
                      onChange={(e) => {
                        setDataFabricacao(e.target.value);
                      }}
                    />

                  <Form.Label>Descricao</Form.Label>
                    <Form.Control
                        value={descricao}
                        type="text"
                        onChange={(e) =>  {
                        setDescricao(e.target.value);
                        }}       
                    />
                  <Form.Label>Insira o link da foto do produto</Form.Label>
                    <Form.Control
                        value={fotoLink}
                        type="text"
                        onChange={(e) =>  {
                        setFotoLink(e.target.value);
                        }}       
                    />
                
            </Form.Group>
            <Form.Group>
                    
                    <Form.Label>Insira o id da Categoria</Form.Label>
                    
                        <Form.Control
                        value={idCategoria}
                        type="number"
                        onChange={(e) =>  {
                        setIdCategoria(e.target.value);
                        }}       
                    />
                    <Form.Label>Insira o id do Funcionario</Form.Label>
                    
                        <Form.Control
                        value={idFuncionario}
                        type="number"
                        onChange={(e) =>  {
                        setIdFuncionario(e.target.value);
                        }}       
                    />
                    <Form.Label>Cidade</Form.Label>
                    
                    <Form.Control
                    value={cidade}
                    type="text"
                    onChange={(e) =>  {
                    setCidade(e.target.value);
                    }}       
                />
                    <Form.Label>Complemento</Form.Label>
                    
                    <Form.Control
                    value={complemento}
                    type="text"
                    onChange={(e) =>  {
                    setComplemento(e.target.value);
                    }}       
                />
                 <Form.Label>Estado</Form.Label>
                    
                    <Form.Control
                    value={estado}
                    type="text"
                    onChange={(e) =>  {
                    setEstado(e.target.value);
                    }}       
                />
                <Form.Label>Número</Form.Label>
                    
                    <Form.Control
                    value={numero}
                    type="text"
                    onChange={(e) =>  {
                    setNumero(e.target.value);
                    }}       
                />
                <Form.Label>Rua</Form.Label>
                    
                    <Form.Control
                    value={rua}
                    type="text"
                    onChange={(e) =>  {
                    setRua(e.target.value);
                    }}       
                />


            </Form.Group>

            <Form.Group>
              <Form.Label>Nome</Form.Label>
                    
                    <Form.Control
                    value={nome}
                    type="text"
                    onChange={(e) =>  {
                    setNome(e.target.value);
                    }}       
                />

              <Form.Label>Usuário</Form.Label>
                    
                        <Form.Control
                        value={usuario}
                        type="text"
                        onChange={(e) =>  {
                        setUsuario(e.target.value);
                        }}       
                    />


        </Form.Group>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
export default CreateProduto;