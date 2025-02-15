import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { id, image, serviceName, category, pricing, counselor } = service;
    return (
        <div className="card bg-base-100 rounded-none shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={serviceName}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="text-lg font-bold px-2 py-1 bg-warning rounded-full w-full text-center">{serviceName}</h2>
                <p>Counselor: <span className='font-bold'>{counselor}</span> </p>
                <p>Category: <span className='font-bold'>{category}</span></p>
                <p>Price: <span className='bg-yellow-600/30 rounded-full px-4 font-bold'>{pricing}</span></p>
                <Link to={`details/${id}`} className="btn btn-warning w-full">Learn More</Link>

            </div>
        </div>
    );
};

export default ServiceCard;