import {Navigate, createBrowserRouter, } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import Interest from '../pages/Interest'
import Awards from '../pages/Awards'
import BaseLayout from '../layouts/BaseLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'interest',
        element: <Interest />
      },
      {
        path: 'awards',
        element: <Awards />
      },
      {
        path: "*",
        element: <Navigate to="/" />
      }
    ]
  },
])


export default router;