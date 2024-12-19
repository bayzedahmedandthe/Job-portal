import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import SingleJob from "../Components/SingleJob"


const AllJobs = () => {
    const jobsData = useLoaderData();
    console.log(jobsData);


    return (
        
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 pt-20">
        {
            jobsData.map((job, index) => <SingleJob key={index} job={job}></SingleJob>)
        }
      </div>
    );
};

export default AllJobs;