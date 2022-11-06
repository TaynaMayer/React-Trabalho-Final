import React from 'react'
import './App.css'
import { Home } from './screens/Home/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Manage } from './screens/Manage/Manage';
import { ShoppingCart } from './screens/ShoppingCart/ShoppingCart';
import { DetalheProduto } from './screens/DetalheProduto';
import { Footer } from './components/Footer/Footer';  
import { CartProvider } from './context/Carrinho';


function App() {

  return(
    
    <BrowserRouter>
    <CartProvider>
      <Header/>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Manage" element={<Manage />} />
      <Route path="/ShoppingCart/" element={<ShoppingCart />} />
      <Route path="/DetalheProduto/:id" element={<DetalheProduto />} />
    </Routes>
    
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  ) 
}

export default App
    

    
  

    

//importar router aqui.