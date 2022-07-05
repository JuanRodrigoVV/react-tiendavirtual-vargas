
import ItemCount from "./ItemCounts";
import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

{/* const productos = [
    {id: '1', name:'Paquete 1', price: '300', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
    {id: '2', name:'Paquete 2', price:'500', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
    {id: '3', name:'Paquete 3', price:'500', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
]; */}

const ItemListContainer = (greetings) => {

const {categoryId} = useParams();

/* const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(productos);
        rej('error');
    }, 2000);
}); */


const [paquetes, setPaquetes] = useState([]);
console.log(categoryId);

useEffect(() => {
    const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : `https://fakestoreapi.com/products`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setPaquetes(data)) 
    .catch(err=>console.log(err))
    
}, [categoryId]);



    
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
     
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        
        width: 1200,

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },

}

export default ItemListContainer
