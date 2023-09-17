import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs';
import Loading from '../Loading'; 

function ProductList({addToCart}) {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
   
    // const navigate = useNavigate()

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          setProducts(response.data);
          // console.log(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }, []);
    
    if (loading) {
      return <Loading/>
    }


  //   const addToCart = (product, redirect)=> {
  //     console.log(product);

  //     const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //     const isProductExists = cart.find(item => item.id === product.id) 

  //     if(isProductExists) {
  //       const updateCart = cart.map(item => {
  //         if(item.id === product.id) {
  //           return {
  //             ...item,
  //             quantity: item.quantity + 1
  //           }
  //         }
  //         return item;
  //       })
  //       localStorage.setItem('cart', JSON.stringify(updateCart))
  //     }
  //     else{
  //       localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
  //     }

  //     if(redirect) {
  //       navigate('/cart')
  //     }
  // }



    return (
      <>
  <div className="mx-auto max-w-7xl px-4">
  <Breadcrumb parent='Home' child='Products'/>
  </div>
  <div className="text-center py-5">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">Featured Products</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">New In Pre-Loved</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
  <div className="mx-auto grid w-full max-w-7xl products-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
  {products && products.length>0 && products.map((product,id) => (
    <div key={id} className="rounded-md border">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      /></Link>
      <div className="p-4">
        <p className='font-semibold uppercase text-red-500'>{product.category}</p>
        <h1 className="inline-flex products-center text-lg font-semibold">    
          <Link to={`/product/${product.id}`}>{product.title}</Link></h1>
        <p className="text-gray-500 text-lg font-semibold">${product.price.toFixed(2)} <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
              {(product.price + 20).toFixed(2)}
              </span></p>
        {/* <p>{'Rating : '+product.rating.rate} of 5</p> */}
        
        <button
          type="button" 
          onClick={()=>addToCart(product)}
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
        {/* <Link to={`/product/${product.id}`}>View</Link> */}
      </div>
    </div>
  ))}
  </div>
  
  </>
    );
  };
  
  export default ProductList;