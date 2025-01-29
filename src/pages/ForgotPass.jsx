import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";

const ForgotPass = () => {
    const { forgotPassword } = useAuth();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const { email } = useParams();
    if (email) {
        setValue("email", email);
    }

    const onSubmit = data => {
        //console.log(data);
        forgotPassword(data.email, data.password)
            .then(res => {
                //console.error(res);
                Swal.fire({
                    title: "Success",
                    text: "Password reset successfully. Check your mail.",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Go to Mail"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "https://mail.google.com/mail/u/0/";
                    }
                });

            })
            .catch(errors => {
                //console.error(errors);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Password reset failed. Please try again.",
                });
            });
    };
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div>

            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <div>Enter your email address</div>
                        <div className="join mt-4">
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered join-item focus:outline-0" />
                            <button className="btn btn-warning join-item" type="submit">Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default ForgotPass;