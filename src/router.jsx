import React from 'react'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './components/shop.jsx';
import Home from './components/home.jsx';

const Router = () => {
    const router = createBrowserRouter([
    {
        element: <App />,
        path:"/",
        children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        ],
    }
    ]);
    return <RouterProvider router={router} />;
}

export default Router;