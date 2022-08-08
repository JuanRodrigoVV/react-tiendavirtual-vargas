import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from '../Context/Contexto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = ({id, name, price, imagen, data}) => {

    
    const {handleWish} = useContext(contexto)
    

   



    return (
    
        <div style={styles.contenedor}>
        <button style={styles.button2}  onClick={()=>handleWish(data)}><FavoriteBorderIcon/></button>
       {/*  <h2 style={styles.texto2}>id del producto {id}</h2> */}
       <h2 style={styles.texto2}>$ {price}</h2>
       <img style={styles.imagen} src={imagen}alt=""  />
       <h1 style={styles.texto}>{name}</h1>
        
       <Link to={`/product/${id}`}><button style={styles.button}>Mas detalles</button></Link>
       
       
            
      

        </div>
    )


}
const styles = {
    imagen: {
        height: 150,
        width: 150,
        

    },
    texto:{
    fontSize: 12,
    margin: 20,
   
},
texto2:{
    fontSize: 20,
},
contenedor:{
    width: 280,
    height: 330,
    borderRadius: 8,
    border: '1px solid rgba(0, 0, 0, 0.3)',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    aligContent: 'center',        
    justifyItems: 'center',
    margin: '10px',

    
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
},
button: {
    marginBottom: 20,
},
button2: {
    
    borderRadius: '50%',
    border: 'none',
    marginTop: 10,
    marginLeft: 240,
    marginBottom: -25,    
},

}


export default Item