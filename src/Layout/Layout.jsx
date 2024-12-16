import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Layout = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;