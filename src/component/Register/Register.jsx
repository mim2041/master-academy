import React from 'react';
import { Link } from 'react-router-dom';
import account from "../../assets/images/account1.png"

const Register = () => {
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='login mt-10'>
            <img className='w-full' src={account} alt="" />
            <form onSubmit={handleRegister} className='border-2 px-10 py-5 bg-slate-400 w-full'>
                
                <h1 className='text-4xl text-center mb-8 mt-10'>Create An Account</h1>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="text" name="name" placeholder='Your Name' id="name" required/>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="email" name="email" placeholder='Your Email' id="email" required/>
                
                <input className='border-2 w-full py-2 rounded-lg pl-2' type="password" name="password" placeholder='Your Password' id="password" required/>\
                <br />

                <div className='checkbox'>
                    <input type="checkbox" className=' text-white'/>
                    <p className=' text-white'>Terms and Conditions</p>
                </div>
                <Link>
                    <button className='bg-amber-500 w-full py-2 mb-2 text-lg rounded-lg'>Login</button>
                </Link>
                    <p className='text-center'>Already have an account? <Link to="/login" className='text-amber-500 underline'>
                    Login
                </Link></p>
                <div className='or'>
                    <hr className='w-1/4'/>
                    <p className='text-lg text-white'>Or</p>
                    <hr className='w-1/4'/>
                </div>
                <div className='loginWith'>
                    <button className='bg-blue-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Google</button>
                    <button className='bg-green-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Github</button>
                </div>
            </form>
        </div>
    );
};

export default Register;