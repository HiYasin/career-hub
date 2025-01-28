
import { Link } from "react-router";
import SocialLogin from "../components/shared/SocialLogin";
const Register = () => {
    return (
        <div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 shadow-2xl p-5">
                    <h2 className="text-center text-2xl font-semibold py-10 border-b-[1px]">Register Here</h2>

                    <form className="p-10 pb-5 grid gap-2">
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="text" type="text" placeholder="Your Name" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Photo URL" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn btn-warning rounded-none w-full">Login</button>
                        </div>
                        <div className="py-2">
                            <p className="text-center">Already Have An Account ? <Link to={'/login'} className="text-red-500 font-semibold hover:underline">Login</Link></p>
                        </div>
                        <div className="divider">OR</div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;