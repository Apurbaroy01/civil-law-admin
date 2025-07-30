import { useLoaderData } from "react-router-dom";

const StudentView = () => {
    const students=useLoaderData()
  const {name, email, address, university,year,roll,month,exam1,exam2,exam3,exam4,exam5}=students
  console.log(students)
  const student = {
    
    subjects: [
      {
        code: "",
        name: "Limitaion Act",
        ct: "Exam-1",
        qt: exam1,
      },
      {
        code: "",
        name: "Specific Reilef Act",
        ct: "Exam-2",
        qt: exam2,
      },
      {
        code: "",
        name: "The Code of Civil Procedure",
        ct: "Exam-3",
        qt: exam3,
      },
      {
        code: "",
        name: "Full model Test on Civil Law",
        ct: "Exam-4",
        qt: exam4,
      },
      {
        code: "",
        name: "",
        ct: "Total Number =",
        qt: exam5,
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10 border border-gray-200 print:border-none print:shadow-none">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">
          Civil Laws Course Report
        </h1>
        <p className="text-sm text-gray-500">
          Mid-Term Evaluation Summary
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6 bg-gray-50 p-4 rounded-md border">
        <p><span className="font-semibold">Student Name:</span> {name}</p>
        <p><span className="font-semibold">Class Roll: </span><span>{year}-</span>{roll} </p>
        <p><span className="font-semibold">University:</span> {university}</p>
        <p><span className="font-semibold">Session:</span> {month}</p>
        <p><span className="font-semibold">Home address:</span> {address}</p>
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Teacher Name:</span> SHANTO DEB ROY ARNO</p>
        <p><span className="font-semibold">Teacher Phone:</span> +8801518972493</p>
        
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-blue-50 text-gray-800">
            <tr>
              <th className="py-2 px-4 border">Subject Code</th>
              <th className="py-2 px-4 border text-left">Subject Name</th>
              <th className="py-2 px-4 border">Exam No</th>
              <th className="py-2 px-4 border">Marks</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {student.subjects.map((sub, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition">
                <td className="py-2 px-4 border">{sub.code}</td>
                <td className="py-2 px-4 border text-left">{sub.name}</td>
                <td className="py-2 px-4 border">{sub.ct}</td>
                <td className="py-2 px-4 border">{sub.qt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t pt-4 text-sm text-gray-600 text-justify">
        📌 <span className="font-medium text-black">Note:</span> If the student's performance is below expectations, consult with the assigned teacher for improvement strategies. Continuous effort and guidance can help the student perform better in future evaluations.
      </div>

      <div className="mt-8 flex justify-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
        >
          Print Result Sheet
        </button>
      </div>
    </div>
  );
};

export default StudentView;
