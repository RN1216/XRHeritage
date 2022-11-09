import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import regImg from "../assets/reg.jpg";
import { AuthContext } from "./../context/AuthProvider";

const Register = () => {
  const { signUp, googleLogin, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleSignUpForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(email, password);

    if (password.length < 6) {
      setError("please give your password length at least six characters");
      return;
    }
    setError("");

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess(true);
        navigate("/");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
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
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photo url"
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
                name="email"
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
                name="password"
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
            <div className="form-control mt-6">
              <input
                onClick={handleGoogleSignIn}
                type="submit"
                value="Login With Google"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          <p className="text-danger">{error}</p>
          {success && (
            <div className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your purchase has been confirmed!</span>
              </div>
            </div>
          )}
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
