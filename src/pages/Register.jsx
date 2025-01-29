
import { Link, useNavigate } from "react-router";
import SocialLogin from "../components/shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateInfo } = useAuth();
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
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

    const handleForgotPassword = () => {
        const email = getValues("email");
        if (email) {
            navigate(`/forgot/${email}`);
        } else {
            navigate("/forgot");
        }
    };

    return (
        <>
            <Helmet>
                <title>CareerHub | Register</title>
            </Helmet>
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
                                <div className="relative">
                                    <input
                                        {...register("password", {
                                            required: "Password is required",
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.{6,})/,
                                                message: "Password must be at least 6 digits long, contain a uppercase letter and a lowercase letter"
                                            }
                                        })}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100"
                                    />

                                    <span
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </span>
                                </div>
                                <p className="text-red-500">{errors.password?.message}</p>
                            </div>
                            <label className="label mt-4">
                                <a className="label-text-alt link link-hover" onClick={handleForgotPassword}>Forgot password?</a>
                            </label>
                            <div className="form-control mt-4">
                                <button className="btn btn-warning rounded-none w-full">Register</button>
                            </div>
                            <div className="py-2">
                                <p className="text-center">Already Have An Account ? <Link to={'/login'} className="text-warning font-semibold hover:underline">Login</Link></p>
                            </div>
                            <div className="divider">OR</div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;