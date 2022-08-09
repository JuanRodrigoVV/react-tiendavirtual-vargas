import { Collections } from "@mui/icons-material";
import React, {useContext, useState} from "react"
import { Link } from "react-router-dom";
import { contexto } from "../../Context/Contexto";   
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import { db } from '../../firebase/firebase';
import Formulario from "../Formulario";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Cart = () => { 
    const {limpiarCarro} = useContext(contexto);


    const [idVenta, setidVenta] = useState("");
    const { productos, eliminarProductos, calcularTotal, calcularCantidad } = useContext(contexto);
    const [nombre, setnombre] = useState("");
    const [direccion, setdireccion] = useState("");
    const [email, setemail] = useState("");
    const [cPostal, setCpostal] = useState("");
    const [datos, setdatos] = useState(false);
    


    const toasty = (id) => {
        toast('Tu compra ha sido enviada. El código es ' + id, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    
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
            toasty(result.id)
           

            
            
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
        
        <div style={styles.container2}>
            
            {productos.length === 0 ? <Link to="/"><button style={styles.button}> No hay productos. Comprar ahora</button></Link> :
            <>

            {productos.map(product => { return <>

            <div style={styles.container} key={product.id}>
                <h2 style={styles.h2} >{product.title}</h2>
                <h2 style={styles.h2} >$ {product.price}</h2>
                <h2 style={styles.h2} >"cantidad" {product.cantidad}</h2>
                <img style={styles.imagen2}  src={product.image}alt=""  />
                <button style={styles.button} onClick={() => remover(product)}>Remover producto</button>
            </div>
       
       </>})}

       <h1 style={styles.h1}>   Total $ {calcularTotal()}</h1>
       <h1 style={styles.h1}>   Cantidad de productos  {calcularCantidad()}</h1>
       <Formulario handleUser={handleUser} />
        <button style={styles.button2} disabled={datos == false}  onClick={finalizarCompra}>Concretar compra</button>
       
       
      
            
           </>}
        
       <ToastContainer />
            
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
        margin: 10, 

    },
    button2: {
        backgroundColor: 'rgb(73, 73, 116)', 
        width: 210,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        borderRadius: 8,
        border: 'none',
        width: 350,
        margin: 10, 

    },
    h1: {
       
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 200,
    },
    h2: {       
        fontSize: 15,
        fontWeight: 200,
        marginBottom: '-5px',
    },
    imagen2: {
        
        
        padding: '10px',
        width: '100px',
        height: '100px',

       
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
    container:{
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
    container2:{
        
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        margin: '10px',
    
        
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}
export default Cart
