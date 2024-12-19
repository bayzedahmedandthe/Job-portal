import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";


const MyPostedJobs = () => {
    const { user } = useAuth()
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/JOBS?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email]
    )
    console.log(jobs);
    return (
        <div className="bg-blue-50 rounded-lg mt-12">
            <h2 className="text-center text-xl font-semibold pt-8">My Posted Jobs</h2>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-lg">NO.</th>
                            <th className="text-lg">Company</th>
                            <th className="text-lg ">Title</th>
                            <th className="text-lg">Deadline</th>
                            <th className="text-lg">jobType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) =>
                                <tr key={job.index}>
                                    <th>{index + 1}</th>
                                    <td>{job.company}</td>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.jobType}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;