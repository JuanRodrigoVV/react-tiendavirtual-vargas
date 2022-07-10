import React from "react";
import ItemListContainer from "./Componentes/ItemListContainer"
import NavBar  from "./Componentes/Header/NavBar"
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Cart from "./Componentes/Cart/Cart";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CustomProvider from "./Context/Contexto.js"






const App = () => {


  return ( 
    <BrowserRouter>
    <CustomProvider>
     <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>}></Route>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>  
    <Route path="/product/:productId" element={<ItemDetailContainer/> }></Route> 
    <Route path="/Cart/Cart" element={<Cart/>}></Route>
      </Routes>
     </CustomProvider>
    
     
      
     
     </BrowserRouter>
    
    
  )
  
}

export default App