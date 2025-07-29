import { useState } from "react";

const monthLabels = [
  "JAN – FEB",
  "MAR – APR",
  "MAY – JUN",
  "JUL – AUG",
  "SEP – OCT",
  "NOV – DEC",
];

const defaultCounts = monthLabels.reduce((acc, month) => {
  acc[month] = 0;
  return acc;
}, {});

const Home = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [batchCounts, setBatchCounts] = useState(defaultCounts);

  const handleSearch = async () => {
    if (!selectedYear) return;

    try {
      const res = await fetch(`http://localhost:5000/students?year=${selectedYear}`);
      const data = await res.json();

      const newCounts = { ...defaultCounts };

      data.forEach((student) => {
        if (student.month && newCounts.hasOwnProperty(student.section)) {
          newCounts[student.month]++;
        }
      });

      setBatchCounts(newCounts);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#e0f7ff] p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <label className="text-gray-700 font-medium">Select Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="select select-bordered w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Year</option>
              {[2027, 2026, 2025, 2024, 2023, 2022, 2021].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-200"
          >
            Search
          </button>
        </div>

        {/* Batch Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {monthLabels.map((month, idx) => (
            <div
              key={idx}
              className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-2">{month}</h3>
              <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">
                {batchCounts[month]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
