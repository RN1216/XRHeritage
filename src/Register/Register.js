import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import regImg from '../assets/reg.jpg';
import { AuthContext } from './../context/AuthProvider';


const Register = () => {
    const {signUp}=useContext(AuthContext);

    const handleSignUpForm = (event) => {
        event.preventDefault();
        const form = event.target
        const email =form.email.value;
        const password = form.password.value;
        //const photoURL= form.photoURL.value;
        console.log(email,password);

        signUp(email,password)
        .then((userCredential) => {
            
          const user = userCredential.user;
          console.log(user);
         
        })
        .catch((error) => {
          console.log(error);
         
        });
      };
    return (
        <div className="hero my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left  p-5">
            <img className="w-full mx-auto my-5" src={regImg} alt=""></img>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
            <form onSubmit={handleSignUpForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  
                </label>
                <input
                  type="text"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="login"
                  className="btn btn-error"
                ></input>
              </div>
            </form>
            <p className=" w-full text-center pb-5 ">
             Already have an account?
              <Link className="text-orange-600 " to="/login">
                Login now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;