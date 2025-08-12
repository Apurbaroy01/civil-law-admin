import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Courses = () => {
    const studentData = useLoaderData();
    const [students, setStudents] = useState(studentData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const year = form.year.value;
        const month = form.month.value;

        console.log("Selected:", { year, month });

        // Filter students based on year and month
        const filtered = studentData.filter(
            (student) =>
                student.year === year && student.month === month
        );

        setStudents(filtered);
    };
    const handleDelete = (_id) => {
        console.log("delete id:", _id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://law-server-vert.vercel.app/student/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });


    }

    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 py-5 px-4 md:px-10 min-h-screen">
            <div className="max-w-5xl mx-auto text-center">

                {/* Form Section */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-xl p-6 md:p-8"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Year Dropdown */}
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Select Year
                            </label>
                            <select
                                defaultValue=""
                                name="year"
                                required
                                className="select select-bordered w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    Select Year
                                </option>
                                <option>2027</option>
                                <option>2026</option>
                                <option>2025</option>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                            </select>
                        </div>

                        {/* Batch Month Dropdown */}
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Batch Month
                            </label>
                            <select
                                defaultValue=""
                                name="month"
                                required
                                className="select select-bordered w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    Batch Month
                                </option>
                                <option>Jan-Feb</option>
                                <option>Mar-Apr</option>
                                <option>May-Jun</option>
                                <option>Jul-Aug</option>
                                <option>Sep-Oct</option>
                                <option>Nov-Dec</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="w-full md:w-1/3 flex items-end justify-center md:justify-start mt-6 md:pt-0">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 w-full md:w-auto"
                            >
                                Search Result
                            </button>
                        </div>
                    </div>
                </form>

                {/* Result Table */}
                {students.length > 0 ? (
                    <div className="overflow-x-auto mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student List</h2>
                        <table className="table w-full bg-white shadow-md rounded-lg">
                            <thead className="bg-blue-200 text-gray-700">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Year</th>
                                    <th>Batch</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={student._id || index} className="hover:bg-blue-50">
                                        <th>{index + 1}</th>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.year}</td>
                                        <td>{student.month}</td>
                                        <td>
                                            <button onClick={() => handleDelete(student._id)}
                                                className="flex items-center justify-center gap-1 px-3 py-2 text-sm bg-green-300 text-black rounded hover:bg-green-600 transition"
                                            >
                                                <MdDeleteForever className="text-lg" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-red-500 text-lg mt-12">No students found for selected year and batch.</p>
                )}
            </div>
        </div>
    );
};

export default Courses;
