import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { GoogleAuthProvider } from "firebase/auth";
import swal from 'sweetalert';
const provider = new GoogleAuthProvider();

const SignUp = () => {

    const {createUser,googleSignIn} = useContext(AuthContext)

    const navigation = useNavigate();
 
     const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error=>{
                console.error(error.message)
            })

    }
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        // const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        



        if (!passwordPattern.test(password)) {
            swal("Password must contain at least 8 characters, including letters and numbers.");
            return; 
        }



        createUser(email,password)
        .then(result => {
            console.log(result.user)
            navigation(location?.state ? location.state : '/signin');
            // handleProfile(name,image)
            const user = { email}
            fetch(`https://khan-m5rxu3e0t-khans-projects-8df7d1cb.vercel.app/user`,{
        method: "POST",
        headers :{
          'content-type' : 'application/json'
        } ,
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId ){
            swal('added successfully')
        }
      })
        })
        .catch (error => {
            console.error(error)
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUP</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
    
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
          <Link to='/signin'><button className="btn">Sign in </button></Link>
        </div>
        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-secondary">Go to Google</button>
                        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;