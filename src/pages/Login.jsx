import { Link } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin";

const Login = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 shadow-2xl p-5">
                <h2 className="text-center text-2xl font-semibold py-10 border-b-[1px]">Login your account</h2>

                <form className="p-10 pb-5 grid gap-2">
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                    </div>
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Password" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                        <label className="label mt-4">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <button className="btn btn-warning rounded-none w-full">Login</button>
                    </div>
                    <div className="py-2">
                        <p className="text-center">Dont’t Have An Account ? <Link to={'/register'} className="text-red-500 font-semibold hover:underline">Register</Link></p>
                    </div>
                    <div className="divider">OR</div>
                </form>
                <SocialLogin></SocialLogin>


            </div>
        </div>
    );
};

export default Login;