import React from "react";
import ItemListContainer from "./Componentes/ItemListContainer"
import NavBar  from "./Componentes/Header/NavBar"
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Cart from "./Componentes/Cart/Cart";
import { BrowserRouter, Routes, Route} from 'react-router-dom';






const App = () => {


  return ( 
    <BrowserRouter>
     <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>}></Route>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>  
    <Route path="/product/:productId" element={<ItemDetailContainer/> }></Route> 
    <Route path="/Cart/Cart" element={<Cart/>}></Route>
 
    

     </Routes>
    
     
      
     
     </BrowserRouter>
    
    
  )
  
}

export default App