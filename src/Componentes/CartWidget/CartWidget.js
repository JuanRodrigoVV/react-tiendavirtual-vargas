import React, {useContext} from "react"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { contexto } from "../../Context/Contexto";

const CartWidget = () => {

  const { productos, calcularCantidad} = useContext(contexto);


  return (
    <div style={styles.container}>
    <LocalGroceryStoreIcon style={styles.icono}/>
    {productos.length !== 0 ? 
    <h1 style={styles.h1}>{calcularCantidad()}</h1>
    : <></>
    }
   
    </div>
  )
    
    
}

const styles = {
    icono: {
        width: 50,
        height: 50,
        marginRight: 50,
        textDecoration: 'none',
        color: 'white'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      
  },
  h1: {
    fontSize: 20,
    color: 'white',    
    marginTop: -8,
  }
  

}

export default CartWidget