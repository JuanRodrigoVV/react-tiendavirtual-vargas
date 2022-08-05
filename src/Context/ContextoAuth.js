import React, { createContext, useContext, useEffect, useState} from "react";
import  {app}  from "../firebase/firebase";
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {collection, addDoc, serverTimestamp, doc, updateDoc, getDoc} from "firebase/firestore";
import { db } from '../firebase/firebase';
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

const auth = getAuth(app);





export const contexto2 = createContext();
const {Provider, usuario} = contexto2;



const AuthCustomProvider = ({ children }) => {

    

    
  
    const [lista, setLista] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState(null);
    const [wishList, setwishList] = useState("");
    const [wishRestore2, setWishRestore2] = useState([]);
    const [control, setControl] = useState(false);
    
  


    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuario(usuarioFirebase) 
                     
        } else {
            setUsuario(null)
        }
    })

    
    
    const handleWishList = (email, id) => {
        const newWish = [...lista];
        newWish.push({email: email, id: id});  
        setLista(newWish);
        /* console.log(lista) */
        localStorage.setItem('userList', JSON.stringify(newWish))

    }
        

useEffect (()=>{
    var storage = JSON.parse(localStorage.getItem('userList'))
    if (storage === null) {
    
   
    } else {
       
       setLista(storage)
    
    }
    
        },[]);
    




    const handleSubmit = async (email, password) => {
        try {await
        app.auth()        
        .createUserWithEmailAndPassword(email, password);
        alert("usuario creado");
        setError('');
        
        const wishListCollection = collection(db,'wishlist');
        
        addDoc(wishListCollection, {
            
            mail: email,
                         
            date: serverTimestamp(),
            
             
            
        })
        .then((result)=>{
            setwishList(result.id);
            var storage = localStorage.setItem('wishlist', result.id)

          /*   const updateCollection2 = doc(db, "wishlist", result.id);
            updateDoc(updateCollection2,{id: result.id}); */
            handleWishList(email, result.id)
             
           
            
            
            })
     

    }
        catch (error) {
            if (error.code === "auth/invalid-email"){
                setError('Correo Inválido')
            } if (error.code === "auth/weak-password") {
                setError("El password debe tener al menos 6 caracteres")
            }  if (error.code === "auth/email-already-in-use") {
                setError("El usuario ya se encuentra registrado")
            }
            
 
        };

    
      
       
    } 
    
    useEffect (()=>{
        var wishlistrestore = (localStorage.getItem('wishlist'));
       
        if (wishlistrestore === null) {
           setwishList("")
            
        } else {
           /* alert(wishlistrestore) */
           setwishList(wishlistrestore)
        
        }
        
            },[]);
        





    /* {console.log(lista)} */
    
    const handleLogIn = async (email, password) => {
        try { await 
            
            app.auth().signInWithEmailAndPassword(email,password);
            handleWishListId(email);
            
            
            alert("ingresaste")
        } catch (error){
            if (error.code === "auth/wrong-password"){
                setError('Password Incorrecto')
            } if (error.code === "auth/user-not-found") {
                setError("Usuario no encontrado")
            }  
            
        }
        
        
    };
    const handleWishListId = (email) => {
        var storage = JSON.parse(localStorage.getItem('userList'));
        if (storage === null) {

        } else {
            setLista(storage)
            alert("hola")
        } 
        let prod = lista.find(item => item.email === email)
        setwishList(prod.id);
        localStorage.setItem('wishlist', prod.id);
        handleWishRestore(prod.id);  
        
    }
    const handleWishRestore = (id) => {
        const wishRestore = doc(db,'wishlist', id);
        getDoc(wishRestore)
        .then((doc)=> {
           
            const newWishesRestore = doc.data();
            const wishesRestore = (newWishesRestore.items)
            setWishRestore2(wishesRestore)            
         
            handleStorage(wishesRestore);   
            
           
        })
    };
    console.log(wishList)
    const handleStorage = (wishesRestore) => {
            localStorage.setItem('itemsWish', JSON.stringify(wishesRestore))
            var storage = JSON.parse(localStorage.getItem('itemsWish'));
            console.log(storage)
            setControl(!control)
    };

 

    const handleLogOut = async () => {
        
        await signOut(auth);
        
        localStorage.removeItem('itemsWish');
        setControl(!control)
       
    };

    





    return (
        <Provider value={{usuario, handleSubmit, error, handleLogIn, handleLogOut, wishList, handleWishRestore, wishRestore2, control }}>
        {children}
        </Provider>
    );








}

export default AuthCustomProvider