// SignUp.jsx
import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const { loading, signup } = useSignup(); // Corrected useSignup
  const [inputs, setInput] = useState({
    fullName: "",
    username: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleCheckboxChange = (gender) => {
    setInput({ ...inputs, gender: gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
    console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> Chit Chat </span>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInput({ ...inputs, fullName: e.target.value })
              }
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInput({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="johndoe"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={inputs.password}
              type="password" // Corrected type to "password"
              onChange={(e) =>
                setInput({ ...inputs, password: e.target.value })
              }
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              value={inputs.confirmPassword}
              type="password" // Corrected type to "password"
              onChange={(e) =>
                setInput({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              className="input input-bordered w-full h-10"
            />
            <Link
              to="/login"
              className="text-sm  hover:underline hover:text-blue-600  inline-block"
            >
              Already have an account?
            </Link>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <div>
              <button className="btn btn-block btn-sm mt-2"
              disabled = {loading}
              >{loading?<span className = "loading loading-spinner"></span>:"Sign Up"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
