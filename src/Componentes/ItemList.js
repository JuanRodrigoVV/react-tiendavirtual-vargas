
import React, { useState, useEffect } from 'react';
import Item from "./Item";

const ItemList = ({paquetes}) =>{




    return (
        <>
            {paquetes.map((paquetes, i) =>{
       return <>
       
       <Item id={paquetes.id} name={paquetes.name} price={paquetes.price} imagen={paquetes.imagen}/> 
       </>
              
            
       
       
        
    })
    }

        
        </>
    )

}



export default ItemList