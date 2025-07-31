import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setLoading(true);

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                navigate("/dashboard/home");
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Enter your password"
                                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-3 right-4 text-xl text-gray-600 cursor-pointer"
                            >
                                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between text-sm text-blue-500 mt-1">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition flex justify-center items-center"
                    >
                        {loading ? (
                            <RotatingLines
                                visible={true}
                                height="24"
                                width="24"
                                color="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                            />
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline font-medium">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
