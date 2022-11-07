
import { useState } from "react";
import { Button,Form} from "react-bootstrap";
import {api} from "../../api";
import { Atualiza } from "./Cliente/Atualiza";
import { Cadastro } from "./Cliente/Cadastro";
import { Deleta } from "./Cliente/Deleta";



export const Manage = () => {
    const [form,setForm] = useState("");
   

    return (
            <div>
            <h1>Página do Manage</h1>
            <Button onClick = {()=> setEstado("adicionar") }> Adicionar </Button>
            <Button onClick = {()=> setEstado("atualizar")}> Atualizar </Button>
            <Button onClick = {()=> setEstado("deletar")}> Deletar </Button>
            {form == "adicionar"&& <Cadastro/>}
            {form === "atualizar" && <Atualiza />}
            {form === "deletar" && <Deleta />}
     
        </div>

    
    );
};