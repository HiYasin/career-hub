
import { useState } from 'react';
import useAuth from '../customHooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, updateInfo } = useAuth();
    const [ userInfo, setInfo ] = useState(user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        //console.log(data);
        updateInfo(data.name, data.photoURL)
            .then(res => {
                //console.error(res);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Profile updated successfully",
                });
                navigate('/profile');
            })
            .catch(errors => {
                //console.error(errors);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Operation failed. Please try again.",
                });
            });
    }
    return (
        <div className='p-10 grid md:grid-cols-2 justify-center items-center gap-5 w-full'>
            <div className='grid gap-5 justify-center'>
                <div className="avatar flex justify-center cursor-pointer" title={userInfo.displayName}>
                    <div className="ring-warning ring-offset-base-100 w-50 rounded-full ring ring-offset-2">
                        <img src={userInfo.photoURL} alt={userInfo.displayName} />
                    </div>
                </div>
                <div className='bg-base-100 card-body min-w-72'>
                    <h2 className='text-2xl font-bold'>{userInfo.displayName}</h2>
                    <p><strong>Email: </strong> {userInfo.email}</p>
                    <p><strong>Email Verified: </strong>{userInfo.emailVerified ? <span className='badge badge-success rounde-full'>Yes</span> : <span className='badge badge-error rounded-full'>No</span>}</p>
                    <p><strong>Photo URL: </strong>{userInfo.photoURL}</p>
                </div>
            </div>
            <div>
                <form className="px-10 py-5 space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl text-center mt-2">Edit Profile</h1>
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" {...register("name", { required: "Name is required" })}
                            className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                        <p className="text-red-500">{errors.name?.message}</p>
                    </div>
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" {...register("photoURL", { required: "Photo URL can't be empty" })}
                            className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                        <p className="text-red-500">{errors.photoURL?.message}</p>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-warning rounded-none w-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;