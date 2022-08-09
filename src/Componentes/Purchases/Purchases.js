import React, {useContext, useEffect, useState} from 'react'
import { db } from '../../firebase/firebase';
import { contexto2 } from '../../Context/ContextoAuth';
import {collection, getDoc, getDocs, doc} from "firebase/firestore";



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
               
                const elemen = docs.id
                const data = docs.data()
                const email = data.datosComprador.email.email;
                if (usuario.email === email){

                    idList.push(elemen)
                    
                } else {}
               
             
                
                

            })
            setShop(idList)
        })
    } else {
        
        
        
        
        const recoverPurchase = collection(db, 'ventas')
        getDocs(recoverPurchase)
        .then((doc)=>{ 
            const idList = []           
            doc.forEach((docs)=>{
     
                const elemen = docs.id
                const data = docs.data()
                const email = data.datosComprador.email.email;
                if (email2 === email){

                    idList.push(elemen)
                    
                } else {}
            
                
                

            })
            setShop(idList)
            setShow(false)
        })

    }}, [control, usuario]);



  

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
    
<div style={styles.gridContainer}>
        {usuario ? <><h1></h1></> : 
        <>
            <div style={styles.findContainer} >
                   <input  style={styles.input} name="email" type="text" placeholder="Email" onChange={ev => setEmail2(ev.target.value)}></input>
                   <button style={styles.button} onClick={controlChange}>Buscar Por email</button>
             </div>
        </> 
        }

    <div style={styles.purchasecontainer2}>

        {shop.map(element=>{        
                return<>
                 <div style={styles.purchasecontainer}>            
                 <h1 style={styles.h1}>Consultar Compra Código</h1>
                 <button style={styles.button} onClick={()=>purchaseData(element)}>{element}</button>
                 </div>
                 </>
             })
    }
    </div>
    
  {show === false ? <></> :
        <>
            <div style={styles.showcontainer}>
                <h1 style={styles.h3}>{"Total $" + total}</h1> 
                <h1 style={styles.h3}>{"Dirección a enviar: " + direccion.direccion}</h1>
                 {productos.map(product => { return <>
                     <div style={styles.container2}>
                        <h2 style={styles.h2} key={product.id}>{product.title}</h2>
                        <h2 style={styles.h1}>$ {product.price}</h2>
                        <h2 style={styles.h1}>Cantidad {product.cantidad}</h2>
                        <img style={styles.imagen2}  src={product.image}alt=""  />
                     </div>                
                    </>})}    
            </div>

        </>
    }
 

</div>
  )
}
const styles = {
    button: {        
        backgroundColor: 'rgb(73, 73, 116)', 
        width: 210,
        alignSelf: 'center',
        height: '35px',
        color: 'white',
        borderRadius: 8,
        border: 'none',
        width: 350,
        margin: 10,           
    },

    h1: {
        
  
        fontSize: 15,
        fontWeight: 200,
        

    },

    h3: {
        fontSize: 25,
        fontWeight: 200,
        
    },

    h2: {
        fontWeight: 200,
        fontSize: 12,
        marginTop: 25,
        alignSelf: 'center',
        textAlign: 'center',
        textJustify: 'center',
       
    },

    imagen2: {    
        height: 130,
        width: 130,
        margin: 10,        

    },

    container2:{        
        width: 300,
        height: 310,
        borderRadius: 8,
        border: '1px solid rgba(0, 0, 0, 0.3)',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        aligContent: 'center',        
        justifyItems: 'center',
        margin: '10px',    
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },

    purchasecontainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 490,
        justifyContent: 'center',
        textAlign: 'center',
        
    },

    purchasecontainer2: {
        display: 'flex',
        flexDirection: 'column',
        width: 590,
        justifyContent: 'center',
        textAlign: 'center',
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: '2',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 70,
       
    },

    showcontainer: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        alignItems: 'center',
        width: '590px',
        gridRowStart: '2',
        gridColumnStart: '2',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        marginTop: 70,
               
    },

    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '10% 100%',
        justifyItems: 'center',
        alignItems: 'start'
              
    },

    findContainer: {
        display: 'flex',
        flexDirection: 'column',
        gridRowStart: '1',
        gridColumnStart: '1',
        gridColumnEnd: '3',
             
    },

    input: {
        marginTop: '5px',
        marginBottom: '5px',
        width: 380,
        height: '25px',
        alignSelf: 'center'
    }
}

export default Purchases