import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Home from './pages/Home/Home.jsx';
import Root from './layout/Root.jsx';
import Login from './pages/Login/Login.jsx';
import Error from './pages/Error/Error.jsx';
import OurMenu from './pages/OurMenu/OurMenu.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import OurShop from './pages/OurShop/OurShop.jsx';
import Register from './pages/Register/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <PrivateRoute><OurMenu></OurMenu></PrivateRoute>
      },
      {
        path: '/shop/:category',
        element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl	 mx-auto'>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </div>

    </AuthProvider>

    <ToastContainer />

  </React.StrictMode>,
)
