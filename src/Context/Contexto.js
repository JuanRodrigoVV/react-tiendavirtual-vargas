import React, { createContext, useState} from "react";


export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

/*  const agregarProductos = (data, qty) => {
        console.log("asdasd");
        const newProductos = productos.filter(prod => prod.id !== data.id);
        newProductos.push ({...data, cantidad: qty});
        setProductos (newProductos);
        console.log(productos);
        
    };  */
  const agregarProductos = (data, qty) => {
       let newProductos;
       let product = productos.find(product => product.id === data.id);
       if (product) {
        product.cantidad += qty;
        newProductos = [...productos]
        


       }else  {
       /*  product = {...data, cantidad: qty};
        newProductos = [...productos, product]; */
        const newProductos = productos.filter(prod => prod.id !== data.id);
        newProductos.push ({...data, cantidad: qty});
        setProductos (newProductos);
        console.log(productos);
       }

    
        
    }; 
    const eliminarProductos = (data) => {
        setProductos(productos.filter(product=> product.id !== data.id));
        
    };
    const buscarProducto = (data) => {
        let prod = productos.find(product => product.id === data.id) ? true : false;
        if (prod == true){console.log("se encontró")} else if (prod == false) {console.log("no se encontro")}
    };
  
    

   
    const limpiarCarro = () => {
        setProductos([]);
    }

  

    return (
        <Provider value={{productos,agregarProductos,eliminarProductos, buscarProducto, limpiarCarro}}>
        {children}
        </Provider>
    );


}

export default CustomProvider