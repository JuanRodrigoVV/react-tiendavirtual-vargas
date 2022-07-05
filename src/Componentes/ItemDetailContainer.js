import React, { useState, useEffect } from 'react';
import ItemDetail from '../Componentes/ItemDetail';
import { useParams } from "react-router-dom";


{/* const detallesProductos  = [
    {id: '1', name:'Notebook Lenovo', price: '150000', imagen: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MzU2OTM2fGltYWdlL3BuZ3xoMGUvaDM5LzExMTQxMjcwNzMyODMwLnBuZ3w5MzhmODhmYmY0YTA3N2NlMzBkMGYxNzJmODQ4Njc2MWEyNWY4MWI4MmMxZTAxMmExNTgxNzJiY2NhODJhODFk', descripcion: 'Laptop equipada con procesadores hasta Intel® Core™ i7 de 11va gen Pantalla FHD de 15.6” hasta IPS y 300 nits; táctil opcional. Diseñada con características más smart. Almacenamiento en unidad dual y lector de huellas digitales opcionales. ',imagen2: 'https://www.lenovo.com/medias/22tpe15e5n2.png?context=bWFzdGVyfHJvb3R8NDU3OTQwfGltYWdlL3BuZ3xoNmIvaGZkLzE0MTExNzE0NTQxNTk4LnBuZ3w5Yzc0N2E4NTgzZDlmNDg2YzRjNWE2MWI3MDkxZTM0OGMxZGMzMWNhMDlkNDJkMjE0MjcwZjlhMTgwNjllZDIw',imagen3: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MzA3ODgyfGltYWdlL3BuZ3xoOWIvaDdlLzExMTQxMjcxNTE5MjYyLnBuZ3xkNmQyZDlmNzcyMGJhZWQ4ZjZkMGIyNWQ5MGY3MDAxZmMzZDBlMjJmOTY1NGRhMDRjNGU2ZDQxYWJlYzg2ZGRi'},
    {id: '2', name:'Paquete 2', price:'500', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg', descripcion: 'La notebook lenovo es tu mejor opcion, 32gb de Ram Placa de video Nvidia 1070 Procesador I7',imagen2: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg',imagen3: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg'},
    {id: '3', name:'Paquete 3', price:'500', imagen: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg', descripcion: 'La notebook lenovo es tu mejor opcion, 32gb de Ram Placa de video Nvidia 1070 Procesador I7',imagen2: 'https://www.lenovo.com/medias/22tpe15e5n2.png?context=bWFzdGVyfHJvb3R8NDU3OTQwfGltYWdlL3BuZ3xoNmIvaGZkLzE0MTExNzE0NTQxNTk4LnBuZ3w5Yzc0N2E4NTgzZDlmNDg2YzRjNWE2MWI3MDkxZTM0OGMxZGMzMWNhMDlkNDJkMjE0MjcwZjlhMTgwNjllZDIw',imagen3: 'https://d500.epimg.net/cincodias/imagenes/2017/07/19/lifestyle/1500462304_123013_1500462569_noticia_normal.jpg' },
]; */}


    
const ItemDetailContainer = ({}) =>{


    
    const {productId} = useParams();

    const [detalles, setDetalles] = useState([]);
    console.log(productId);

{/*     const getItem = new Promise((res, rej) => {
        setTimeout(() => {
            res(detallesProductos);
            rej('error');
        }, 2000);
    }); */}

    useEffect(() => {
        
        fetch(`https://fakestoreapi.com/products/`+{productId} )
        .then(res=>res.json())
        .then(data=>setDetalles(data)) 
        .catch(err=>console.log(err))
        
    }, [productId]);
  
    return <>
        <ItemDetail data={detalles}/>
    </>


}

export default ItemDetailContainer