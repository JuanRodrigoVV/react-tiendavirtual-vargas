import React, { useState, useEffect, useContext } from 'react';
import ItemCount from "./ItemCounts";
import { Link } from 'react-router-dom';
import { contexto } from '../Context/Contexto';


const ItemDetail = ({data}) => {

    const {productos, agregarProductos, eliminarProductos, limpiarCarro, buscarProducto} = useContext(contexto);
    const [goToCart, setgoToCart] = useState(false);


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
      {/*   <div style={styles.Item1}><h2 style={styles.texto} >{data.id}</h2></div>  */}   
        <div style={styles.Item1}><h2 style={styles.texto} >{data.name}</h2></div>
        <div style={styles.Item2}><h1 style={styles.texto2}  >Precio {data.price}$</h1></div>
        <div style={styles.Item3}><img style={styles.imagen2}  src={data.image}alt=""  /></div>
       <div style={styles.Item6}><p style={styles.p} >{data.description}</p></div>
       {
        goToCart ? 
        <Link to="/Cart/Cart"><button >terminar compra</button></Link>
        : <ItemCount stock={5} initial={1} onAdd={onAdd}/>

       }
       <button onClick={remover}>Remover producto</button>
       <button onClick={limpiar}>Limpiar Carro</button>
       <button onClick={buscar}>buscar</button>
   
       
       
       
            
      

        </div>
    )


   


}
const styles = {
    imagen2: {
        height: 500,
        width: 500,
        
        

    },
    imagen3: {
        height: 200,
        width: 200,
        
        

    },
    texto:{
    fontSize: 50,
},
texto2:{
    fontSize: 30,
},
p:{
    fontSize: 30,
},
contenedor2:{
    marginLeft: 20,
    display: 'grid',
    gridTemplateColumns: '500px 500px',
    gridTemplateRows: '100px 100px 500px 200px',
    alignItems: 'center',
    justifyItems: 'center',
    color: 'rgb(73, 73, 116)',
    
    
  
   
},
Item1: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '1',
    
    
},
Item2: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '2',
},
Item3: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '3',
    gridRowEnd: '3',
},
Item4: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '4',
    gridRowEnd: '4',
},
Item5: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '4',
    gridRowEnd: '4',
},
Item6: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '3',
    gridRowEnd: '3',
}
}

export default ItemDetail
