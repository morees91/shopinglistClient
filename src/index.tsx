import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './MainPage/MainPage';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Additem from './AddItem/Additem';
import Items from './Items/item';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/AddItem',
        element: <Additem />
      },
      {
        index: true,
        path: '/ShopingList',
        element: <Items />
      }
    ]
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

