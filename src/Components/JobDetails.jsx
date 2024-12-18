import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const singleJobData = useLoaderData();
    const { title, location, _id, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, company_logo } = singleJobData;
    console.log(singleJobData);
    return (
        <div>
            {title}
        </div>
    );
};

export default JobDetails;