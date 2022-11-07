import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/Carrinho'
//import { CartItensContext } from "../../context/Carrinho"


export const BotaoRemoverCarrinho = ({ produto }) => {
  
  const { cart, removeItem } = useContext(CartContext)
  
  console.log(produto.id)
  return (
    <>
      <button onClick={() => removeItem(produto)}>Remover</button>
    </>
  )
}