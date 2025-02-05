import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})
const UseAxios = () => {
    const navigate = useNavigate();
    const  {signOutUser,} = useAuth();
    useEffect(() => {
        axiosInstance.interceptors.response.use( Response => {
            return Response
        }, error => {
            console.log("error caught in interceptor", error);
            if(error.status === 401 || error.status === 403){
                signOutUser()
                .then(() => {
                    console.log("logged out user");
                    navigate("/login")
                })
                .catch(error => console.log(error))
            }
            return Promise.reject(error);
        })
    }, [])
 return axiosInstance;
};

export default UseAxios;