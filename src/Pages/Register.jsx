import Lottie from "lottie-react";
import lotieeData from "../assets/Lotti/Register_Lottie.json"
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            return toast.error("password must be 6 character")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if(!passwordRegex.test(password)){
            toast.error("password must be 6 character and one uppercase one lowercase")
        }
        createUser(email,password)
        .then(result => {
            navigate("/")
            toast.success("Registation successfull")
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={lotieeData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-bold pl-8 pt-4">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="password" placeholder="email" name="email" className="input input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;