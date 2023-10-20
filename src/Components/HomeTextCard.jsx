import { Link } from "react-router-dom";


const HomeTextCard = ({ brand }) => {
    const { _id, name, type, price, rating, description, photo } = brand;
    console.log(brand)
    // const   {name,brand,type,price,rating,description,photo} = brand
    //      console.log(updatedCars)

    return (
        <div className="">

            <div className="card space-y-8 w-96 bg-base-100 h-[200vh] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes"  className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{type}</h2>
                    <h2 className="card-title">{price}</h2>
                    <h2 className="card-title">{rating}</h2>
                    <p>{description}</p>
                    <div className="btn-group btn-group-vertical">
                        <Link to={`/details/${_id}`} state={{ brand }}>
                            <button className="btn btn-active" type="button">Details</button>
                        </Link>

                        {/* <Link to={`details/${id}`}><button className="btn" type="button">Details</button></Link> */}

                        <Link to={`/updatecard/${_id}`}>
                            <button className="btn" type="button">Update</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeTextCard