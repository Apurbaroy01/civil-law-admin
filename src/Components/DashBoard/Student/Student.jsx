// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Student = () => {
    const studentData = useLoaderData();
    // const [student, setStudent]=useState(studentData)
    // console.log(studentData)


    return (
        <div className="overflow-x-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-700">
                    🧑‍🎓 Student All Details
                </h2>
                <label className="relative w-full sm:w-64">
                    <input
                        type="search"
                        placeholder="Search by name or roll"
                        className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <svg
                        className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                </label>
            </div>
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