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
import { store } from './store'
import { Provider } from 'react-redux'
import Messages from './Pages/Messages/Messages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/messages",
    element: <Messages />
  },
  {
    path: "/sign-up",
    element: <Register />
  },
  {
    path: "/sign-in",
    element: <Login />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
