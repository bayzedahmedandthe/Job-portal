import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";


const MyPostedJobs = () => {
    const {user} = useAuth()
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/JOBS?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [user.email]
)
console.log(jobs);
    return (
        <div>
            {jobs.length}
        </div>
    );
};

export default MyPostedJobs;