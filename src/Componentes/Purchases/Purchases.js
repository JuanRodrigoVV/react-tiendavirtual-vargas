import React, {useContext, useEffect, useState} from 'react'
import { db } from '../../firebase/firebase';
import { contexto2 } from '../../Context/ContextoAuth';
import {collection, getDoc, getDocs, doc} from "firebase/firestore";
import { get } from 'firebase/database';
import { DockSharp } from '@mui/icons-material';


const Purchases = () => {
    
    const [direccion, SetDireccion] = useState("")
    const [total, setTotal] = useState("");
    const [productos, setProductos] = useState([])
    const [shop, setShop] = useState([]);
    const [show, setShow] = useState(false);
    const{usuario} = useContext(contexto2);
    
    
    useEffect(() => {
        const recoverPurchase = collection(db, 'ventas')
        getDocs(recoverPurchase)
        .then((doc)=>{ 
            const idList = []           
            doc.forEach((docs)=>{
                /* const newDocs = [...shop] */
                const elemen = docs.id
                idList.push(elemen)
                /* const prod = docs.data()                
                localStorage.setItem(elemen, JSON.stringify(prod.items) ) */
                console.log(elemen)
             
                
                

            })
            setShop(idList)
        })
    }, []);


   /*  
    const handleShop = (elemen) => {
        const holis = elemen
        const prod = JSON.parse(localStorage.getItem(holis));
        const newDocs = [...shop];
        newDocs.push({prod})

        setShop(newDocs);
        console.log(shop)
        
        
    }; */
  

const purchaseData = (element) => {
    const recoverData = doc(db, 'ventas', element)
    const products = [{}]
    getDoc(recoverData)    
    .then((doc)=> {
        const data = (doc.data())
        setTotal(data.total)
        SetDireccion(data.datosComprador.direccion)
        const items = (data.items)
        setProductos(items)
        setShow(true)
        console.log(direccion)
        


    })
}


  return (
    
      <div>
   { shop.map(element=>{

        return<>
        <h1>Compra Código</h1>
        <button onClick={()=>purchaseData(element)}>{element}</button></>
    })}
  {
    show === false ? <></> : <>
     <h1>{"Total $" + total}</h1> 
     <h1>{"Dirección a enviar " + direccion.direccion}</h1>
      {
         productos.map(product => { return <>
            <h2 style={styles.h2} key={product.id}>{product.title}{/* "id"{product.id} */}"precio"{product.price}"cantidad"{product.cantidad}</h2>
            <img style={styles.imagen2}  src={product.image}alt=""  />
            
   </>})
         
    }
    </>
  }

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
export default Purchases