import React, { useState, useContext } from "react";
import { contexto2 } from '../Context/ContextoAuth';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import  {app}  from "../firebase/firebase";

const auth = getAuth(app);


const LoginPage = () => {



    const {handleSubmit, usuario, error, handleLogIn, handleLogOut, handleWishRestore, wishRestore2 } = useContext(contexto2);
    


    const [user, setUser] = useState({
        
       
        email: '',
        
        password:''

        
    });
    
    const handleChange = ({target:{name, value}}) => {
        setUser({...user, [name]: value})
      
        
    };


    const holis = () => {
        console.log(wishRestore2)
    }


    return (
        <>
      {usuario ? <><h1>{usuario.email}</h1> <button onClick={handleLogOut}>logout</button></>: <h1>hola como estas</h1>}
      <h1>{error}</h1>
    
        {usuario ? <></> : <>
        <form style={styles.formulario} >
        <label style={styles.label} htmlFor="">Email</label>
        <input style={styles.button} name="email" type="text" placeholder="Email" onChange={handleChange}></input>
        <label style={styles.label} htmlFor="">Password</label>
        <input style={styles.button} name="password" type="password" placeholder="Password" onChange={handleChange}></input>
        </form>
        <button style={styles.button}  onClick={()=>handleLogIn(user.email, user.password)} >Ingresar</button>
        <button style={styles.button} onClick={()=>handleSubmit(user.email, user.password)}>Registrarme</button>
        <button style={styles.button} onClick={holis}>boton restore</button>
        </> 
        }
    </>
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
        
        

    }
}
export default LoginPage