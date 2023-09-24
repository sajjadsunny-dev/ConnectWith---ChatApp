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
import ResetPassword from './Pages/ResetPassword/ResetPassword'
import Home from './Pages/Home/Home'
import Error404 from './Pages/Error404/Error404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/sign-up",
    element: <Register></Register>
  },
  {
    path: "/sign-in",
    element: <Login></Login>
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "*",
    element: <Error404 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
