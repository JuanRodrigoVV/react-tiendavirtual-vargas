
import React, { useState, useEffect } from 'react';
import Item from "./Item";

const ItemList = ({paquetes}) =>{




    return (
        <>
            {paquetes.map((paquetes, i) =>{
       return <>
       
       <Item id={paquetes.id} name={paquetes.title} price={paquetes.price} category={paquetes.category} description={paquetes. description} imagen={paquetes.image}/> 
       </>
              
            
       
       
        
    })
    }

        
        </>
    )

}



export default ItemList