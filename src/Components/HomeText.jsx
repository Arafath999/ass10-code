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
    fetch(`http://localhost:5000/brands?category=${category}`)
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <h2 className="text-2xl">card show{cars.length}</h2>
            {
                cars.map(brand => <HomeTextCard key={brand._id} brand={brand}></HomeTextCard>)
            }
        </div>
    );
};

export default HomeText;