
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Result = () => {
    const [successMap, setSuccessMap] = useState({}); // track success per student
    const studentDta = useLoaderData();
    // console.log(studentDta);

    // Submit handler placeholder
    const handleSubmit = (e, student) => {
        e.preventDefault();
        const form = e.target;
        const exam1 = form.exam1.value;
        const exam2 = form.exam2.value;
        const exam3 = form.exam3.value;
        const exam4 = form.exam4.value;
        const exam5 = form.exam5.value;
        const id = student._id || student.roll;
        const result = { exam1, exam2, exam3, exam4, exam5, id }
        console.log('Submitted result:', result);


        fetch(`http://localhost:5000/student/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0 || data.acknowledged) {
                    setSuccessMap(prev => ({ ...prev, [id]: true }));
                    setTimeout(() => {
                        setSuccessMap(prev => ({ ...prev, [id]: false }));
                    }, 3000); // success message disappears after 3s
                }

            })


    };

    return (
        <div className="p-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 py-5 px-4 md:px-10 min-h-screen">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-700">
                    📋 Student Exam Result Entry
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
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                <table className="min-w-full table-auto text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-gray-600 ">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Roll</th>
                            <th className="px-4 py-2">Exam-1</th>
                            <th className="px-4 py-2">Exam-2</th>
                            <th className="px-4 py-2">Exam-3</th>
                            <th className="px-4 py-2">Exam-4</th>
                            <th className="px-4 py-2">Exam-5</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentDta.map((data, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2 font-medium">{data.name}</td>
                                    <td className="px-4 py-2">{data.roll}</td>
                                    <td className="px-4 py-2" colSpan={6}>
                                        <form onSubmit={(e) => handleSubmit(e, data)} className="grid grid-cols-2 sm:grid-cols-6 gap-2 w-full">
                                            <input name="exam1" type="text" placeholder='Exam-1' defaultValue={data.exam1}
                                                className="input input-bordered input-sm w-full" />
                                            <input name="exam2" type="text" placeholder='Exam-2' defaultValue={data.exam2}
                                                className="input input-bordered input-sm w-full" />
                                            <input name="exam3" type="text" placeholder='Exam-3' defaultValue={data.exam3}
                                                className="input input-bordered input-sm w-full" />
                                            <input name="exam4" type="text" placeholder='Exam-4' defaultValue={data.exam4}
                                                className="input input-bordered input-sm w-full" />
                                            <input name="exam5" type="text" placeholder='total' defaultValue={data.exam5}
                                                className="input input-bordered input-sm w-full" />

                                            {successMap[data._id] ? <span className="text-green-600 font-medium text-sm">✅ Done</span>
                                                : <button type="submit" className="btn btn-sm btn-primary w-full">Save</button>
                                            }
                                        </form>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Result;
