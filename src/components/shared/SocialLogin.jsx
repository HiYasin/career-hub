import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    return (
        <div className="flex flex-col gap-2 max-w-[200px] mx-auto">
            <button className="btn btn-neutral"><FcGoogle></FcGoogle> Login with Google</button >
        </div>
    );
};

export default SocialLogin;