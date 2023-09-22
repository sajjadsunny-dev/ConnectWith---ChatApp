import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import './index.css'
import './firebaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <Register></Register>
  },
  {
    path: "/sign-in",
    element: <Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
