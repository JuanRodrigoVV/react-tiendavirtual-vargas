import React from "react";
import logo from "../../assets/Logo.png"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
/* import "./header.css" */

const Header = () => {
    return (
        <header style={styles.header}>
        <img style={styles.img} src={logo} alt="" />
        <h1>Leatnik Comunicación</h1 > 
        <a style={styles.a} href="">NUESTRO TRABAJO</a> 
        <a style={styles.a} href="">PAQUETES</a> 
        <a style={styles.a} href="">CONTACTO</a> 
        <LocalGroceryStoreIcon style={styles.icono}/>
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
    a: {
       
        textDecoration: 'none',
        fontSize: 15,
        color: 'white',
    
    
    },
}

export default Header 