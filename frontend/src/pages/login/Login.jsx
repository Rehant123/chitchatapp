import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
    <span className='text-blue-500'> Chit Chat </span>
    </h1>
    <form action="">
        <div>
            <label className="label p-2">
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full h-10" />

            <label className="label p-2">
                <span className='text-base label-text'>Password</span>
            </label>
            <input type="text" placeholder="Enter password" className="input input-bordered w-full h-10" />
        </div>
        <a className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>
                    <div>   
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
    </form>
 
  </div>
</div>

  )
}

export default Login;