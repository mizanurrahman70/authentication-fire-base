import React, { useState } from 'react';
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Fire_base/fire-base';
import { Link } from 'react-router-dom';

const Login = () => {
    const [sucessful,SetSucessful]=useState('')
    const [error,setError]=useState('')
    
    

    const submitHandle =e =>{
        e.preventDefault()
        setError('')
        SetSucessful('')
        
        
       
        const email =e.target.email.value
        const password= e.target.password.value

        console.log(password,email)
        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const user= result.user
            console.log(user)
            if(!user.emailVerified){
                alert('plese verifay your email')
                return
            }
            SetSucessful('Login Sucessful')
        })
        .catch((error)=>{
            const errorMsg=error.message
            setError(errorMsg)

        })
     
    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 w-1/2 mx-auto mt-5">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400">Sign in to access your account</p>
        </div>
        <form onSubmit={submitHandle} action="" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label for="email" className="block mb-2 text-sm -ml-72">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label for="password" className="text-sm">Password</label>
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                </div>
            </div>
            {sucessful && <p className='text-green-600'>{sucessful}</p>}
            {error && <p className='text-red-700'>{error}</p>}
            <div className="space-y-2">
                <div>
                    <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900" type="submit" value="Sign in" />
                </div>
                <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                    <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-400"><Link to='/regester'>Sign up</Link></a>.
                </p>
            </div>
        </form>
    </div>
    );
};

export default Login;