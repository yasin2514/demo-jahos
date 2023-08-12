import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration';
import Main from './Pages/Main/Main';
import Provider from './AuthProvider/Provider';
import Private from './Pages/Private/Private';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import Profile from './Pages/Profile/Profile';
import Users from './Pages/Users/Users';
import Settings from './Pages/Settings/Settings';
import AddProfile from './Pages/ProfileManagement/AddProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
    ]
  },
  {
    path: "dashboard",
    element: <Private><DashboardLayout></DashboardLayout></Private>,
    children: [
      {
        path: "admin",
        element: <Private><Dashboard></Dashboard></Private>
      },
      {
        path: "profile",
        element: <Private><Dashboard></Dashboard></Private>
      },
      {
        path: "users",
        element: <Private><Dashboard></Dashboard></Private>
      },
      {
        path: "settings",
        element: <Private><Dashboard></Dashboard></Private>
      },
      {
        path: "addProfile",
        element: <Private><AddProfile></AddProfile></Private>
      },
      {
        path: "addProfile",
        element: <Private><AddProfile></AddProfile></Private>
      },

    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

