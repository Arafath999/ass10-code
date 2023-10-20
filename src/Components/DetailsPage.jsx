

import {  useLocation } from "react-router-dom";

const DetailsPage = () => {
    const location = useLocation();
    const { brand } = location.state;

    

    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={brand.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand.name}</h2>
                    <h2 className="card-title">{brand.price}</h2>
                    <h2 className="card-title">{brand.rating}</h2>
                    <p>{brand.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;
