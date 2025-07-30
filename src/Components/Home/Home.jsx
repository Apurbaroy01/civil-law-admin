const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#e0f7ff] p-6">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                {/* Top Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <label className="text-gray-700 font-medium">Select Year:</label>
                        <select
                            defaultValue=""
                            name="year"
                            required
                            className="select select-bordered w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-200">
                        Search
                    </button>
                </div>
                <div>
                  <h2>all srudent length count:</h2>
                </div>

                {/* Batch Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">JAN – FEB</h3>
                        <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">100</div>
                    </div>
                    <div className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">MAR – APR</h3>
                        <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">120</div>
                    </div>
                    <div className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">MAY – JUN</h3>
                        <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">110</div>
                    </div>
                    <div className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">JUL – AUG</h3>
                        <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">130</div>
                    </div>
                    <div className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">SEP – OCT</h3>
                        <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">90</div>
                    </div>
                    <div className="border border-blue-400 rounded-xl p-6 text-center bg-blue-50 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">NOV – DEC</h3>
                        <div className="text-2xl font-extrabold text-blue-900 border-t pt-2">95</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
