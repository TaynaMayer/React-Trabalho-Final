import { Card } from "react-bootstrap"
import { Cards } from "../../components/Cards/Cards"
import { api } from '../../api';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetalheProduto = () => {
    const {id} = useParams();
    console.log(id);

    const [produto, setProduto] = useState([]);
    useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


    return (
        <h1>asidjapsdjasp</h1>
    )
}