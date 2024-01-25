import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Phones from './components/Phones/Phones.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Laptop from './components/Laptop/Laptop.jsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/phone',
        element: <Phones />
    },
    {
        path: '/laptop',
        element: <Laptop />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
)
