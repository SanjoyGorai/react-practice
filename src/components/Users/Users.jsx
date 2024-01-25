import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Users = () => {

    const [data] = useFetch("https://dummyjson.com/products");

    return (
        <div>Users
            {
                data &&
                data.products.map((product) => {
                    return(
                        <h3 key={product.id}>{product.title} </h3>
                    ) 
                })

            }
        </div>
    )
}

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(url);
            const data = await response.data;
            setData(data);
            console.log(data.products);
        })();

    }, []);

    return [data]
}

export default Users