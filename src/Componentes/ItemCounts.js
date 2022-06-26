import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);
    

    const handlerClickSumar = () => {
      
        setContador(contador + 1);
    
    }
   

    const handlerClickRestar = () => {
      
        setContador(contador - 1);
    
}
    return ( 
       <div style={styles.contando}>
        
        <h1>{contador}</h1>
        <button disabled={contador >= stock}  onClick={handlerClickSumar}>+</button>
        <button disabled={contador <= 1} onClick={handlerClickRestar}>-</button>
        <button disabled={stock <= 0} onClick={() => onAdd(contador)} >"Agregar al carrito"</button>
        
    </div>
    );
}

const styles = {
    contando: {
        fontSize: 10,
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'space-Between',
        alignItems: 'center',
        justifyText: 'center',
        backgroundColor: '#494974',        
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        width: 200,
        padding: 10,
        
        

    }
}

export default ItemCount