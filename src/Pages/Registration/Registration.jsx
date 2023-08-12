import login from '../../../public/signin.json'
import Lottie from "lottie-react";
import { useState } from 'react';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Registration = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const registrationDetails = {
            name,
            email,
            password,
            photo

        }
        fetch('https://testjahoss-majedul-hasan.vercel.app/users/register', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registrationDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'User Created Successfully',
                    })

                    form.reset();
                }
            })
    }

    return (
        <div className='flex gap-10 items-center '>
            <div className='w-1/2'>
                <Lottie
                    animationData={login}
                    loop={true} />
            </div>
            <div className="card w-1/2 lg:w-1/2 py-10 bg-white">
                <h1 className="text-4xl text-center font-bold">Create Account</h1>
                {/* form start */}
                <form className="card-body" onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="text" placeholder="Your email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control ">
                        <label className="label relative">
                            <span className="label-text">Password</span>
                            <span className="absolute top-[50px] text-xl text-gray-500 right-4 link" onClick={() => setShow(!show)}>
                                {
                                    show ?
                                        <HiEye></HiEye> :
                                        <HiEyeOff></HiEyeOff>
                                }
                            </span>
                        </label>
                        <input type={show ? "text" : "password"} placeholder="Your password" className="input input-bordered" name="password" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phot URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
                    </div>
                    <div className="label justify-start gap-2">
                        <input onClick={() => setActive(!active)} type="checkbox" className="checkbox " />
                        <span className="label-text-alt">Accept <Link to={'/terms'}><span className="hover:text-blue-600 hover:underline">Terms & Condition</span></Link></span>
                    </div>

                    <label className="label">
                        <p className="">Already have an Account? <Link to={'/login'}><span className="hover:text-blue-600 hover:underline">Login here</span></Link></p>
                    </label>
                    <div className="form-control mt-6">
                        <input type="submit" disabled={!active} className="btn bg-green-600 hover:bg-green-800 text-gray-100 hover:text-white" value="Sign Up" />
                    </div>
                    <div className="text-center">
                        <p className="text-green-600">{success}</p>
                        <p className="text-red-600">{error}</p>
                    </div>
                </form>
                {/* form end */}
            </div>

        </div>
    );
};

export default Registration;