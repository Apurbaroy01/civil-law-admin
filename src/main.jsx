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
import Student from './Components/DashBoard/Student/Student';
import StudentView from './Components/DashBoard/Student/StudentView';
import Result from './Components/Result/Result';
import Courses from './Components/Coueses/Courses';
import Home from './Components/Home/Home';
import StudentEdit from './Components/DashBoard/Student/StudentEdit';

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
    children: [
      {
        path: "student",
        element: <Student></Student>,
        loader: () => fetch('http://localhost:5000/student')
      },
      {
        path: "student/:id",
        element: <StudentView></StudentView>,
        loader: ({ params }) => fetch(`http://localhost:5000/student/${params.id}`)
      },
      {
        path: "result",
        element: <Result></Result>,
        loader:()=> fetch('http://localhost:5000/student')
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader:()=> fetch('http://localhost:5000/student')
      },
      {
        path: "home",
        element: <Home></Home>,
        
      },
      {
        path: "studentEdit/:id",
        element: <StudentEdit></StudentEdit>,
        loader: ({ params }) => fetch(`http://localhost:5000/student/${params.id}`)
        
      },
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
