import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import JobDetails from "./Components/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h2>No route found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/job/:id",
                element:<JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/JOBS/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register ></Register>
            }
        ]
    },
]);

export default router;
