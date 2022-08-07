

import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from 'firebase/firestore';




const ItemListContainer = (greetings) => {
const [loaded, setLoaded] = useState(true);
const {categoryId} = useParams();
const [paquetes, setPaquetes] = useState([]);





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

}, [categoryId]);



    



    return (
        <div style={styles.contenedor} >
       
        
        <ItemList paquetes={paquetes}/>
        </div>
      
    )
      
      
    }

  const styles = {
  
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
