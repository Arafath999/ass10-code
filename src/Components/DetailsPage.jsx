import {  useLocation, useParams } from "react-router-dom";




const DetailsPage = () => {
    
    const {id} = useParams();
    console.log(id)
    const location = useLocation();
    const { brand } = location.state;
    // const data = loadedData.find((detail) => detail._id !== id);
    // const { _id, name, type, price, rating, description, photo } = data;
    // const cartData = { _id, name, type, price, rating, description, photo}
    // const handleCart = () => {
    //     fetch("https://localhost:5000/carts", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json", // Changed "content-type" to "Content-Type"
    //       },
    //       body: JSON.stringify(cartData),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         if (data.insertedId) {
    //           alert("Product Added", {
    //             position: "top-right",
    //           }); // Corrected the positioning and removed the extra 'a' from 'top-right'
    //         }
    //       })
    //       .catch((error) => {
    //         console.error("Error:", error);
    //       });
    //   };
      
    

    return (
        <div className="">
            
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={brand.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand.name}</h2>
                    <h2 className="card-title">{brand.price}</h2>
                    <h2 className="card-title">{brand.rating}</h2>
                    <p>{brand.description}</p>
                    <div className="card-actions">
                        <button   className="btn btn-primary" >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;
