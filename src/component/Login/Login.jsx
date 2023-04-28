import React from 'react';
import login from '../../assets/images/login.jpg';
import './Login.css'
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='login mt-10'>
            <img src={login} alt="" />
            <form onSubmit={handleLogin} className='border-2 px-10 py-5 bg-slate-400 w-full'>
                <h1 className='text-4xl text-center mb-5'>Login Now</h1>
                <h2 className='text-2xl text-left text-amber-500 mb-2'>Your Email</h2>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="email" name="email" placeholder='Your Email' id="email" required/>
                
                <h2 className='text-2xl text-left text-amber-500 mb-2'>Your Password</h2>
                <input className='border-2 w-full py-2 rounded-lg pl-2' type="password" name="password" placeholder='Your Password' id="password" required/>\
                <br />

                <div className='check-pass justify-between text-white mb-5'>
                    <div className='checkbox'>
                        <input type="checkbox" className=' text-white'/>
                        <p className=' text-white'>Remember me</p>
                    </div>
                    <Link className='text-amber-500 underline'>Forget Password</Link>
                </div>
                <Link>
                    <button className='bg-amber-500 w-full py-2 mb-2 text-lg rounded-lg'>Login</button>
                </Link>
                    <p className='text-center'>Don't have an account? <Link to="/register" className='text-amber-500 underline'>
                    Create An Account
                </Link></p>
                <div className='or'>
                    <hr className='w-1/4'/>
                    <p className='text-lg text-white'>Or</p>
                    <hr className='w-1/4'/>
                </div>
                <div className='loginWith'>
                    <button className='bg-blue-500 px-10 py-8 rounded-lg text-white text-lg'>{FaGoogle} Continue with Google</button>
                    <button className='bg-green-500 px-10 py-8 rounded-lg text-white text-lg'>{FaGithub} Continue with Github</button>
                </div>
            </form>
        </div>
    );
};

export default Login;