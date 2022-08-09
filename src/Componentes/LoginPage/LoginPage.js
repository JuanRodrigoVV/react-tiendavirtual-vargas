import React, { useState, useContext } from "react";
import { contexto2 } from '../../Context/ContextoAuth';
import {getAuth} from 'firebase/auth'
import  {app}  from "../../firebase/firebase";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const auth = getAuth(app);


const LoginPage = () => {

    const {handleSubmit, usuario, error, handleLogIn, handleLogOut} = useContext(contexto2);
    

    const [user, setUser] = useState({      
       
        email: '',        
        password:''
        
    });
    
    const handleChange = ({target:{name, value}}) => {
        setUser({...user, [name]: value})      
        
    };
 

    return (
        <>
      {usuario ? <div style={styles.container3}>
      <h1 style={styles.h1}>Bienvenido</h1>
      <h1 style={styles.h1}>{usuario.email}</h1> 
      <Link style={styles.center} to="/">
      <button style={styles.button2}>Comprar</button>
      </Link>
      <button style={styles.button2} onClick={handleLogOut}>Logout</button>
      </div>:
      
      <h1 style={styles.h1}>Bienvenido</h1>}
      <h1 style={styles.h1}>{error}</h1>
        
        {usuario ? <></> : 
        <>
        <div style={styles.container}>

        <form  >
        <label style={styles.label} htmlFor="">Email</label>
        <div>
        <input style={styles.input} name="email" type="text" placeholder="Email" onChange={handleChange}></input>

        </div>
        <label style={styles.label} htmlFor="">Password</label>
        <div>

        <input style={styles.input} name="password" type="password" placeholder="Password" onChange={handleChange}></input>
        </div>
        </form>
        <button style={styles.button}  onClick={()=>handleLogIn(user.email, user.password)} >Ingresar</button>
        <button style={styles.button} onClick={()=>handleSubmit(user.email, user.password)}>Registrarme</button>
        <p style={styles.p}>Ingresa con tu cuenta o crea una nueva para empezar a comprar</p>
        </div>
        </> 
        }
        <ToastContainer />
    </>
    )
    
}
const styles = {
        
    input: {
        marginTop: '5px',
        marginBottom: '5px',
        width: 310,
        height: '25px',
       
    },
    button: {
        backgroundColor: 'rgb(73, 73, 116)', 
        width: 320,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        borderRadius: 8,
        border: 'none'

    },
    h1: {
        textAlign: 'center',  
        fontWeight: '100',     
    },

    container: {        
        display: 'flex',
        flexDirection: 'column',  
        textAlign: 'center',    
        width: 350,
        marginBottom: '20px',   
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.3)',        
        boxShadow: '3px 3px 5px rgba(0, 124, 8.4, 0.2)',
        height: 330,
        justifyContent: 'space-around',
        borderRadius: 8,        

    },

    p: {
        fontSize: 12, 
        marginTop: -5,
        
        marginLeft: '10px' ,
        marginRight: '10px',
    },

    button2: {
        backgroundColor: 'rgb(73, 87, 116)', 
        width: 100,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        border: 'none',        
        boxShadow: '3px 3px 5px rgba(0, 124, 8.4, 0.2)',
        borderRadius: 8,
        alignItems: 'center',
                
    },

    center: {
        margin: '10px',
        alignSelf: 'center',
        alignItems: 'center',
    },

    container3: {
            display: 'flex',
            flexDirection: 'column'
    }
}
export default LoginPage