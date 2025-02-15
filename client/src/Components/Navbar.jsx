import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow " style={{background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><img src="./src/assets/istockphoto-1322072075-612x612.jpg" alt="Logo" style={{ height: '45px', marginLeft: '5px' }} /></a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                           <Link to="/" className="nav-link text-white">Home</Link> 
                        </li>
                        <li className="nav-item">
                        <Link to="/cart" className="nav-link text-white">Cart</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link text-white" >ContactUs</Link>
                           
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link text-white">LogIn</Link>  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
    