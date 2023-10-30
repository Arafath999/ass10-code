import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";


const Navbar = () => {

 

  const navLinks = <>
    <li><NavLink to='/'>HOME</NavLink></li>
    <li><NavLink to='/updatecard'>Add Product</NavLink></li>
    <li><NavLink to='/mycart'>My Cart</NavLink></li>
    <li><NavLink to='/signin'>SignIn</NavLink></li>
    <li><NavLink to='/signup'>SignUp</NavLink></li>
  </>


  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })

  }



  return (
    <div className="">
      <div className="navbar bg-base-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-40 rounded-full">
                <img src="https://i.ibb.co/tDXxzdy/8391362.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        

        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

            {
              user && <p className="text-red-800 mr-16 -mt-6">{user?.email} {user?.displayName}</p>
            }
            {
              user && <div className="w-10 rounded-full -mt-4">
              <img src={user.photoURL} />
            </div>
            }
          </label>
          {
            user ? <button onClick={handleSignOut} className="btn">Sign Out</button>
              : <Link to='/signin'>
                <a className="btn">signin</a>
              </Link>
          }



        </div>
      </div>
    </div>
  );
};

export default Navbar;