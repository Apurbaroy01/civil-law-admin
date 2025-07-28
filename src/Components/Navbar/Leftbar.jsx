import { NavLink } from 'react-router-dom';
import { FaUserGraduate, FaBookOpen, FaHome } from "react-icons/fa";

const Leftbar = () => {
    return (
        <div className="w-64 h-screen bg-white border-r p-4 shadow-sm sticky top-0 hidden md:block">
            <h2 className="text-xl font-bold mb-6 text-center text-indigo-600">Dashboard</h2>
            <ul className="space-y-2">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-2 text-white bg-indigo-500 px-4 py-2 rounded"
                                : "flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                        }
                    >
                        <FaHome /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/student"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-2 text-white bg-indigo-500 px-4 py-2 rounded"
                                : "flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                        }
                    >
                        <FaUserGraduate /> Student
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-2 text-white bg-indigo-500 px-4 py-2 rounded"
                                : "flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                        }
                    >
                        <FaBookOpen /> Courses
                    </NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default Leftbar;
