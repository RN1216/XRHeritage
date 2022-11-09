import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import loginImg from "../../assets/login.jpg";
import { AuthContext } from './../../context/AuthProvider';

const Login = () => {
    const {loginUser}=useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLoginForm = (event) => {
    event.preventDefault();
    const form = event.target
    const email =form.email.value;
    const password = form.password.value;
    console.log(email,password);
     
    loginUser(email,password)
    .then(result=>{
      const user = result.user;
      const currentUser={email:user.email}
      console.log(currentUser);
   

       navigate(from,{replace:true})
      
     // 

    })
    .catch(err=>console.error(err))
  };
    return (
        <div className="hero my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left  p-5">
          <img className="w-3/4" src={loginImg} alt=""></img>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLoginForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
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
            New to XR
            <Link className="text-orange-600 " to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login;