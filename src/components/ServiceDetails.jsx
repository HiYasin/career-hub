import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Spinner from "./shared/Spinner";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const service = services.find((p) => p.id == parseInt(id));
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        //console.log(data);
        setComments([...comments, data]);
    }
    //console.log(service)
    return (
        <>
            <Helmet>
                <title>CareerHub | Service Details</title>
            </Helmet>
            <div>
                <div className="card grid md:grid-cols-2 bg-base-100 shadow-md border border-gray-200">
                    <div>
                        <figure className="p-4">
                            <img
                                src={service.image}
                                alt="Service Image"
                                className="rounded-lg"
                            />
                        </figure>
                        <div className="card-body p-6 space-y-4">
                            <h2 className="card-title text-xl font-semibold text-gray-800">{service.serviceName}</h2>

                            <p className="text-lg text-gray-600">
                                <strong className="font-medium">Category: </strong> <span className="badge badge-success rounded-full">{service.category}</span>
                            </p>

                            <p className="text-lg text-gray-600">
                                <strong className="font-medium">Description: </strong> {service.description}
                            </p>

                            <p className="text-lg text-gray-600">
                                <strong className="font-medium">Pricing: </strong>
                                <span className="text-green-600 font-bold">{service.pricing}</span>
                            </p>

                            <p className="text-lg text-gray-600">
                                <strong className="font-medium">Rating: </strong>
                                <span className="text-yellow-500 font-bold">{service.rating} ⭐</span>
                            </p>

                            <p className="text-lg text-gray-600">
                                <strong className="font-medium">Counselor:</strong> {service.counselor}
                            </p>

                            <p className="text-lg text-gray-600">
                                <strong className="font-medium">Duration:</strong> {service.duration}
                            </p>

                            <div className="mt-2">
                                <button className="btn btn-warning">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="px-10 py-5 space-y-2" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-2xl text-center mt-2">Feedback Form</h1>
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
                                    <span className="label-text">Your Feedback</span>
                                </label>
                                <textarea rows="8" type="text" placeholder="Comment" {...register("comment", { required: "Comment can't be empty" })}
                                    className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" />
                                <p className="text-red-500">{errors.comment?.message}</p>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-warning rounded-none w-full">Submit</button>
                            </div>
                        </form>
                        <div className="px-10 py-5 space-y-3">
                            <h1 className="text-2xl text-center py-2 mt-2">Feedback Comments</h1>
                            <div className="space-y-2">
                                {comments.map((comment, index) => (
                                    <div key={index} className="border-b space-y-1 border-gray-200 p-2 bg-base-300">
                                        <div className="text-warning font-bold px-2 text-xl">
                                            <p>{comment.name}</p>
                                        </div>
                                        <div className="bg-base-100 px-2 py-1 text-sm">
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ServiceDetails;