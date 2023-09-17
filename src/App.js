import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ForgotPassword from './component/auth/ForgotPassword';
import Login from './component/auth/Login';
import SignUp from './component/auth/Signup';
import Dashboard from './component/auth/Dashboard';
import Home from './component/Home';
import Footer from './component/Footer';
import PageNotFound from './component/404';
import About from './component/About';
import Contact from './component/Contact';
import Top from './component/Top';
import ProductList from './component/Product/ProductList';
import ProductDetail from './component/Product/ProductDetail'; 
import Cart from './component/Cart/Cart';  
import { useState } from 'react';
import Checkout from './component/Cart/Checkout';

function App() {
 
	const [cart , setCart] = useState([]);

	// const addToCart = (item)=>{

  //   console.log(item);
	// 	setCart([...cart, item]);
  //   console.log(cart);
	// }
  const navigate = useNavigate()

  const addToCart = (product, redirect)=> {
    console.log(product);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExists = cart.find(item => item.id === product.id) 

    if(isProductExists) {
      const updateCart = cart.map(item => {
        if(item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item;
      })
      localStorage.setItem('cart', JSON.stringify(updateCart))
    }
    else{
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
    }
    alert( product.title +" Added To Cart Successfully")
    if(redirect) {
      navigate('/cart')
    }
    setCart([...cart, product]);
}
	
  
  return (
    
    <div className="App">
      <header className="App-header">
        <Top size={cart.length}/>
        </header> 
        <Routes> 
        {/* <Switch> */}
        <Route path="/" element={<Home />} />
        <Route path="*" Component={PageNotFound}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList addToCart={addToCart}/>}  />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart  />}  />
        <Route path="/checkout" element={<Checkout  />}  />
          {/* </Switch> */}
        </Routes>  

        <Footer/>
       
    </div>
  );
}

export default App;
