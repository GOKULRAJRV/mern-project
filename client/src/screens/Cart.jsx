import React, { useContext } from 'react'
import { ProductContext } from '../Components/Context';


export default function Cart() {
    const { headphones, smartphones, laptops, smartwatches, removefromcart, cartitems } = useContext(ProductContext);
    const all = [...headphones, ...smartphones, ...laptops, ...smartwatches];

    const citems = all.filter((item) => cartitems.includes(item.id));

    return (
        <div className="container">
            <div className="row">
                {citems.length>0?

                    citems.map((item) => (
                        <div className='col-12 col-md-3'>
                        <div key={`${item.id}`} className="item-card card m-2 rounded-5" style={{ width: "310px" }}>
                            <img src={item.imageUrl} alt={item.name} className="card-img-top rounded-5" style={{ height: "200px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p>Rs <strong>{item.price.toFixed(2)}</strong></p>
                                <div className="text-center">
                                    <button className="btn btn-primary w-75" onClick={()=>removefromcart(item.id)}>Remove from cart</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))
                    :
                    <h4 className='text-center'>Your cart is empty</h4>
                }
            </div>
        </div>

    )
}
