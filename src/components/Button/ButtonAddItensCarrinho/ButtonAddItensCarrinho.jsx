import React, { useState, useEffect, useContext } from 'react'

import './StylesButtonAddItensCarrinho.css'
import { CartContext } from '../../../context/Carrinho'

export const BotaoAdicionarCarrinho = ({ produto }) => {
  const { cart, setCart, addItem, removeItem, clearCart } = useContext(CartContext)

  function adc(produto) {

    setCart([...cart, produto])
    alert("Produto adicionado ao carrinho!")
    console.log(cart)
  }

  function mensagem (){
    
  }
      

  return (
    <>
      <div>

        <button className="bi bi-bag-check" onClick={() => adc(produto)} >
          <strong> Adicionar ao Carrinho</strong>
        </button>
        
        
      </div>
      
    </>
  )
}
