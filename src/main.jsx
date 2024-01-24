import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Phones from './components/Phones/Phones.jsx'
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query'


const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/phone',
        element: <Phones />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
