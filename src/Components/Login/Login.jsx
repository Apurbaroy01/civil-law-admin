import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'; // ✅ better spinner

const Login = () => {
    const [icon, setIcon] = useState(false);
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
                navigate('/dashboard/home');
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input input-bordered w-full" placeholder="Email" name="email" required />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={icon ? 'text' : 'password'}
                                        className="input input-bordered w-full"
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                    <span
                                        onClick={() => setIcon(!icon)}
                                        className="absolute top-3 right-4 cursor-pointer text-xl"
                                    >
                                        {icon ? <IoIosEye /> : <IoIosEyeOff />}
                                    </span>
                                </div>
                                <div><a className="link link-hover text-sm">Forgot password?</a></div>
                                <button type="submit" className="btn btn-neutral mt-4 w-full flex justify-center items-center">
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
                                        'Login'
                                    )}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
