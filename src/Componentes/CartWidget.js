import React, {useContext} from "react"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { contexto } from "../Context/Contexto";

const CartWidget = () => {

  const { productos, eliminarProductos, calcularTotal, calcularCantidad } = useContext(contexto);


  return (
    <>
    <LocalGroceryStoreIcon style={styles.icono}/>
    {productos.length !== 0 ? <h1>{calcularCantidad()}</h1>
    : <></>
    }
    </>
  )
    
    
}

const styles = {
    icono: {
        width: 50,
        height: 50,
        marginRight: 50,
    },
}

export default CartWidget