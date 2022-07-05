import React from "react";
import ItemListContainer from "./Componentes/ItemListContainer"
import NavBar  from "./Componentes/Header/NavBar"
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./Componentes/Cart/Cart";




const App = () => {


  return ( 
    <BrowserRouter>
     <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>}></Route>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>  
    <Route path="/product/:productId" element={<ItemDetailContainer/> }></Route> 
    <Route path="/cart" element={<Cart/> }></Route>   
{/*  <ItemListContainer/>   
     <ItemDetailContainer/> */}  
     </Routes>
    
     
      
     
     </BrowserRouter>
    
    
  )
  
}

export default App