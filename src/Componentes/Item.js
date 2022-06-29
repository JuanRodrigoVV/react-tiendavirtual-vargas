import React, { useState, useEffect } from 'react';

const Item = ({id, name, price, imagen}) => {


    return (
        <div style={styles.contenedor}>
        <h2 style={styles.texto2}>id del producto {id}</h2>
       <h1 style={styles.texto}>{name}</h1>
       <h2 style={styles.texto2}>precio {price}</h2>
       <img style={styles.imagen} src={imagen}alt=""  />
       
       
            
      

        </div>
    )


}
const styles = {
    imagen: {
        height: 100,
        width: 100,
        

    },
    texto:{
    fontSize: 20,
},
texto2:{
    fontSize: 20,
},
contenedor:{
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    aligContent: 'center',        
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyText: 'center',
}
}


export default Item