import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/Signup'
import EachProduct from './screens/EachProduct'
import Cart from './screens/Cart'
import ContactUs from './Components/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/eachproduct/:id' element={<EachProduct/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
