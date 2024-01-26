import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        ; (async () => {
            setError(null);
            setIsLoading(true);
            try {
                const response = await axios.get(url);
                const data = await response.data;
                setData(data)
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                setIsLoading(false);
                setError(true);
                console.log("An error occurred while fetching data");
            }
        })()

        return () => {

        }

    }, [url])

    return { isLoading, error, data };
}

export default useFetch