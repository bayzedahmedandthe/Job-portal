import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";
import Swal from "sweetalert2";



const myApplications = () => {
    const { user } = useAuth();
    const [jobs, setjobs] = useState([]);
    const axiosSecure = UseAxios();
    useEffect(() => {
        // axios.get(`http://localhost:5000/job_applications?email=${user.email}`, {
        //     withCredentials: true
        // })
        // .then(res => {
        //    setjobs(res.data);
        // })

        // axiosSecure.get(`/job_applications?email=${user.email}`)
        // .then(res => setjobs(res.data))
    axiosSecure.get(`/job_applications?email=${user.email}`)
    .then(res => setjobs(res.data))
        
    }, [user.email])
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/job_applications/${_id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                setjobs((previous) => previous.filter(item => item._id !== _id))
            })	
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map(job =>
                            <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {/* Zemlak, Daniel and Leannon
                                    <br /> */}
                                    <span className="badge badge-ghost badge-sm">{job.category}</span>
                                </td>
                                <td>{job.jobType}</td>
                                <th>
                                    <button onClick={() => handleDelete(job._id)} className="btn btn-error btn-xs">X</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>


            </table>
        </div>
    );
};

export default myApplications;