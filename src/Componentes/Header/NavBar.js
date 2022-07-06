import React from "react";
import logo from "../../assets/Logo.png"
import CartWidget from "../../Componentes/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    
    
const categories = [
    {name: "Electronics", id: 0, route: "/category/electronics"},
    {name: "Jewelery", id: 1, route: "/category/jewelery"},
    {name: "Men's Clothing", id: 2, route: "/category/men's clothing"},
    {name: "Women's Clothing", id: 3, route: "/category/women's clothing"},   
  ];

    
    return (
        <header style={styles.header}>
        <Link to="/"><img style={styles.img} src={logo} alt="" /></Link>
        <h1>Leatnik</h1 > 
   
       <div style={styles.links} >
          <nav >
            {categories.map((category) => <Link key={category.id} style={styles.links} to={category.route}>{category.name}</Link> )}
        </nav>
        </div>
        <Link to="/Cart/Cart"> <CartWidget/> </Link>
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