import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from './Context';


export default function DisplayProduct() {
    const { headphones, smartphones, laptops, smartwatches } = useContext(ProductContext);

    return (
        <div className="display-menu">
            <div className="menu-container w-100" id="headset">
                <h3 className='text'>Headphones</h3>
                <div className='scroll-container d-flex flex-wrap justify-content-start'>
                    {headphones.map((item) => (
                        <div className="product-wrapper" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-container w-100 mb-5" id="smartphone">
                <h3 className='text'>Smartphones</h3>
                <div className='scroll-container d-flex flex-wrap justify-content-start'>
                    {smartphones.map((item) => (
                        <div className="product-wrapper" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-container w-100 mb-5" id="laptops">
                <h3 className='text'>Laptops</h3>
                <div className='scroll-container d-flex flex-wrap justify-content-start'>
                    {laptops.map((item) => (
                        <div className="product-wrapper" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-container w-100 mb-5" id="smartwatch">
                <h3 className='text'>Smart Watches</h3>
                <div className='scroll-container d-flex flex-wrap justify-content-start'>
                    {smartwatches.map((item) => (
                        <div className="product-wrapper" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
