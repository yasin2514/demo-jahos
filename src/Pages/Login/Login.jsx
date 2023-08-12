import { useState } from "react";
import logo from "../../assets/rsz_jahoss.jpg"
import { HiMail, HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard/admin';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginInfo = {
            email,
            password
        }
        fetch('https://testjahoss-majedul-hasan.vercel.app/users/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("access-token", data.token)
                navigate(from, { relative: true });
                form.reset();
            })

    }




    return (
        <div>
            <div className='border  flex h-[100vh] flex-col justify-center items-center gap-3'>
                <img src={logo} alt="logo" />
                <form onSubmit={handleLogin} className="w-2/12 flex flex-col items-center gap-3">
                    <div className="form-control relative w-full">
                        <span className="absolute top-[15px] text-xl text-gray-500 right-4 link">
                            <HiMail></HiMail>
                        </span>
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full" name="email" required />
                    </div>
                    <div className="form-control relative w-full">
                        <span className="absolute top-[15px] text-xl text-gray-500 right-4 link" onClick={() => setShow(!show)}>
                            {
                                show ?
                                    <HiEye></HiEye> :
                                    <HiEyeOff></HiEyeOff>
                            }
                        </span>
                        <input type={show ? "text" : "password"} placeholder="Enter your Password" className="input input-bordered" name="password" required />
                    </div>
                    <button className="btn px-10 btn-sm bg-green-600 hover:bg-green-800 text-gray-100 hover:text-white">Login</button>
                </form>
                <label className="label">
                    <p className="text-xs">New User? <Link to={'/registration'}><span className="hover:text-blue-600 hover:underline">Register here</span></Link></p>
                </label>

            </div>
        </div>
    );
};

export default Login;