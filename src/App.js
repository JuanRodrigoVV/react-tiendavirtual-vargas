import React from "react";
import ItemListContainer from "./Componentes/ItemListContainer"
import NavBar  from "./Componentes/Header/NavBar"
import ItemDetailContainer from "./Componentes/ItemDetailContainer";





const App = () => {
  return ( 
    <div>
     <NavBar/>
     <ItemListContainer/>
     <ItemDetailContainer/>
     
      
     </div> 
    
    
  )
  
}

export default App