import React from "react";
import ItemListContainer from "./Componentes/ItemListcontainer/ItemListContainer";
import NavBar  from "./Componentes/Header/NavBar"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Componentes/Cart/Cart";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CustomProvider from "./Context/Contexto.js"
import LoginPage from "./Componentes/LoginPage/LoginPage";
import AuthCustomProvider from "./Context/ContextoAuth";
import WishList from "./Componentes/WishList/WishList";
import Purchases from "./Componentes/Purchases/Purchases";








const App = () => {


  return ( 
    <BrowserRouter>
    <AuthCustomProvider>
   
    <CustomProvider>
     <NavBar/>
    <Routes>
    <Route path="/login" element={<LoginPage/>}> </Route>
    <Route path="/" element={<ItemListContainer/>}></Route>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>  
    <Route path="/product/:productId" element={<ItemDetailContainer/> }></Route> 
    <Route path="/Cart/Cart" element={<Cart/>}></Route>
    <Route path="/WishList/WishList" element={<WishList/>}></Route>
    <Route path="/Purchases/Purchases" element={<Purchases/>}></Route>
    
      </Routes>
     </CustomProvider>
    </AuthCustomProvider>
    
     
      
     
     </BrowserRouter>
    
    
  )
  
}

export default App