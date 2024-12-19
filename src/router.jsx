import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import JobDetails from "./Components/JobDetails";
import PrivetRoute from "./Components/PrivetRoute";
import JobApply from "./Pages/JobApply";
import UserApplications from "./Pages/UserApplications";
import AddJob from "./Pages/AddJob";
import MyPostedJobs from "./Pages/MyPostedJobs";
import AllJobs from "./Pages/AllJobs";

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
                element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/JOBS/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register ></Register>
            },
            {
                path: "/jobApply/:id",
                element: <PrivetRoute><JobApply></JobApply></PrivetRoute>
            },
            {
                path: "/myapplication", 
                element: <PrivetRoute><UserApplications></UserApplications></PrivetRoute>
            },
            {
                path: "/addjob",
                element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
            },
            {
                path: "/mypostedjobs",
                element: <PrivetRoute><MyPostedJobs></MyPostedJobs></PrivetRoute>
            },
            {
                path: "/alljob",
                element: <AllJobs></AllJobs>,
                loader: () => fetch("http://localhost:5000/alljobs")
            }
        ]
    },
]);

export default router;
