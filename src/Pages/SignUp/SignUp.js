import { GoogleAuthProvider } from 'firebase/auth';
import React, {  useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn=(data)=>{
        providerLogin(googleProvider)
        .then(result=>{
            navigate('/');
            const user = result.user;
            console.log(user)
            toast('User  Successfully created.')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    //navigate('/');
                    saveUser(data.name, data.email);
                 })
                .catch(err => console.log(err));
        })
        .catch(error=>console.error(error))
       }
    

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User  Successfully created.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // navigate('/');
                        saveUser(data.name, data.email);
                     })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }



    const saveUser = (name, email)=>{
        const user = {name, email};

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('saveuser', data)
            //navigate('/');
            getUserToken(email);
        })
    }

    const getUserToken = email=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data =>{
            if(data.accessToken){
             localStorage.setItem('accessToken', data.accessToken)  
                navigate('/');
            }
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 5, message: "Password must be 5 characters long" }
                            
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                  
                <div className="divider">OR</div>

             <div className="dropdown dropdown-open">
               <label tabIndex={0} className="btn m-1">Select Item</label>
               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={handleSubmit(handleSignUp)} className='btn btn-outline w-full' > User</button></li>
                   <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'> Seller</button>    
                 </ul>
             </div>
            </div>
        </div>
    );
};

export default SignUp;