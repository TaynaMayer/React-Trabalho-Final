import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
 // const [precoTotal, setPrecoTotal] = useState()
 
  const [valorTotal, setValorTotal] = useState(0);
  const [cart, setCart] = useState([])

  function finalizarCompra() {

    let soma = 0
    for (let index = 0; index < cart.length; index++) {

      soma = soma + cart[index].valor;
    }

    setValorTotal(soma);
    console.log(valorTotal);
  }
  function addItem(item) {
    const aux = cart
    aux.push(item)
    setCart(aux)
    console.log(cart)
  }
  function removeItem(id) {
    // const filteredCart = cart.filter((item) => item.id !== id);
    // setCart(filteredCart);
    
    for (var i = 0; i < cart.length; i++) {
      if (cart[i] === id) {
        cart.splice(i, 1)
      }
    }
    console.log(cart)
  }


  return (
    <CartContext.Provider
      value={{ cart, addItem, setCart, removeItem, valorTotal, finalizarCompra }}
    >
      {children}
    </CartContext.Provider>
  )
}