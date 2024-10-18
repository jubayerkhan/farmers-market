import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import UploadProduct from './components/UploadProduct/UploadProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <ProductDetail></ProductDetail>
      },
      {
        path: '/upload',
        element: <UploadProduct></UploadProduct>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
