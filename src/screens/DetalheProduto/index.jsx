import { useState } from "react";
import { useParams} from "react-router-dom";

export const DetalheProduto = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    const getProductById = () => {
        const produto = data.find((d) => d.id == id);
        setProduct(produto);
    };
    return (
        
        <center>
            <h1>{product.nome}</h1>
            <h2>Detalhes do Produto</h2>
            <button onClick={() => getProductById()}>0</button>
        </center>
    )
}