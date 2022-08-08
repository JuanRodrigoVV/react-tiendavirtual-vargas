import React, {useState, useContext, useEffect} from "react";
import { contexto2 } from "../Context/ContextoAuth";




const Formulario = ({handleUser}) => {

    
    const {usuario} = useContext(contexto2);
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [cpostal, setCpostal] = useState("");
   
    
    return<>
        {usuario ? <>
        
            <form style={styles.formulario}>
            <h1 style={styles.h1}>Datos del comprador</h1>
            <label style={styles.label} name="name" htmlFor="">Email</label>
            <label style={styles.label2} name="name" htmlFor="">{usuario.email}</label>
            <label style={styles.label} htmlFor="">Nombre</label>
            <input style={styles.button} name="nombre" type="text" placeholder="Nombre" onChange={ev =>setNombre(ev.target.value)}></input>
           
            <label style={styles.label} htmlFor="">Direccion</label>
            <input style={styles.button} name="direccion" type="text" placeholder="Dirección" onChange={ev => setDireccion(ev.target.value)}></input>
  
            <label style={styles.label} htmlFor="">Código Postal</label>
            <input style={styles.button} name="codigoPostal" type="number" placeholder="Código Postal" onChange={ev => setCpostal(ev.target.value)}></input>
            
            </form>
            <button style={styles.button2} onClick={() => handleUser(nombre,direccion,usuario.email,cpostal)}>Confirmar datos</button>
        </>:
        <>
        
            <form style={styles.formulario}>
            <h1 style={styles.h1}>Datos del comprador</h1>
            <label style={styles.label} htmlFor="">Nombre</label>
            <input style={styles.button} name="nombre" type="text" placeholder="Nombre" onChange={ev =>setNombre(ev.target.value)}></input>
            <label style={styles.label} htmlFor="">Dirección</label>
            <input style={styles.button} name="direccion" type="text" placeholder="Dirección" onChange={ev => setDireccion(ev.target.value)}></input>
            <label style={styles.label} htmlFor="">Email</label>
            <input style={styles.button} name="email" type="text" placeholder="Email" onChange={ev => setEmail(ev.target.value)}></input>
            <label style={styles.label} htmlFor="">Código Postal</label>
            <input style={styles.button} name="codigoPostal" type="number" placeholder="Código Postal" onChange={ev => setCpostal(ev.target.value)}></input>
            
            </form>
            <button style={styles.button2} onClick={() => handleUser(nombre,direccion,email,cpostal)}>Confirmar datos</button>
        </>}
    
    </>

}

const styles = {
  
    formulario: {
        
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        
        width: 500,
        height: 600,
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        
        boxShadow: '3px 3px 5px rgba(0, 124, 8.4, 0.2)',
        
        

    },
    button: {
        padding: '20px',
        width: 300,      
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

    },
    label: {
        width: 300,
        fontSize: '25px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    label2: {
       
        fontSize: '25px',
        fontWeight: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 10,
     
    },
    h1: {
        fontWeight: 200,
    }

}

export default Formulario