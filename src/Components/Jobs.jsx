import React, { useEffect, useState } from 'react';
import JobCard from "./SingleJob"
const jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/JOBS")
            .then(res => res.json())
            .then(data => setJobs(data))
    },
        [])

    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 sm: pt-20'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default jobs;