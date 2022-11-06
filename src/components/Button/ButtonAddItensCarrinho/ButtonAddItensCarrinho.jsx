import React, { useState, useEffect, useContext } from 'react'

import './StylesButtonAddItensCarrinho.css'
import { CartContext } from '../../../context/Carrinho'

export const BotaoAdicionarCarrinho = ({ produto }) => {
  const { cart, setCart, addItem, removeItem, clearCart } = useContext(CartContext)

  function adc(produto) {
    
    setCart([...cart, produto])
    console.log(cart)
  }
  
  return (
    <>
      <button onClick={() => adc(produto)}>
        <strong>Adicionar ao Carrinho</strong>
      </button>
    </>
  )
}
