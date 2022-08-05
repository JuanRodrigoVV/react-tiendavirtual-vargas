import React, {useState, useEffect, useContext} from "react";
import logo from "../../assets/Logo.png"
import CartWidget from "../../Componentes/CartWidget";
import { Link } from "react-router-dom";
import { getDocs, collection,  where } from 'firebase/firestore';
import { db, app } from "../../firebase/firebase";
import { contexto } from '../../Context/Contexto';
import {contexto2} from '../../Context/ContextoAuth'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import WishWidget from "./WishWidget";
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
    console.log(lista)
    
    
    
}) 
.catch(err=>console.log(err))


},[])

const [categorias, setCategorias] = useState([]);
/* const [usuario, setUsuario] = useState(null);
onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
        setUsuario(usuarioFirebase) 
                 
    } else {
        setUsuario(null)
    }
}) */

    /*      
    const categories = [
        {name: "Electronics", id: 0, route: "/category/electronics"},
        {name: "Jewelery", id: 1, route: "/category/jewelery"},
        {name: "Men's Clothing", id: 2, route: "/category/men's clothing"},
        {name: "Women's Clothing", id: 3, route: "/category/women's clothing"},   
    ];
 */
 



    return (
        <header style={styles.header}>
        <Link to="/"><img style={styles.img} src={logo} alt="" /></Link>
        <h1>Leatnik</h1 > 
   
       <div style={styles.links} >
          <nav >
            {categorias.map((category) => <Link key={category.id} style={styles.links} to={category.route}>{category.name}</Link> )}
        </nav>
        </div>
        <Link to="/Cart/Cart"> <CartWidget/> </Link>
        <Link to="/WishList/WishList"><WishWidget/> </Link>
        {usuario ? 
        <>
        <h1>{usuario.email}</h1> <button onClick={handleLogOut}>Logout</button>
        </> : <Link to="/login"> <h1>Login</h1></Link>}
        <Link to="/Purchases/Purchases"><h1>Consultar Compras</h1></Link>
        
        
        </header>
        
    ) 
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10', 
        aligContent: 'center',
        
        
        justifyItems: 'center',
        backgroundColor: '#494974',
        borderRadius: 5,
        
    },
     
    img: {
        width: 200,
        height: 200,
    
    },
    icono: {
        width: 50,
        height: 50,
        marginRight: 50,
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10', 
        aligContent: 'center',
        felxDirection: 'row',
        
        textDecoration: 'none',
        fontSize: 15,
        color: 'white',
    
    
    },
}

export default NavBar