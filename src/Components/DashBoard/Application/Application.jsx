import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Application = () => {
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/admination')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApplications(data)
            })
            .catch(err => console.error("Failed to fetch applications:", err));
    }, []);
    return (
        <div className="overflow-x-auto p-6 bg-base-200 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Applications</h2>

            <table className="table w-full">
                {/* head */}
                <thead className="bg-primary text-white">
                    <tr>
                        <th className="rounded-tl-lg">No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th className="rounded-tr-lg text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}
                    {
                        applications.map((application, index) =>
                            <tr key={index} className="hover:bg-base-300 transition-colors duration-200">

                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        
                                        <div>
                                            <div className="font-bold">{application.name}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {application.email}
                                    <br />
                                    <span className="badge badge-outline badge-sm mt-1">
                                        {application.date}
                                    </span>
                                </td>
                                <td>
                                    <span className="badge badge-warning gap-1">
                                        ⏳ Pending
                                    </span>
                                </td>
                                <td className="text-center">
                                    <Link to={`/dashboard/admitiondetails/${application._id}`} className="btn btn-primary btn-sm">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Application;
