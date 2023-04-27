import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Course from './component/Course/Course';
import FAQ from './component/FAQ/FAQ';
import Home from './component/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/course",
        element: <Course></Course>
      },
      {
        path: 'faq',
        element: <FAQ></FAQ>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
