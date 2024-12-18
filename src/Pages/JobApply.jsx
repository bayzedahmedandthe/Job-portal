import { useParams } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const id = useParams();
    const { user } = useAuth();
    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkDinURL = form.linkdin.value;
        const githubURL = form.github.value;
        const resumeURL = form.linkdin.value;
        const applicationInformation = {
            job_id: id,
            applicant_email: user.email,
            linkDinURL,
            githubURL, resumeURL
        }

        fetch("http://localhost:5000/job_applications", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applicationInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "success your apply",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="hero my-12">
            <div className="card bg-base-100 w-7/12  shrink-0 shadow-2xl">
                <form onSubmit={handleApply} className="card-body">
                    <div className="form-control">
                        <h2 className="flex justify-center font-semibold text-lg py-4 border-b">Apply now</h2>
                        <label className="label">
                            <span className="label-text">Linkdin URL</span>
                        </label>
                        <input type="url" name="linkdin" placeholder="Linkdin URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" name="github" placeholder="github URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name="resume" placeholder="resume URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;