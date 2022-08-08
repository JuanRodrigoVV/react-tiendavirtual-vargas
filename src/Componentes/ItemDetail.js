import React, { useState, useEffect, useContext } from 'react';
import ItemCount from "./ItemCounts";
import { Link } from 'react-router-dom';
import { contexto } from '../Context/Contexto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { contexto2 } from '../Context/ContextoAuth';
import { db } from '../firebase/firebase';
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";


const ItemDetail = ({data}) => {

    const {productos, agregarProductos, eliminarProductos, limpiarCarro, buscarProducto, handleWish, resetWishes} = useContext(contexto);
    const [goToCart, setgoToCart] = useState(false);
    const {usuario, wishList,  } = useContext(contexto2);
    /* const [lista, setLista] = useState([]); */

    const onAdd = (contador) => {
        
        setgoToCart(true);
        
        agregarProductos(data, contador);
        console.log(productos)
     
       
    
    
    }
    const remover = () => {
        eliminarProductos(data);
        console.log(productos);

    }
    const limpiar = () => {
        limpiarCarro();
    }
    const buscar = () => {
       buscarProducto(data);
    }





    return (
        <div style={styles.contenedor2}>
   
        <div style={styles.Item2}><h1 style={styles.texto2} >{data.title}</h1></div>
        <div style={styles.Item1}><h1 style={styles.texto1}  >Precio $ {data.price}</h1></div>
        {/* <div style={styles.Item6}><h1 style={styles.texto2} >{data.title}</h1></div> */}
        <div style={styles.Item3}><img style={styles.imagen2}  src={data.image}alt=""  /></div>
       <div style={styles.Item4} ><p style={styles.p} >{data.description}</p></div>
       
       {
        goToCart ? 
        <div style={styles.Item9}>

        <Link to="/Cart/Cart">
          
            <button>terminar compra</button>
        
            </Link>
        </div>
        : <div style={styles.Item9}>
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>

        </div>

       }
       { usuario ?
        <button style={styles.button2}  onClick={()=>handleWish(data)}><FavoriteBorderIcon/></button> : <>
   
         <p style={styles.Item5}> Ingresa tu cuenta para agregar a favoritos</p>     </>}
        
       <button style={styles.Item6} onClick={remover}>Remover producto</button>
       <button style={styles.Item7} onClick={limpiar}>Limpiar Carro</button>
       <button style={styles.Item8} onClick={buscar}>Buscar</button>
       
   
       
       
       
            
      

        </div>  
    )


   


}
const styles = {

    button2: {
    
        
        border: 'none',
        gridColumnStart: '1',
    gridColumnEnd: '1',
    
    gridRowStart: '1',
    gridRowEnd: '1 ',
    marginLeft: 370,
    marginTop: 25,
        
       
    },
    
    imagen2: {
        height: 340,
        width: 340, 
        padding: 35,
        border: '1px solid rgba(0, 0, 0, 0.3)',
        
        boxShadow: '3px 3px 5px rgba(0, 124, 8.4, 0.2)',
        borderRadius: 8,
        
        

    },
   
    texto:{
    fontSize: 50,
},
texto2:{
    fontSize: 20,
    fontWeight: '500',
},
texto1:{
    fontSize: 30,
    fontWeight: '500',
},
p:{
    fontSize: 15,
    textAlign: 'justify',
    
},
contenedor2:{
    marginLeft: 20,
    display: 'grid',
    gridTemplateColumns: '450px 450px 450px',
    gridTemplateRows: '100px 100px 100px 100px 100px',
    alignItems: 'center',
    justifyItems: 'center',
    color: 'rgb(73, 73, 116)',
    height: 500,
    
   
    
    
  
   
},
Item1: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    
    gridRowStart: '1',
    gridRowEnd: '3  ',
    textAlign: 'center',
    alignSelf: 'center',
    
    
},
Item2: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '2',
    gridRowEnd: '4', 
    alignSelf: 'center',
},
Item3: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '6',
},
Item4: {
   gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '4',
    gridRowEnd: '5', 
},
Item5: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '1',
    marginTop: 35,
},
Item6: {
    gridColumnStart: '3',
    gridColumnEnd: '3',
    gridRowStart: '3',
    gridRowEnd: '5',
    backgroundColor: "#494974", 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: 8,
    width: 240,
},
Item7: {
    gridColumnStart: '3',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '4',
    backgroundColor: "#494974", 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: 8,
    width: 240,
},
Item8: {
    gridColumnStart: '3',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '3',
    backgroundColor: "#494974", 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: 8,
    widht: 150,
    width: 240,
},


Item9: {
    gridColumnStart: '3',
    gridColumnEnd: '3',
    gridRowStart: '4',
    gridRowEnd: '6  ',
    
},

}

export default ItemDetail
