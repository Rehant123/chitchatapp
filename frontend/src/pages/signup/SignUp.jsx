import React from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
    <span className='text-blue-500'> Chit Chat </span>
    </h1>
    <form action="">
        <div>
            <label className="label p-2">
                <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full h-10" />

                    </div>
                    <div>
            <label className="label p-2">
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='johndoe' className="input input-bordered w-full h-10" />

                    </div>
                    <div>
            <label className="label p-2">
                <span className='text-base label-text'>Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className="input input-bordered w-full h-10" />


            <label className="label p-2">
                <span className='text-base label-text'>Confirm Password</span>
            </label>
            {/*Gender Checkbox */}
           
            <input type="text" placeholder="Confirm Password" className="input input-bordered w-full h-10" />
            <a className='text-sm  hover:underline hover:text-blue-600  inline-block'>
						Already have an account?
					</a>
                    <GenderCheckbox/>
                    <div>   
                        <button className='btn btn-block btn-sm mt-2'>signup</button>
                    </div>
                    </div>

    </form>
 
  </div>
</div>

  )
}

export default SignUp;