import React, { useState, useEffect } from 'react';
import ItemDetail from '../Componentes/ItemDetail';
import { useParams } from "react-router-dom";
import { db } from '../firebase/firebase';
import {doc, getDoc, collection} from "firebase/firestore"



    
const ItemDetailContainer = ({}) =>{

    const {productId} = useParams();
    const [detalles, setDetalles] = useState([]);
    const [loaded, setLoaded] = useState(true);
    /* console.log(productId); */

    



    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection,productId)     
        getDoc(refDoc).then(result=>{
            const datos =  {
                id: result.id,
                ...result.data()}
            setDetalles(datos);
            console.log(detalles);
            
        })
        
 
        
        
        .catch(err=>console.log(err))
        .finally(setLoaded(false));
        
    }, [productId]);
  
    return <>
        <ItemDetail data={detalles}/>
    </>


}

export default ItemDetailContainer