import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to="/login" state={location?.pathname}></Navigate>
        </div>
    );
};

export default PrivetRoute;