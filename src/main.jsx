import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './componant/AddCoffee.jsx';
import UpdataeCoffee from './componant/UpdataeCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffees'),
  },
  {
    path: 'add-coffees',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'updatae-coffees/:id',
    element: <UpdataeCoffee></UpdataeCoffee>,
    loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
