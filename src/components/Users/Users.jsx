import React from 'react'
import useFetch from '../../../hooks/CustomHooks/useFetch'
import { Link } from 'react-router-dom';

const Users = () => {

    // const url = 'https://dummyjson.com/products/search?q=phone';
    // const url = 'https://api.escuelajs.co/api/v1/products'
    const url = 'https://dummyapi.online/api/movies'

    const { isLoading, error, data: movies } = useFetch(url);

    if (isLoading) {
        return <h3>Loading Data...</h3>
    }
    if (error) {
        return <h3 className='text-red-600'>Error {error} </h3>
    }


    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Movies</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {movies?.map((movie) => (
                            <div key={movie.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={movie.image}
                                        alt={movie.movie}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={''}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {movie.rating}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{movie.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{movie.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Users