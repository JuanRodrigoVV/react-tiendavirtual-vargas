import React, {useContext} from "react"
import { Link } from "react-router-dom";
import { contexto } from "../../Context/Contexto"   



const Cart = () => {


    const { productos, eliminarProductos, calcularTotal, calcularCantidad } = useContext(contexto);

    const remover = (data) => {
        eliminarProductos(data);
        console.log(data);

    }
    return (
        <div>
            {productos.length === 0 ? <Link to="/"><button> No hay productos. Comprar ahora</button></Link> :
            <>
            {productos.map(product => { return <>
                <h2 key={product.id}>{product.title}"id"{product.id}"precio"{product.price}"cantidad"{product.cantidad}</h2>
                <button onClick={() => remover(product)}>Remover producto</button>
       </>})}
       <h1>   total $ {calcularTotal()}</h1>
       <h1>   Cantidad de productos  {calcularCantidad()}</h1>

       
       
      
            
           </>}
            
        </div>
    )
}
export default Cart
