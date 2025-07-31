import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const monthLabels = [
    "JAN – FEB",
    "MAR – APR",
    "MAY – JUN",
    "JUL – AUG",
    "SEP – OCT",
    "NOV – DEC",
];

const getEmptyCounts = () => {
    const counts = {};
    monthLabels.forEach((label) => {
        counts[label] = 0;
    });
    return counts;
};

const normalizeMonth = (monthRaw) => {
    if (!monthRaw) return "";
    const cleaned = monthRaw.toUpperCase().replace(/\s/g, "").replace(/–|--/g, "-");
    const map = {
        "JAN-FEB": "JAN – FEB",
        "MAR-APR": "MAR – APR",
        "MAY-JUN": "MAY – JUN",
        "JUL-AUG": "JUL – AUG",
        "SEP-OCT": "SEP – OCT",
        "NOV-DEC": "NOV – DEC",
    };
    return map[cleaned] || "";
};

const Home = () => {
    const allStudents = useLoaderData();
    const [selectedYear, setSelectedYear] = useState("");
    const [counts, setCounts] = useState(getEmptyCounts());
    const [total, setTotal] = useState(0);

    const handleSearch = () => {
        if (!selectedYear) return;

        const filtered = allStudents.filter(
            (student) => String(student.year) === selectedYear
        );

        const newCounts = getEmptyCounts();

        filtered.forEach((student) => {
            const monthNormalized = normalizeMonth(student.month);
            if (monthLabels.includes(monthNormalized)) {
                newCounts[monthNormalized]++;
            }
        });

        setCounts(newCounts);
        setTotal(filtered.length);
    };

    const chartData = monthLabels.map((label) => ({
        month: label,
        count: counts[label],
    }));

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#e0f7ff] p-6">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                {/* Title */}
                <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
                    Student Enrollment Dashboard
                </h1>

                {/* Year Select & Search */}
                {/* Year Select & Search */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <label className="text-gray-700 font-medium whitespace-nowrap">Select Year:</label>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm
                 text-gray-700 bg-white
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                 transition duration-300"
                        >
                            <option value="" disabled>
                                Select Year
                            </option>
                            <option>2027</option>
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>

                        </select>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700
                            text-white font-semibold px-6 py-2 rounded-md shadow-md
                            transition duration-300 ease-in-out
                            focus:outline-none focus:ring-4 focus:ring-blue-400"
                    >
                        Search
                    </button>
                </div>


                {/* Total Students */}
                <div className="mb-6 text-lg text-gray-700 font-semibold">
                    Total Students: <span className="text-blue-600">{total}</span>
                </div>

                {/* Month-wise Count Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {monthLabels.map((label) => (
                        <div
                            key={label}
                            className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-bold text-blue-700 mb-2">{label}</h3>
                            <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">
                                {counts[label]}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bar Chart Section */}
                <div className="mt-12 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                        Monthly Student Count (Bar Chart)
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Home;
