

const Banner = () => {
    return (
        <div className="mt-6">
            <div className="hero min-h-screen" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" style={{ backgroundImage: 'url(https://i.ibb.co/LZTmV0c/pexels-roberto-nickson-2526127.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-gray-800"><span className="text-red-800">SPECIAL Automotive </span></h1>
                        <p className="mb-5 text-white">A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
