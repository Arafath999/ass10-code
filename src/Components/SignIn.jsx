import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import swal from 'sweetalert';

const SignIn = () => {

    const {signInUser,googleSignIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                navigate(location?.state ? location.state : '/');
                console.log(result.user)
            })


    }
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(password)) {
            swal("Password must contain at least 8 characters, including letters and numbers.");
            return; 
        }





        signInUser(email,password)
        .then(res => {
            console.log(res.user)
            navigate(location?.state ? location.state : '/');
            const user = { email}
            fetch(`http://localhost:5000/user`,{
                method: "PATCH",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
             console.log(data)

             if(data.acknowledged
            ){
            swal('added successfully')
        }
      })
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <h2>it is signIn</h2>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
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
                                <button className="btn btn-primary">Sign In </button>
                                <Link to='/signup'><button className="btn">Sign up </button></Link>
                            </div>
                            <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-secondary">Google</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
// import { useContext } from "react";
// import { AuthContext } from "./Providers/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const SignIn = () => {
//     const { signInUser } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         try {
//             const res = await signInUser(email, password);
//             console.log(res.user);

//             // Redirect the user to the previous page (or the home page if there's no previous page)
//             navigate(location.state?.from || '/');

//             const user = { email };
//             const response = await fetch(`http://localhost:5000/user`, {
//                 method: "PATCH",
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(user)
//             });

//             const data = await response.json();
//             console.log(data);

//             if (data.acknowledged) {
//                 alert('added successfully');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <h2>Sign In</h2>
//             <Navbar />
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Sign IN</h1>
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleSignIn} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-primary">Sign In</button>
//                                 <Link to='/signup'><button className="btn btn-primary">Sign up</button></Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;
