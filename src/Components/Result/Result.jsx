import Lottie from 'lottie-react';
import nodata from '../../assets/nodata/No-Data.json';
// Updated Result.jsx with filtering like Courses.jsx

import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Result = () => {
    const originalStudentData = useLoaderData();
    const [students, setStudents] = useState(originalStudentData);
    const [successMap, setSuccessMap] = useState({});

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const year = form.year.value;
        const month = form.month.value;

        const filtered = originalStudentData.filter(
            (student) => student.year === year && student.month === month
        );
        setStudents(filtered);
    };

    const handleSubmit = (e, student) => {
        e.preventDefault();
        const form = e.target;
        const exam1 = form.exam1.value;
        const exam2 = form.exam2.value;
        const exam3 = form.exam3.value;
        const exam4 = form.exam4.value;
        const exam5 = form.exam5.value;
        const id = student._id || student.roll;
        const result = { exam1, exam2, exam3, exam4, exam5, id };

        fetch(`http://localhost:5000/student/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0 || data.acknowledged) {
                    setSuccessMap(prev => ({ ...prev, [id]: true }));
                    setTimeout(() => {
                        setSuccessMap(prev => ({ ...prev, [id]: false }));
                    }, 3000);
                }
            });
    };

    return (
        <div className="p-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 py-5 px-4 md:px-10 min-h-screen">
            <form onSubmit={handleSearchSubmit} className="bg-white shadow-xl rounded-xl p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/3">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Select Year</label>
                        <select name="year" required className="select select-bordered w-full">
                            <option value="" disabled>Select Year</option>
                            <option>2027</option>
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Batch Month</label>
                        <select name="month" required className="select select-bordered w-full">
                            <option value="" disabled>Batch Month</option>
                            <option>Jan-Feb</option>
                            <option>Mar-Apr</option>
                            <option>May-Jun</option>
                            <option>Jul-Aug</option>
                            <option>Sep-Oct</option>
                            <option>Nov-Dec</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3 flex items-end justify-center md:justify-start mt-6 md:pt-0">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full md:w-auto">Search Result</button>
                    </div>
                </div>
            </form>

            {students.length > 0 ? (
                <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                    <table className="min-w-full table-auto text-sm text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Roll</th>
                                <th className="px-4 py-2">Exam-1</th>
                                <th className="px-4 py-2">Exam-2</th>
                                <th className="px-4 py-2">Exam-3</th>
                                <th className="px-4 py-2">Exam-4</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((data, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2 font-medium">{data.name}</td>
                                    <td className="px-4 py-2">{data.roll}</td>
                                    <td className="px-4 py-2" colSpan={6}>
                                        <form onSubmit={(e) => handleSubmit(e, data)} className="grid grid-cols-2 sm:grid-cols-6 gap-2 w-full">
                                            <input name="exam1" type="text" placeholder='Exam-1' defaultValue={data.exam1} className="input input-bordered input-sm w-full" />
                                            <input name="exam2" type="text" placeholder='Exam-2' defaultValue={data.exam2} className="input input-bordered input-sm w-full" />
                                            <input name="exam3" type="text" placeholder='Exam-3' defaultValue={data.exam3} className="input input-bordered input-sm w-full" />
                                            <input name="exam4" type="text" placeholder='Exam-4' defaultValue={data.exam4} className="input input-bordered input-sm w-full" />
                                            <input name="exam5" type="text" placeholder='Total' defaultValue={data.exam5} className="input input-bordered input-sm w-full" />

                                            {successMap[data._id] ? (
                                                <span className="text-green-600 font-medium text-sm">✅ Done</span>
                                            ) : (
                                                <button type="submit" className="btn btn-sm btn-primary w-full">Save</button>
                                            )}
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <>
                    {/* <p className="text-red-500 text-lg mt-6">No students found for selected year and batch.</p> */}
                    <div className="flex items-center justify-center">
                        <Lottie animationData={nodata} className="w-80" />
                    </div>

                </>

            )}
        </div>
    );
};

export default Result;
