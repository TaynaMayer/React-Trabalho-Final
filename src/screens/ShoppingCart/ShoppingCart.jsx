import { useContext, useState } from "react"
import { CartContext } from "../../context/Carrinho"
import { Cards } from "../../components/Cards/Cards";
import { CarrinhoCards } from "../../components/CardCarinho/CardCarinho";
import { ButtonFinalizar } from "../../components/Button/ButtonFinalizar/ButtonFinalizar";
import './ShoppingCart.css'


export const ShoppingCart = () => {

    const { cart, removeItem, clearCart, valorTotal, finalizarCompra } = useContext(CartContext)

    console.log(cart);
    return (
        <div>
            <CarrinhoCards lista={cart} />
            <div className="BotaoFinalizar">

    
            <button 
            
            onClick={finalizarCompra}
            >
            finalizarCompra
            
            </button>
            valorTotal:R${valorTotal},00
            </div>
            
        </div>
            

        
    )
}