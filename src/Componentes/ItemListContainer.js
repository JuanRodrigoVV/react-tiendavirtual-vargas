import React from "react";
import ItemCount from "./ItemCounts";



const ItemListContainer = (greetings) => {

    
const onAdd = (ValorCarrito) => {
        
   
    alert(`compraste ${ValorCarrito} productos`)
   


}


    return (
        <div style={styles.contenedor} >
        <h1 style={styles.texto}>ItemListContainer</h1>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        
        </div>
      
    )
      
      
  }

  const styles = {
    texto: {
        fontSize: 50,
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        backgroundColor: '#494974',        
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        

    },
    h2: {
        fontSize: 25,
        
        

    },
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        height: 100,
        width: 700,
        margin: 'auto',
        
        

    },

}

export default ItemListContainer
