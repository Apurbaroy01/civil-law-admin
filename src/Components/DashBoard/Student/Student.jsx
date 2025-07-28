// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Student = () => {
    const studentData = useLoaderData();
    // const [student, setStudent]=useState(studentData)
    // console.log(studentData)


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentData.map((data, index) =>
                            <tr key={data._id} className="bg-white hover:bg-gray-100 transition-all duration-300 border-b">
                                <th className="px-4 py-3 text-left text-sm text-gray-700">{index + 1}</th>
                                <td className="px-4 py-3 text-sm text-gray-600">{data.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{data.roll}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{data.email}</td>
                                <td className="px-4 py-3">
                                    <div className="flex justify-end space-x-2">
                                        <Link to={`/dashboard/student/${data._id}`}>
                                            <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                View
                                            </button>

                                        </Link>
                                        <button className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition">
                                            Edit
                                        </button>
                                        <button className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition">
                                            Mark
                                        </button>
                                        <button className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition">
                                            Del
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Student;