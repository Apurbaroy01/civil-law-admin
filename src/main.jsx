import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import Dashboard from './Components/DashBoard/Dashboard';
import PrivateRoute from './Components/PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/login"}></Navigate>,
      },
    ]

  },
  {
    path: "/login",
    element: <Login></Login>
  },

  {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ),
}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
