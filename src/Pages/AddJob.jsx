import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";


const AddJob = () => {
    const navigate = useNavigate()
    const {user} = useAuth();
    const handleSubmit = e => {
       
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const initialData = Object.fromEntries(formData.entries());
        // const {min, max, currency, ...newJob} = initialData;
        // newJob.salaryRange = {min, max, currency};
        // console.log(newJob);
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split("\n");
        newJob.resposibilites = newJob.resposibilites.split("\n");
        // console.log(newJob)
        fetch("http://localhost:5000/JOBS", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                navigate("/mypostedjobs")
                // e.target.reset()
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Submit successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (

        <div>
            <h2 className="text-xl font-semibold text-center pt-8">Add a Job</h2>
            <form
                onSubmit={handleSubmit}
                className="card-body">
                {/* Title input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                </div>
                {/* Location input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="location" name="location" className="input input-bordered" required />
                </div>
                {/* job-type input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job-type</span>
                    </label>
                    <select name="jobType" className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pic a job-type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                    </select>
                </div>
                {/* Category input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name="job-category" className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pic a job-category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary range */}
                <div className="grid md:grid-cols-3 items-end gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="min" placeholder="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="max" placeholder="max" className="input input-bordered" required />
                    </div>
                    <select name="currency" className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select currency</option>
                        <option>REAL</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EURO</option>
                    </select>
                </div>
                {/* company */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text" placeholder="company" name="company" className="input input-bordered" required />
                </div>
                {/* description */}
                <label className="label">
                    <span className="label-text">Job description</span>
                </label>
                <textarea
                    placeholder="job description"
                    name="description"
                    className="textarea textarea-bordered textarea-sm w-full "></textarea>
                {/* job requirements */}
                <div>
                    <label className="label">
                        <span className="label-text">Job requerments</span>
                    </label>
                    <textarea
                        placeholder="Write each requirements in a new line"
                        name="requirements"
                        className="textarea textarea-bordered textarea-sm w-full "></textarea>
                </div>
                {/* job responsibilitey */}
                <div>
                    <label className="label">
                        <span className="label-text">Job responsibility</span>
                    </label>
                    <textarea
                        placeholder="write each respnsibility in a new line"
                        name="resposibilites"
                        className="textarea textarea-bordered textarea-sm w-full "></textarea>
                </div>
                {/* hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" name="hr_email" defaultValue={user?.email}  placeholder="HR email" className="input input-bordered" required />
                </div>
                {/* hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" defaultValue={user?.displayName}  placeholder="HR name" className="input input-bordered" required />
                </div>
                {/* Company logo*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company-logo-URL</span>
                    </label>
                    <input type="url" name="company_logo" placeholder="Company-logo-URL" className="input input-bordered" required />
                </div>
                {/* application deadline*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application-deadline</span>
                    </label>
                    <input type="text" name="applicationDeadline" placeholder="application deadline" className="input input-bordered" required />
                </div>
                {/* submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;