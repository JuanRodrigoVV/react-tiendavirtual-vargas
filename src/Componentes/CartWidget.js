import React from "react";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const CartWidget = () => {
  return (

    <LocalGroceryStoreIcon style={styles.icono}/>
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