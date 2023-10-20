import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="mx-auto text-center bg-amber-50 rounded-lg">
           <h2 className="text-4xl font-bold font-poppins " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">AUTOMATIVE SELLING STORE</h2>
          
             <Link className="mr-12"  to="/"><p className="text-2xl" data-aos="zoom-out">We have Care Your Choice. <span className="text-red-800 font-poppins font-bold underline">Welcome  To  ARAFATH cars action</span></p></Link>
                
        </div>
    );
};

export default Header;