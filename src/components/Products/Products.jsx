import React from 'react'
import useFetch from '../../../hooks/CustomHooks/useFetch'
import { Link } from 'react-router-dom';

const Products = () => {

    const url = 'https://api.escuelajs.co/api/v1/products';
    const { isLoading, error, data:products } = useFetch(url);
    console.log('Products::',products);
    if (isLoading) {
        return <h2>Loading Products... </h2>
    }
    if (error) {
        return <h3> Error {error.message} </h3>
    }

    return (
        <div> 
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Proucts</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.images}
                                        alt={product.title}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={''}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product?.category?.name}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products