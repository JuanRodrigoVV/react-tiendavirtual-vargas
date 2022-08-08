
import React, { useState, useEffect } from 'react';
import Item from "./Item";

const ItemList = ({paquetes}) =>{




    return (
        <div style={styles.contenedor}>
            {paquetes.map((paquetes, i) =>{
       return <>
       
       <Item key={paquetes.id} id={paquetes.id} name={paquetes.title} price={paquetes.price} category={paquetes.category} description={paquetes. description} imagen={paquetes.image} data={paquetes}/> 
       </>
              
            
       
       
        
    })
    }

        
        </div>
    )

}
const styles = {
    contenedor: {
         
        maxWidth: '3500px',
        display: 'grid',
        gridTemplateColumns: '300px 300px 300px 300px',
        gridTemplateRows: '350px',
        height: '800px',
        
        /* boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',  */ 
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }
}



export default ItemList

