import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [icon, setIcon] = useState()
    const { signIn } = useContext(AuthContext)
    const Navigate=useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const submitData = { email, password }
        console.log(submitData)

        signIn(email, password)
            .then((reault) => {
                console.log(reault.user)
                // login successFully
                Navigate('/dashboard')
            })
            .catch((error) => {
                console.loo(error.message)
            })



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
                                <input type="email" className="input" placeholder="Email" name="email"/>
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={icon ? 'text' : 'password'} className="input" placeholder="Password" name="password" />
                                    <p onClick={() => setIcon(!icon)} className="absolute top-4 right-8">
                                        {
                                            icon ? <IoIosEye /> : <IoIosEyeOff />
                                        }
                                    </p>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>

                            </fieldset>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;