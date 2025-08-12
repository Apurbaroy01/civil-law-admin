import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const StudentEdit = () => {
    const loadingdata = useLoaderData()
    // console.log(loadingdata)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const year = form.year.value;
        const month = form.month.value;
        const email = form.email.value;
        const university = form.university.value;
        const whatappNumber = form.whatappNumber.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;

        const data = { year, month, name, email,university, whatappNumber, phoneNumber, address,}
        console.log("updata data",data)


        fetch(`https://law-server-vert.vercel.app/student/${loadingdata._id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
                Swal.fire({
                    title: "Submitted Successfully!",
                    icon: "success",
                    confirmButtonColor: "#3085d6"
                });
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Information Form</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Select Year</label>
                            <input type="text" name="year" defaultValue={loadingdata.year}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Batch Month</label>
                            <input type="text" name="month" defaultValue={loadingdata.month}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                        <input type="text" name="name" defaultValue={loadingdata.name}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                        <input type="email" name="email" defaultValue={loadingdata.email}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">University Name</label>
                        <input type="text" name="university" defaultValue={loadingdata.university}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">WhatsApp Number</label>
                            <input type="text" name="whatappNumber" defaultValue={loadingdata.whatappNumber}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                            <input type="text" name="phoneNumber" defaultValue={loadingdata.phoneNumber}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Home Address</label>
                        <input type="text" name="address" defaultValue={loadingdata.address}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 font-semibold"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StudentEdit;
