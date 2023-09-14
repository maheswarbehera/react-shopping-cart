import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs';
import Loading from '../Loading'; 

function ProductList() {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
   

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

    return (
      <>
  <div className="mx-auto max-w-7xl px-4">
  <Breadcrumb parent='Home' child='Products'/></div>
  <div className="mx-auto grid w-full max-w-7xl products-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
  {products && products.length>0 && products.map((product,id) => (
    <div key={id} className="rounded-md border">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      /></Link>
      <div className="p-4">
        <h1 className="inline-flex products-center text-lg font-semibold">      <Link to={`/product/${product.id}`}>{product.title}</Link></h1>
        <p className="text-gray-500 text-lg font-semibold">${product.price.toFixed(2)} <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
              {product.price.toFixed(2) + 20}
              </span></p>
        <p>{'Rating : '+product.rating.rate} of 5</p>
        <p>{'In Stock : '+product.rating.count}</p>
        {/* <p className="mt-3 text-sm text-gray-600"> {product.description} </p> */}
        {/* <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Sneakers
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Nike
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Airmax
          </span>
        </div> 
        <div className="mt-3 flex products-center space-x-2">
          <span className="block text-sm font-semibold">Colors : </span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
        </div>
        <div className="mt-5 flex products-center space-x-2">
          <span className="block text-sm font-semibold">Size : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            8 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            9 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            10 UK
          </span>
        </div>*/}
        <button
          type="button" 
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