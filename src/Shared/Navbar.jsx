import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import auth from "../Firebase.init";
import footerLogo from "../assets/Icons/icons8-job-application-100.png"

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser(auth)
            .then(() => {
                toast.success("sign out successfull");

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <Link to="/"><li><a>Home</a></li></Link>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/"><img className="w-16 h-16" src={footerLogo} alt="" /></Link>
                <h2 className="text-xl font-semibold">Job Portal</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <div className="flex items-center gap-2">
                                <img className="h-12 w-12 rounded-xl" src={user.photoURL} alt="" />
                                <p>{user.name}</p>
                                <button onClick={handleSignOut} className="btn btn-primary">Sign out</button></div>
                        </div> :
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-4 lg:mr-6"><Link to="/login">Login</Link></button>
                            <button className="btn btn-primary"><Link to="register">Register</Link></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;