import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../Components/Context';

export default function EachProduct() {
  const { id } = useParams(); 
  const { headphones, smartphones, laptops, smartwatches,addtocart,removefromcart,cartitems,setcartItems} = useContext(ProductContext);
  const allProducts = [...headphones, ...smartphones, ...laptops, ...smartwatches];

  const product = allProducts.find((item) => item.id === Number(id));


  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} className="img-fluid" style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <button className="btn btn-primary" onClick={()=>addtocart(product.id)}>Add to cart</button>
    </div>
  );
}
