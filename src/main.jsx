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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  
  {
    path: "/homeText",
    element: <HomeText></HomeText>,
  },
  {
    path: "/details/:id",
    element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
  },
  {
    path: "/mycart",
    element: <MyCard></MyCard>
  },
  {
    path: "/updatecard",
    element: <UpdateCard></UpdateCard>
  },
  {
    path: "/updatecard/:id",
    element: <UpdateCardSingle></UpdateCardSingle>,
    loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
  },
  {
    path: "signup",
    element: <SignUp></SignUp>
  },
  {
    path: "signin",
    element: <SignIn></SignIn>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
