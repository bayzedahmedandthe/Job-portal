import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import auth from "../Firebase.init";
import axios from "axios";

const Login = () => {
const location = useLocation();
const from = location.state || "/"
    const navigate = useNavigate();
    const { signInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                toast.success("Login successfull")
                navigate(from)

                // const user = {email: email};
                // axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
                // .then(res => {
                //     console.log(res.data);
                // })
            //     const user = {email: email}
            //     axios.post("http://localhost:5000/jwt", email,{withCredentials: true})
            //     .then(res => console.log(res.data))
            })
            .catch(error => {
                toast.error("Invalid creadential")
                console.log(error);
            })
    }
    const provider = new GoogleAuthProvider();
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                toast.success("Login successfull");
                navigate(from)
                console.log(result.user);
            })
            .catch(error => {
                toast.error("Invalid creadential");
                console.log(error);
            })
    }
    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
    }

return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="form-control mt-6 ">
                    <button onClick={handleLoginWithGoogle} className="btn btn-primary px-20">Login with google</button>
                </div>
                <div className="divider">Or continue with</div>
                <div className="text-center lg:text-left">
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-bold pl-8 pt-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;