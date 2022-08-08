import React, { createContext, useState, useContext, useEffect} from "react";
import { contexto2 } from '../Context/ContextoAuth';
import {doc, updateDoc} from "firebase/firestore";
import { db } from '../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [wishes, setWishes] = useState([]);
    const {usuario, wishList, wishRestore2, handleRestore, control } = useContext(contexto2);   
    
/* {if (wishes.length === 0) {

} else {
    setWishes(wishRestore2);
}

}; */


useEffect (()=>{
     
    
        var storage = JSON.parse(localStorage.getItem('itemsWish'))
        /* console.log */
       if (storage === null) {
            console.log("ESTO 1 ES" + storage)
            console.log(control)
            setWishes([])
            
        } else {

           
         
            setWishes(storage) 
            toasty("Se ha recuperado tu Wishlist")
            console.log(wishes)

        
        } 
        
            },[control]);

useEffect(() => {
  var storage2 = JSON.parse(localStorage.getItem('cart'))
  if (storage2 === null) {

  } else {
    setProductos(storage2)
  }

}, [])

         
  const agregarProductos = (data, qty) => {
       let newProductos;
       let product = productos.find(product => product.id === data.id);
       if (product) {
        product.cantidad += qty;
        newProductos = [...productos];
        setProductos(newProductos);
        var storage = localStorage.setItem('cart', JSON.stringify(newProductos))
        


       }else  {
   
        newProductos = [...productos];        
        newProductos.push ({...data, cantidad: qty});
        setProductos (newProductos);
        console.log(productos);
        var storage = localStorage.setItem('cart', JSON.stringify(newProductos))
       }

    
        
    }; 
    const eliminarProductos = (data) => {
        const prod = productos.filter(product=> product.id !== data.id);
        setProductos(prod)
        var storage = localStorage.setItem('cart', JSON.stringify(prod))
       
        
    };
    const buscarProducto = (data) => {
        let prod = productos.find(product => product.id === data.id) ? true : false;
        if (prod == true){toasty("Este producto se encuentra en tu carrito")} else if (prod == false) {toasty("No se ha encontrado el producto en tu carrito")}
    };
  
    

   
    const limpiarCarro = () => {
        setProductos([]);
        var storage = localStorage.removeItem('cart')
        toasty("Su carro se ha vaciado")
    };


    const calcularTotal = () => {
        return productos.reduce(
            (acum, actual) => acum + actual.price * actual.cantidad,
            0
        );
    };
    
    const calcularCantidad = () => {
        return productos.reduce(
            (acum, actual) => acum + actual.cantidad,
            0
        );
    };
    

    const handleWish = (data) => {
        let newWishes;
        if (usuario === null){

        }else
        
        {let product = wishes.find(elemen => elemen.data.id === data.id)
        if (product) {
            
            toasty("Ya se encuentra añadido a tu Wishlist")
        } else {
            newWishes = [...wishes]
            newWishes.push({data})
            setWishes(newWishes)
        }}
        handleWishlist(newWishes);
        }
    



 /*    const handleWish = (data) => {
        
        let newWishes;
        var storage = JSON.parse(localStorage.getItem('itemsWish'))         
        let product = storage.find(elemen => elemen.id === data.id);
        console.log(product)
        if (product) {
         alert("ya se encuentra añadido")
        
 
        }else  {
        var storage = JSON.parse(localStorage.getItem('itemsWish')) 
         newWishes = [storage];        
         /* newWishes.push ({data}); 
         setWishes(newWishes);
         console.log(wishes);
         
         handleWishlist(newWishes);
        } 
        
        
        
        
    }; 
    */
    const toasty = (msj) => {
        toast(msj , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }


     
    const handleWishlist = (newWishes) => {

        if(usuario === null){ 
           toasty("Crea una cuenta para agregar productos a tu Wishlist")}
        else {

            const updateCollection = doc(db, "wishlist", wishList);
        
        
        updateDoc(updateCollection,{items: newWishes });
        var storage = localStorage.setItem('itemsWish', JSON.stringify(newWishes))
        toasty("Se ha agregado este producto a tu Wishlist")
            

        }

       

    }
    const eliminarWishlist = (data) => {
        const delWish = (wishes.filter(product=> product.data.id !== data));
        setWishes(delWish)
        /* console.log(delWishs) */        
        const updateCollection = doc(db, "wishlist", wishList);          
        updateDoc(updateCollection,{items: delWish}); 
        /* localStorage.removeItem('itemsWish'); */
        var storage = localStorage.setItem('itemsWish', JSON.stringify(delWish))
        
        
    };  
  
  

    return (
        <Provider value={{productos,agregarProductos,eliminarProductos, buscarProducto, limpiarCarro, calcularTotal, calcularCantidad, handleWish, setWishes, wishes, eliminarWishlist}}>
        {children}
        <ToastContainer />
        </Provider>
        
    );


}

export default CustomProvider