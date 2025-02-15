import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ item }) {
    return (
            <div key={`${item.id}`} className="item-card card m-2 -5" style={{width:"310px"}}>
                <Link to={`/eachproduct/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={item.imageUrl} alt={item.name} className="card-img-top -5" style={{height:"350px"}} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p>Rs <strong>{item.price.toFixed(2)}</strong></p>
                    <div className="text-center">
                    <button className="btn btn-primary w-75">view more</button>
                    </div>
                </div>
                </Link>
        </div>
    )
}
