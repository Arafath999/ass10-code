import Navbar from "./Navbar";
import Slider from "./Slider";
import HomeTextCard from "./HomeTextCard";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';

const HomeText = () => {
      const [cars, setCars] = useState([]);
      const [searchParams] = useSearchParams();
      const category = searchParams.get('category');
  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`https://khan-m5rxu3e0t-khans-projects-8df7d1cb.vercel.app/brands?category=${category}`)
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);
  
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <h2 className="text-2xl">PRODUCT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-2">
            {
                cars.map(brand => <HomeTextCard key={brand._id} brand={brand}></HomeTextCard>)
            }
            </div>
        </div>
    );
};

export default HomeText;