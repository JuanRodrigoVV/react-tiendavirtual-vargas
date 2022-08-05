import React, {useContext} from 'react'
import { contexto } from '../../Context/Contexto'
import { Link } from "react-router-dom";


const WishList = () => {

 const {wishes, eliminarWishlist} = useContext(contexto);
 console.log(wishes)


  return (
    <div>
        <h1>WishList</h1>
            
    {wishes.length === 0 ? <Link to="/"><button style={styles.button}> No hay productos en tu wishlist</button></Link> :
    <>
    {wishes.map(product => { return <>
        <h2 style={styles.h2} key={product.id}>{product.title}{product.data.title}"precio"{product.data.price}"cantidad"</h2>
        <img style={styles.imagen2}  src={product.data.image}alt=""  />
        <button style={styles.button} onClick={() => eliminarWishlist(product.data.id)}>Remover producto</button>
        <Link to={`/product/${product.data.id}`}><button>Comprar producto</button></Link>
</>})}




    
   </>}


    
</div>
  )

  
}
const styles = {
    button: {
        
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        padding: '20px',
        width: 300,

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
    h1: {
        
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        padding: '20px',
        width: 500,

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
    h2: {
        
        display: 'flex',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        padding: '20px',
        width: '100%',

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
    imagen2: {
        
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        padding: '20px',
        width: '100px',

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
}

export default WishList