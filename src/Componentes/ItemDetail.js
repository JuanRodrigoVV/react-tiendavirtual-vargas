import React, { useState, useEffect } from 'react';

const ItemDetail = ({data}) => {


    return (
        <div style={styles.contenedor2}>
        <div style={styles.Item1}><h2 style={styles.texto} >{data.name}</h2></div>
        <div style={styles.Item2}><h1 style={styles.texto2}  >Precio {data.price}$</h1></div>
        <div style={styles.Item3}><img style={styles.imagen2}  src={data.imagen}alt=""  /></div>
        <div style={styles.Item4}><img style={styles.imagen3}  src={data.imagen2}alt=""  /></div>
        <div style={styles.Item5}> <img style={styles.imagen3}  src={data.imagen3}alt=""  /></div>
        <div style={styles.Item6}><p style={styles.p} >{data.descripcion}</p></div>
       
       
            
      

        </div>
    )


   


}
const styles = {
    imagen2: {
        height: 500,
        width: 500,
        
        

    },
    imagen3: {
        height: 200,
        width: 200,
        
        

    },
    texto:{
    fontSize: 50,
},
texto2:{
    fontSize: 30,
},
p:{
    fontSize: 30,
},
contenedor2:{
    marginLeft: 20,
    display: 'grid',
    gridTemplateColumns: '500px 500px',
    gridTemplateRows: '100px 100px 500px 200px',
    alignItems: 'center',
    justifyItems: 'center',
    color: 'rgb(73, 73, 116)',
    
    
  
   
},
Item1: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '1',
    
    
},
Item2: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '2',
},
Item3: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '3',
    gridRowEnd: '3',
},
Item4: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '4',
    gridRowEnd: '4',
},
Item5: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '4',
    gridRowEnd: '4',
},
Item6: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '3',
    gridRowEnd: '3',
}
}

export default ItemDetail
