import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
    const { Logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        Logout()
            .then(() => {
                console.log('SignOut Successfully');
                navigate("/login");
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div className="navbar bg-white text-gray-800 shadow-md px-4 lg:px-10 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><Link >Home</Link></li>
                        <li><Link >Courses</Link></li>
                        <li><Link >Contact</Link></li>
                    </ul>
                </div>
                <Link to="/dashboard" className="btn btn-ghost normal-case text-xl font-bold text-indigo-600">
                    Civil Laws
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <div className="navbar-end space-x-3">
                {user ? (
                    <>
                        <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
                            <FiUser className="text-lg" />
                            <span>{user.email}</span>
                        </div>
                        <button onClick={handleLogOut} className="btn btn-sm btn-outline btn-error flex items-center gap-1">
                            <FaSignOutAlt /> Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
