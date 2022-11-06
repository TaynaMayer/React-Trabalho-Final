
import React, { useState, useEffect, useContext } from 'react'
import { CartItensContext } from "../../context/Carrinho"
import './style.css'

export const BotaoRemoverCarrinho = ({ produto }) => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartItensContext)
  console.log(produto.id)
  return (
    <>
      <button onClick={() => removeItem(produto)}>Remover</button>
    </>
  )
}