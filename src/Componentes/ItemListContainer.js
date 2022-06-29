
import ItemCount from "./ItemCounts";
import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";

const productos = [
    {id: '1', name:'Paquete 1', price: '300', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
    {id: '2', name:'Paquete 2', price:'500', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
    {id: '3', name:'Paquete 3', price:'500', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
];

const ItemListContainer = (greetings) => {

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(productos);
        rej('error');
    }, 2000);
});

const [paquetes, setPaquetes] = useState([]);

useEffect(() => {
    promesa.then(res => {
        console.log(res);
        setPaquetes(res);
    }).catch(err => {

        console.log(err);
    });
}, [])



    
const onAdd = (ValorCarrito) => {
        
   
    alert(`compraste ${ValorCarrito} productos`)
   


}


    return (
        <div style={styles.contenedor} >
        <h1 style={styles.texto}>ItemListContainer</h1>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        <ItemList paquetes={paquetes}/>
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
        height: 300,
        width: 1200,
        margin: 'auto',
        
        

    },

}

export default ItemListContainer
