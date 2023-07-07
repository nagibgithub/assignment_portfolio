import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App';
import MainLayout from './layout/MainLayout';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/Contact/Contact';
import AboutMySelf from './pages/AboutMySelf/AboutMySelf';
import ThemeProvider from './contexts/ThemeProvider';
import 'atropos/css'
import 'swiper/css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/resume", element: <App></App> },
      { path: "/projects", element: <Projects></Projects> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/about", element: <AboutMySelf></AboutMySelf> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
