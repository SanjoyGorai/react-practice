import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Users from './components/Users/Users';
import Products from './components/Products/Products';
import useFetch from '../hooks/CustomHooks/useFetch';
import Laptop from './components/Laptops/Laptop';
import Mobiles from './components/Phones/Mobiles';
import { MobileContextProvider } from './context/MobileContext';

const App = () => {

  // const { isLoading, error, data: products } = useFetch('http://localhost:4001/mobiles')

  // console.log("Mobiles " + products);

  // if (isLoading) {
  //   return <h3>Loading Loaclhost Data... </h3>
  // }
  // if (error) {
  //   return <h3 className='text-red-600'> Error </h3>
  // }

  const getProdcuts = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    const data = await res.data;
    // console.log(data.products);
    // return data.products;
  }


  // const { isLoading, error, data: products } = new useQuery({
  //   queryKey: ['products'],
  //   queryFn: getProdcuts,
  //   staleTime: 10000
  // });

  // if (isLoading) {
  //   return <h3> Loading... </h3>
  // }
  // if (error) {
  //   return <h3>{error.message} </h3>
  // }

  return (
    <div>
      <MobileContextProvider>
        <Mobiles />
      <Laptop />
      </MobileContextProvider>
      {/* <Users />
      <Products /> */}
      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={'/laptop'}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {
        // products?.map((product, index) => {
        //   return (
        //     <div key={index}>
        //       <h3>{product.brandName} </h3>
        //     </div>
        //   )
        // })
      }

    </div>
  )
}

export default App