import React, {useContext, useEffect, useState} from 'react'
import { db } from '../../firebase/firebase';
import { contexto2 } from '../../Context/ContextoAuth';
import {collection, getDoc, getDocs, doc} from "firebase/firestore";
import { get } from 'firebase/database';
import { DockSharp } from '@mui/icons-material';


const Purchases = () => {
    
    const [userEMail, SetUserEmail] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [direccion, SetDireccion] = useState("")
    const [total, setTotal] = useState("");
    const [productos, setProductos] = useState([])
    const [shop, setShop] = useState([]);
    const [show, setShow] = useState(false);
    const{usuario} = useContext(contexto2);
    const [control, setControl] = useState(false);
    
    



    
    useEffect(() => { if (usuario != null){
        const recoverPurchase = collection(db, 'ventas')
        getDocs(recoverPurchase)
        .then((doc)=>{ 
            const idList = []           
            doc.forEach((docs)=>{
                /* const newDocs = [...shop] */
                const elemen = docs.id
                const data = docs.data()
                const email = data.datosComprador.email.email;
                if (usuario.email === email){

                    idList.push(elemen)
                    console.log(elemen)
                } else {}
                /* const prod = docs.data()                
                localStorage.setItem(elemen, JSON.stringify(prod.items) ) */
             
                
                

            })
            setShop(idList)
        })
    } else {
        
        
        
        
        const recoverPurchase = collection(db, 'ventas')
        getDocs(recoverPurchase)
        .then((doc)=>{ 
            const idList = []           
            doc.forEach((docs)=>{
                /* const newDocs = [...shop] */
                const elemen = docs.id
                const data = docs.data()
                const email = data.datosComprador.email.email;
                if (email2 === email){

                    idList.push(elemen)
                    console.log(elemen)
                } else {}
                /* const prod = docs.data()                
                localStorage.setItem(elemen, JSON.stringify(prod.items) ) */
             
                
                

            })
            setShop(idList)
            setShow(false)
        })

    }}, [control, usuario]);


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
    if (usuario != null){

  
    SetUserEmail(usuario.email)
    const recoverData = doc(db, 'ventas', element)
    const products = [{}]
    getDoc(recoverData)    
    .then((doc)=> {
        const data = (doc.data())
        setTotal(data.total)
        SetDireccion(data.datosComprador.direccion)
        setEmail(data.datosComprador.email)
        const items = (data.items)
        if (email.email === usuario.email){

            console.log(direccion)
            console.log(email.email)
            console.log(usuario.email)
        } else {}
        
        
        
        setProductos(items)
        setShow(true)
    })  } else {
    
    SetUserEmail(email2)
    const recoverData = doc(db, 'ventas', element)
    const products = [{}]
    getDoc(recoverData)   
    .then((doc)=> {
        const data = (doc.data())
        setTotal(data.total)
        SetDireccion(data.datosComprador.direccion)
        setEmail(email2)
        const items = (data.items)
        if (email.email === email2){

            console.log(direccion)
            console.log(email.email)
            console.log(usuario.email)
        } else {}
        
        setProductos(items)
        
        
        setShow(true)
    })  
        



    }
}

const controlChange = () => {
    setControl(!control)
}


  return (
    
      <div>
        {usuario ? <><h1></h1></> : <>
      
            <input style={styles.button} name="email" type="text" placeholder="Email" onChange={ev => setEmail2(ev.target.value)}></input>
            <button onClick={controlChange}>Buscar Por email</button>
        </> }
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