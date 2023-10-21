import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeText from './Components/HomeText.jsx';

import UpdateCard from './Components/updateCard.jsx';
import DetailsPage from './Components/DetailsPage.jsx';
import UpdateCardSingle from './Components/UpdateCardSingle.jsx';
import MyCard from './Components/MyCard.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import ErrorPage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/homeText",
    element: <HomeText></HomeText>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/details/:id",
    element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: ({params}) => fetch(`https://khan-m5rxu3e0t-khans-projects-8df7d1cb.vercel.app/brands/${params.id}`)

  },
  {
    path: "/mycart",
    element: <MyCard></MyCard>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/updatecard",
    element: <UpdateCard></UpdateCard>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path: "/updatecard/:id",
    element: <UpdateCardSingle></UpdateCardSingle>,
    errorElement:<ErrorPage></ErrorPage>
    // loader: ({params}) => fetch(`https://khan-m5rxu3e0t-khans-projects-8df7d1cb.vercel.app/brands/${params.id}`)
  },
  {
    path: "signup",
    element: <SignUp></SignUp>
  },
  {
    path: "signin",
    element: <SignIn></SignIn>
  },
  // {
  //   path: "error/:message", 
  //   element: <ErrorPage />,
  // },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
