import * as React from 'react';
import Home from './pages/Home';
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

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
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    {/* <Home></Home> */}
   {/* <LoginPage></LoginPage>  */}
   
   {/* <SignupPage></SignupPage> */}
    </div>
  );
}

export default App;
