

import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Components/Header'
import SimpleMap from './Components/GoogleMaps'
import CountDown from './Components/CountDown'
import Buying from './Components/Buying'

function App() {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch('brand.json')
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <CountDown></CountDown>
      <h1 className="text-center font-poppins font-bold text-3xl text-red-600 mt-6">All Brand</h1>

      <div className='mb-6 grid grid-cols-1 md:grid-cols-2 space-y-2'>
        {brands.map((brand) => (
          <Link to={`/homeText/?category=${brand.brandName}`} key={brand.id}><div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={brand.imageURL} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{brand.brandName}</h2>
            </div>
          </div>
          
          </Link>

        ))}
        
      </div>
      <SimpleMap></SimpleMap>
      <Buying></Buying>
      <Footer></Footer>
      
    


    </>
  )
}

export default App
