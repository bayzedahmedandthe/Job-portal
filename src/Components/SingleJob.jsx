import Aos from "aos";
import { useEffect } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const jobCard = ({ job }) => {
    useEffect(() => {
        Aos.init()
    })
    // console.log(job);
    const { title, location, _id, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, company_logo } = job;
    return (
        <div className="flex justify-center">
            <div data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="card card-compact w-96 bg-gray-50">
                <div className="flex items-center gap-3">
                    <figure>
                        <img className="h-20 w-20" src={company_logo} alt="" />
                    </figure>
                    <div>
                        <h3 className="text-lg font-semibold">{company}</h3>
                        <p className="text-gray-500">{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="text-lg">{title}</h4>
                    <div className="flex items-center">
                        <p className="text-gray-500">{jobType}</p>
                        <p className="text-gray-500 flex items-center gap-1"><span className="font-bold"><IoTimeOutline /></span>{applicationDeadline}</p>
                    </div>
                    <p className="py-3">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            requirements.map((skil, idx) => <p className="border rounded-lg p-2 hover:bg-blue-700 hover:text-white shadow-xl" key={idx}>{skil}</p>)
                        }
                    </div>


                    <div className="flex gap-1 items-center py-4">
                        <span className="font-semibold">Salary:</span> <span><AiOutlineDollarCircle /></span> {salaryRange.min} - {salaryRange.max}
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/job/${_id}`}><button className="btn btn-primary hover:bg-slate-900 hover:shadow-2xl">Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default jobCard;