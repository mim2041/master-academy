import React, { useContext, useState } from 'react';
import login from '../../assets/images/login.jpg';
import './Login.css'
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User login successful');
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })

    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className=''>
           <h1 className="text-5xl font-bold text-center -mb-5 mt-10">Login now!</h1>
            <div className="hero min-h-screen ">
            <div className="hero-content grid grid-cols-2">
            <img className='w-full' src={login} alt="" />
            <div className="">
            
            <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                
            <form className="card-body " onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <div className='check-pass justify-between text-white mb-5'>
                    <div className="flex items-center my-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                    </div>
                        <Link className='text-amber-500 mt-3 underline'>Forget Password</Link>
                </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                <p className='text-center'>Don't have an account? <Link to="/register" className='text-amber-500 underline'>
                    Create An Account
                </Link></p>
                <div className='or'>
                    <hr className='w-1/4'/>
                    <p className='text-lg'>Or</p>
                    <hr className='w-1/4'/>
                </div>
                <div className='loginWith'>
                    <button  onClick={handleGoogleSignIn} className='bg-blue-500 px-10 py-8 rounded-lg text-white text-lg'>{FaGoogle} Continue with Google</button>
                    <button onClick={handleGithubSignIn} className='bg-green-500 px-10 py-8 rounded-lg text-white text-lg'>{FaGithub} Continue with Github</button>
                </div>
                <p className='text-success'>{success}</p>
            </form>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;