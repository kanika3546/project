import * as React from 'react';
import Home from './pages/Home';
import './App.css';

import Protected from './features/auth/components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuthAsync, selectLoggedInUser, selectUserChecked } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout'
import ProductDetailPage from './pages/ProductDetailPage';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserProfile from './features/user/components/UserProfile';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import UserOrders from './features/user/components/UserOrders';
import Client  from './pages/Client';
// import Status from './pages/Status'


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { fetchLoggedInUser } from './features/user/userAPI';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import NftsPage from './pages/NftsPage';


const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
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
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/order-success/:id',
    element: (
      <Protected>
      <OrderSuccessPage></OrderSuccessPage>{' '}
    </Protected>
    ),
  },
  {
    path: '/orders',
    element: (
      <Protected>
      <UserOrdersPage></UserOrdersPage>{' '}
    </Protected>
   
    ),
  },
  
  {
    path: '/profile',
    element: (
      <Protected>
      <UserProfilePage></UserProfilePage>{' '}
    </Protected>
 
    ),
  },
  {
    path: '/nftmarket',
    element: (
 
        <NftsPage />
 
    ),
  },
  {
    path: '/phone-pe/',
    element: (
 
        <Client />
 
    ),
  },
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
]);



function App() {
 
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);


  useEffect(()=>{
    dispatch(checkAuthAsync())
  },[dispatch])

  useEffect(()=>{
    
    if(user){
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchLoggedInUserAsync());
    }
  },[dispatch, user])
 
  return (

    
    <div className="App">
   {userChecked &&   <Provider template={AlertTemplate} {...options}>
          <RouterProvider router={router} />
        </Provider>} 


    </div>
  );
}

export default App;
