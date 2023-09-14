import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Top/>
        </header> 
        <Routes> 
        {/* <Switch> */}
          <Route path="*" Component={PageNotFound}/>
          <Route path="/" Component={Home}/>
          <Route path="/signup" Component={SignUp}/>
          <Route path='/login' Component={Login}/> 
          <Route path='/forgotpassword' Component={ForgotPassword}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/products' Component={ProductList}/>
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart/>} />
          {/* </Switch> */}
        </Routes> 

        <Footer/>
    </div>
  );
}

export default App;
