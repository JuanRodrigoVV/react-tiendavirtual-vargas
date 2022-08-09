import React, {useState, useEffect, useContext} from "react";
import logo from "../../assets/Logo.png"
import CartWidget from "../../Componentes/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { getDocs, collection} from 'firebase/firestore';
import { db, app } from "../../firebase/firebase";
import {contexto2} from '../../Context/ContextoAuth'
import {getAuth} from 'firebase/auth'
import WishWidget from "../WishWidget/WishWidget";
const auth = getAuth(app);


const NavBar = () => {
    const {usuario, handleLogOut} = useContext(contexto2);



   useEffect(()=>{
    const categoriesCollection = collection(db,'categorias');    
    getDocs(categoriesCollection)
    .then(result => {
        const lista = result.docs.map(results=> {
            return {
                id: results.id,
                ...results.data()
            
            } 
       
})
    setCategorias(lista);
 
}) 
.catch(err=>console.log(err))

},[])


const [categorias, setCategorias] = useState([]);

    return (
        <header >
            <div style={styles.header}>

            
            <div style={styles.Item1}>
        <Link to="/">
            <img style={styles.img} src={logo} alt="" />

            </Link>
            </div>
        <h1 style={styles.Item2}>Leatnik Shopping</h1 > 
   <div style={styles.Item3}>

          <nav >
       <div style={styles.links} >
            {categorias.map((category) => <Link key={category.id} style={styles.links} to={category.route}>{category.name}</Link> )}
        </div>
        </nav>
   </div>
        <div style={styles.Item4}>
        <Link style={styles.linkIcon}  to="/Cart/Cart"> <CartWidget/> </Link>
        </div>        
        <div style={styles.Item5}>
        <Link style={styles.linkIcon} to="/WishList/WishList"><WishWidget /> </Link>
        </div>
        {usuario ? 
        <>
        <div style={styles.Item6}>
        <h1 style={styles.hLink}>{usuario.email}</h1>
        </div>
        <div style={styles.Item8}>
         <button style={styles.button} onClick={handleLogOut}>Logout</button>
        </div>
        </> : <div style={styles.Item6}>

            <Link style={styles.h1} to="/login"> <h1 style={styles.hLink}>Login</h1></Link>
        </div>
            }
            <div style={styles.Item7}>
        <Link style={styles.h1} to="/Purchases/Purchases"><h1 style={styles.hLink} >Consultar Compras</h1></Link>

            </div>
        
        </div>
        </header>
        
    ) 
}

const styles = {
    header: {
        display: 'grid',
        gridTemplateColumns: '100px 100px 200px 450px',
        gridTemplateRows: '80px 80px',
        alignItems: 'center',
        justifyItems: 'center',
       
        backgroundColor: '#494974',
        borderRadius: 5,
        border: '1px solid rgba(0, 0, 0, 0.3)',
        
        boxShadow: '0px 0px 5px rgba(0, 0, 8.4, 0.2)',
        
    },
     
    img: {
        width: 200,
        height: 200,
        width: '100%',
        
    
    },
    icono: {
        width: 50,
        height: 50,
        marginRight: 50,
    },
    links: {
        textDecoration: 'none',
        color: 'white',
        margin: 5,   
        width: 345,    
        fontSize: 20,    
        display: 'flex',
        flexDirection: 'row',    
        color: 'white',
        fontWeight: '100',
 
    
    
    },

    Item1: {
        gridColumnStart: '1',
        gridColumnEnd: '3',    
        gridRowStart: '1',
        gridRowEnd: '3',

    },
    Item2: {
        gridColumnStart: '3',
        gridColumnEnd: '3',    
        gridRowStart: '1',
        gridRowEnd: '3',
        alignSelf: 'center',
        display: 'flex',
        fontSize: 20,
        color: 'white',
        fontWeight: '200',

    },
    Item3: {
        gridColumnStart: '4',
        gridColumnEnd: '4',    
        gridRowStart: '1',
        gridRowEnd: '4',

    },

    Item4: {
        gridColumnStart: '6',
        gridColumnEnd: '6',    
        gridRowStart: '1',
        gridRowEnd: '3',

    },
    Item5: {
        gridColumnStart: '7',
        gridColumnEnd: '7',    
        gridRowStart: '1',
        gridRowEnd: '3',

    },
    Item6: {
        gridColumnStart: '8',
        gridColumnEnd: '8',    
        gridRowStart: '1',
        gridRowEnd: '1',
        fontSize: 10,
        textDecoration: 'none',

    },
    Item6: {
        gridColumnStart: '8',
        gridColumnEnd: '8',    
        gridRowStart: '1',
        gridRowEnd: '1',
        fontSize: 10,
        textDecoration: 'none',

    },
    Item8: {
        gridColumnStart: '8',
        gridColumnEnd: '8',    
        gridRowStart: '1',
        gridRowEnd: '3',
        fontSize: 10,
        textDecoration: 'none',

    },
   
    Item7: {
        gridColumnStart: '8',
        gridColumnEnd: '8',    
        gridRowStart: '2',
        gridRowEnd: '2',
        fontSize: 8,
        fontWeight: '200',
        
        

    },
    h1: {
        color: 'white',
        textDecoration: 'none',
        marginRight: '50px',
        
    },
    hLink: {
        fontWeight: '200',
        color: 'white',
        fontSize: 15,
    },
    button: {
        backgroundColor: 'rgb(73, 87, 116)', 
        width: 100,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        border: 'none',        
        boxShadow: '3px 3px 5px rgba(0, 124, 8.4, 0.2)',
        borderRadius: 8,
        
        
        
            
           
        },
        linkIcon: {
            textDecoration: 'none',
        }
}

export default NavBar