/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-spinner justify-center loading-lg"></span>
        
    }

    if(user) {
       return children
    }
    return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;