
import { Link, useNavigate } from "react-router";
import SocialLogin from "../components/shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";
const Register = () => {
    const { createUser, updateInfo } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(res => {
            //console.log(res);
            updateInfo(data.name, data.photoURL)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Register & Login Success!",
                });
                navigate("/");
            })
            .catch(errors => {
                //console.error(errors);
                Swal.fire({
                    icon: "warning",
                    title: "Warning",
                    text: "Failed to upload photo but registered success.",
                });
            })
        })
        .catch(errors => {
            //console.error(errors);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to register & login. Please try again.",
            });
        });
    };
    return (
        <div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-lg rounded-none shrink-0 shadow-md border border-gray-100 p-5">
                    <h2 className="text-center text-2xl font-semibold py-5">Register Here</h2>
                    <div className="divider py-0 m-0 px-10"></div>
                    <form className="px-10 py-5 grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" {...register("name", { required: "Name is required" })}
                            className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                            <p className="text-red-500">{errors.name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })}
                            className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                            <p className="text-red-500">{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" {...register("photoURL", { required: "Photo url is required" })}
                             className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                             <p className="text-red-500">{errors.photoURL?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.{6,})/,
                                    message: "Password must be at least 6 digits long, contain a capital letter and a special character"
                                }
                            })}
                             type="password" placeholder="password" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100"  />
                             <p className="text-red-500">{errors.password?.message}</p>
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