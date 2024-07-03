import * as React from 'react';
import Home from './pages/Home';
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout'
import ProductDetailPage from './pages/ProductDetailPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);



function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    {/* <Home></Home> */}

    </div>
  );
}

export default App;
