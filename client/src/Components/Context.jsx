import React, { createContext, useState ,useEffect} from 'react';
export const ProductContext = createContext();
import {headphones,smartphones,laptops,smartwatches} from '../assets/data';


export const ProductProvider = ({ children }) => {

    const[cartitems,setcartItems]=useState([]);

    const addtocart=(id)=>{
        if(!cartitems.includes(id)){
            setcartItems([...cartitems,id]);
        }
    }

    const removefromcart=(id)=>{
        setcartItems(cartitems.filter((itemid)=>itemid!==id));
    }

    useEffect(() => {
      console.log(cartitems)
    }, [cartitems]);
    

    const contextvalue={headphones,smartphones,laptops,smartwatches,addtocart,removefromcart,cartitems,setcartItems};

    return (
        <ProductContext.Provider value={ contextvalue }>
            {children}
        </ProductContext.Provider>
    );
};
