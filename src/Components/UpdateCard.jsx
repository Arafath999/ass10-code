

const UpdateCard = () => {

    const handleAddCars = (e) => {
         e.preventDefault();
         const form = e.target;

         const name = form.name.value;
         const brand = form.brand.value.toLowerCase();
         const type = form.type.value;
         const price = form.price.value;
         const rating = form.rating.value;
         const photo = form.photo.value;
         const description = form.description.value;
 
         const updatedCars = {name,brand,type,price,rating,description,photo}
         console.log(updatedCars)

         fetch(`https://khan-m5rxu3e0t-khans-projects-8df7d1cb.vercel.app/brands`,{
            method:"POST",
            headers: {
                'content-type' : 'application/json'
            }  ,
            body: JSON.stringify(updatedCars)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
           
            <form onSubmit={(handleAddCars)}>
                {/* name and available quantity */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name"  placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="brand" className="input input-bordered w-full" />
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
                            <input type="text" name="type" placeholder="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price"  placeholder="price" className="input input-bordered w-full" />
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
                            <input type="text" name="description"  placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating"  placeholder="rating" className="input input-bordered w-full" />
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
                            <input type="text" name="photo"  placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <input type='submit' value='addName' className="btn btn-block bg-green-300"/>
            </form>
        </div>
        </div>
    );
};

export default UpdateCard;