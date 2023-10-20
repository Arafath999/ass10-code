import { useLoaderData } from "react-router-dom";



const UpdateCardSingle = () => {
    const brand = useLoaderData();
    const { _id, name, type, price,brand:brandName, rating, description, photo } = brand;

    const handleUpdateCar = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value.toLowerCase();
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const UpdatedCars = {name,brand,type,price,rating,description,photo}
        console.log(UpdatedCars)

        fetch(`http://localhost:5000/brands/${_id}`,{
           method:"PUT",
           headers: {
               'content-type' : 'application/json'
           }  ,
           body: JSON.stringify(UpdatedCars)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
        
        })
    }
    return (
        <div>
          <p>hello world{name}</p>
          <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-2xl font-bold">update Cars Name:{name}</h2>
            <form onSubmit={handleUpdateCar}>
                {/* name and available quantity */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name}  placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brandName} placeholder="brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* supplier and taste */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price}  placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* category and details */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description}  placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating}  placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* photo url */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo}  placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <input type='submit' value='addName' className="btn btn-block bg-green-300"/>
            </form>
        </div>
        </div>
    );
};

export default UpdateCardSingle;