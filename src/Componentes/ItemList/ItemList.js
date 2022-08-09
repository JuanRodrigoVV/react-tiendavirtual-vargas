import React from 'react';
import Item from "../Item/Item";

const ItemList = ({paquetes}) =>{


    return (
        <div key={paquetes.id} style={styles.contenedor}>
            {paquetes.map((paquetes, i) =>{
       return <div key={paquetes.id}>
       
       <Item  id={paquetes.id} name={paquetes.title} price={paquetes.price} category={paquetes.category} description={paquetes. description} imagen={paquetes.image} data={paquetes}/> 
       </div>
       
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
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }
}



export default ItemList

