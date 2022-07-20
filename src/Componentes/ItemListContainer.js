

import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from 'firebase/firestore';



const ItemListContainer = (greetings) => {
const [loeaded, setLoaded] = useState(true);
const {categoryId} = useParams();
const [paquetes, setPaquetes] = useState([]);



console.log(categoryId);

useEffect(() => {


const productsCollection = collection(db,'productos');
const q = categoryId ? query(productsCollection, where('category', '==', categoryId)) : query (productsCollection);


getDocs(q)
.then(result => {
    const lista = result.docs.map(product=> {
        return {
            id: product.id,
            ...product.data(),
        }
    })
    setPaquetes(lista);
    
}) 
.catch(err=>console.log(err))
.finally(setLoaded(false));



/* 


    const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : `https://fakestoreapi.com/products`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setPaquetes(data)) 
    .catch(err=>console.log(err)) */
    
}, [categoryId]);



    



    return (
        <div style={styles.contenedor} >
        <h1 style={styles.texto}>ItemListContainer</h1>
 
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
