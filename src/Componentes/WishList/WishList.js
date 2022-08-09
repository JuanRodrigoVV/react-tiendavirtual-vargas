import React, {useContext} from 'react'
import { contexto } from '../../Context/Contexto'
import { Link } from "react-router-dom";


const WishList = () => {

 const {wishes, eliminarWishlist} = useContext(contexto);
 


  return (
    <div>
    <h1 style={styles.center}>WishList</h1>
            
    {wishes.length === 0 ? <Link to="/">
        <div style={styles.center}>
        <button style={styles.button2}> Explorar Productos</button>
        </div>
        </Link> :
    <>
   
    {wishes.map(product => { return <>
    <div style={styles.container2}>

        <h2 style={styles.h2} key={product.id}>{product.title}{product.data.title}"precio"{product.data.price}"cantidad"</h2>
        <img style={styles.imagen2}  src={product.data.image}alt=""  />
        <button style={styles.button} onClick={() => eliminarWishlist(product.data.id)}>Remover producto</button>
        <Link to={`/product/${product.data.id}`}><button style={styles.button}>Comprar producto</button></Link>
    </div>

</>})}</>}


    
</div>
  )

  
}
const styles = {
    button: {
        backgroundColor: 'rgb(73, 73, 116)', 
        width: 210,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        borderRadius: 8,
        border: 'none',
        width: 150,
        margin: 5, 


    },
    button2: {
        backgroundColor: 'rgb(73, 73, 116)', 
        width: 210,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        borderRadius: 8,
        border: 'none',
        width: 250,
        margin: 5, 


    },
    h1: {
       
       
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 200,
    },
    h2: {       
        fontSize: 15,
        fontWeight: 200,
    },
    imagen2: {       
   
        
        width: '100px',
        height: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',        
        
        

    },
    container2:{
        
        width: 300,
        height: 310,
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
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 200,
    },
    
    
}

export default WishList