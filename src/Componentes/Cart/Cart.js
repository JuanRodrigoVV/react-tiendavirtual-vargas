import { Collections } from "@mui/icons-material";
import React, {useContext, useState} from "react"
import { Link } from "react-router-dom";
import { contexto } from "../../Context/Contexto";   
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import { db } from '../../firebase/firebase';
import Formulario from "../Formulario";



const Cart = () => { 
    const {limpiarCarro} = useContext(contexto);


    const [idVenta, setidVenta] = useState("");
    const { productos, eliminarProductos, calcularTotal, calcularCantidad } = useContext(contexto);
    const [nombre, setnombre] = useState("");
    const [direccion, setdireccion] = useState("");
    const [email, setemail] = useState("");
    const [cPostal, setCpostal] = useState("");
    const [datos, setdatos] = useState(false);




    
    const datosComprador = {
        nombre: {nombre},
        direccion: {direccion},
        email: {email},
        cPostal: {cPostal},
    }

    const finalizarCompra = () => {
        const ventasCollection = collection(db,'ventas');
            addDoc(ventasCollection, {
                datosComprador,
                items: productos,
                total: calcularTotal(),               
                date: serverTimestamp(),
                
                
            })
            .then((result)=>{
            setidVenta(result.id);
            console.log(idVenta);            
            alert('Su compra ha sido enviada, su número de consulta es ' + result.id)
            
            
            })
            limpiarCarro();

    }

   

    productos.forEach(productos => {
        const updateCollection = doc(db, "productos",productos.id);
        updateDoc(updateCollection,{stock: productos.stock - productos.cantidad}); 
        
    });


    const remover = (data) => {
        eliminarProductos(data);
        console.log(data);

    }

    const handleUser = (nombre,direccion,email,cpostal) => {
        console.log(nombre,direccion,email,cpostal);
        setnombre(nombre);
        setdireccion(direccion);
        setemail(email);
        setCpostal(cpostal);
        setdatos(true)
    } 



    return (
        
        <div>
            
            {productos.length === 0 ? <Link to="/"><button style={styles.button}> No hay productos. Comprar ahora</button></Link> :
            <>
            {productos.map(product => { return <>
                <h2 style={styles.h2} key={product.id}>{product.title}{/* "id"{product.id} */}"precio"{product.price}"cantidad"{product.cantidad}</h2>
                <img style={styles.imagen2}  src={product.image}alt=""  />
                <button style={styles.button} onClick={() => remover(product)}>Remover producto</button>
       </>})}
       <h1 style={styles.h1}>   total $ {calcularTotal()}</h1>
       <h1 style={styles.h1}>   Cantidad de productos  {calcularCantidad()}</h1>
       <Formulario handleUser={handleUser} />
        <button style={styles.button} disabled={datos == false}  onClick={finalizarCompra}>concretar compra</button>
       
       
      
            
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
export default Cart
