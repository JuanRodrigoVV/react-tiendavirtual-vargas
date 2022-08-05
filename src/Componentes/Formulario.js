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
            <h1>Datos del comprador</h1>
            <label style={styles.label} name="name" htmlFor="">Email</label>
            <label style={styles.label} name="name" htmlFor="">{usuario.email}</label>
            <label style={styles.label} htmlFor="">Nombre</label>
            <input style={styles.button} name="nombre" type="text" placeholder="Nombre" onChange={ev =>setNombre(ev.target.value)}></input>
           
            <label style={styles.label} htmlFor="">Direccion</label>
            <input style={styles.button} name="direccion" type="text" placeholder="Dirección" onChange={ev => setDireccion(ev.target.value)}></input>
  
            <label style={styles.label} htmlFor="">Código Postal</label>
            <input style={styles.button} name="codigoPostal" type="number" placeholder="Código Postal" onChange={ev => setCpostal(ev.target.value)}></input>
            
            </form>
            <button style={styles.button} onClick={() => handleUser(nombre,direccion,usuario.email,cpostal)}>Confirmar datos</button>
        </>:
        <>
        
            <form style={styles.formulario}>
            <h1>Datos del comprador</h1>
            <label style={styles.label} htmlFor="">Nombre</label>
            <input style={styles.button} name="nombre" type="text" placeholder="Nombre" onChange={ev =>setNombre(ev.target.value)}></input>
            <label style={styles.label} htmlFor="">Direccion</label>
            <input style={styles.button} name="direccion" type="text" placeholder="Dirección" onChange={ev => setDireccion(ev.target.value)}></input>
            <label style={styles.label} htmlFor="">Email</label>
            <input style={styles.button} name="email" type="text" placeholder="Email" onChange={ev => setEmail(ev.target.value)}></input>
            <label style={styles.label} htmlFor="">Código Postal</label>
            <input style={styles.button} name="codigoPostal" type="number" placeholder="Código Postal" onChange={ev => setCpostal(ev.target.value)}></input>
            
            </form>
            <button style={styles.button} onClick={() => handleUser(nombre,direccion,email,cpostal)}>Confirmar datos</button>
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
        padding: '20px',
        width: 1200,

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },
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
    label: {
        
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyText: 'center',
        padding: '20px',
        width: 300,
        fontSize: '25px',

        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        

    },

}

export default Formulario