import { FiSettings } from "react-icons/fi";
import { HiHome, HiMenu, HiUser } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/jahoss_logo.png";
import { useState } from "react";
import userImage from "../../assets/jahangir.jpeg"
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";

const DashboardLayout = () => {
    const [open, setopen] = useState(false);
    const [management, setManagement] = useState(true);
    const [users, setUsers] = useState(true);
    const [setting, setSetting] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/login';

    const handleLogout = () => {
        localStorage.removeItem("access-token")
        navigate(from, { relative: true });
    }

    return (
        <>
            <div className="flex h-[100vh]">
                <div className={`bg-green-600 h-[105vh] ${open ? "ms-[-255px]  duration-300 " : "ms[250px] duration-300"}`}>
                    <img className="w-64" src={logo} alt="" />

                    <div className="flex items-start flex-col mt-10">
                        <div className="text-white flex justify-center  w-full ">
                            <NavLink to={"/dashboard/admin"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4" : "flex gap-1 py-2 ps-4 w-full"}><HiHome className="text-xl"></HiHome>  Dashboard</NavLink>
                        </div>
                        <h5 className="text-gray-200  my-5 ms-5">PROFILE MANAGEMENT</h5>

                        <div className="w-full space-y-2 mb-10">

                            <div className="text-white flex justify-center  w-full duration-150" onClick={() => setManagement(!management)}>
                                {
                                    management ?
                                        <NavLink to={"/dashboard/profile"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4 relative" : "flex gap-1 py-2 ps-4 w-full relative"}><ImProfile className="text-xl"></ImProfile>  Profile Management <AiOutlineLeft className="absolute top-3 right-4
                                        "></AiOutlineLeft></NavLink>
                                        :
                                        <div className="flex flex-col w-full relative">
                                            <NavLink to={"/dashboard/profile"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4" : "flex gap-1 py-2 ps-4 w-full"}><ImProfile className="text-xl"></ImProfile>  Profile Management <AiOutlineDown className="absolute top-3 right-4
                                            "></AiOutlineDown></NavLink>

                                            <div className={`mt-2 bg-green-900 text-gray-200 rounded-md mx-6 py-2 px-3 flex gap-2 flex-col  ${management ? "mt-0 duration-500" : "top-10 duration-500"}`}>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/addProfile"} className={({ isActive }) => isActive ? "text-white " : ""}>Add Profile</NavLink></span>
                                                <span className="hover:text-white  hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}>Profile List</NavLink></span>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}>Add Agent</NavLink></span>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}>Add Country</NavLink></span>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}>Profile Report</NavLink></span>
                                            </div>
                                        </div>


                                }
                            </div>
                            <div className="text-white flex justify-center  w-full duration-150" onClick={() => setUsers(!users)}>
                                {
                                    users ?
                                        <NavLink to={"/dashboard/users"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4 relative" : "flex gap-1 py-2 ps-4 w-full relative"}><HiUser className="text-xl"></HiUser> Users <AiOutlineLeft className="absolute top-3 right-4"></AiOutlineLeft></NavLink>
                                        :
                                        <div className="flex flex-col w-full relative">
                                            <NavLink to={"/dashboard/users"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4 relative" : "flex gap-1 py-2 ps-4 w-full relative"}><HiUser className="text-xl"></HiUser>  Users <AiOutlineDown className="absolute top-3 right-4"></AiOutlineDown></NavLink>

                                            <div className={`mt-2 bg-green-900 text-gray-200 rounded-md mx-6 py-2 px-3 flex gap-2 flex-col  ${users ? "mt-0 duration-500" : "top-10 duration-500"}`}>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}>Users List</NavLink></span>

                                            </div>
                                        </div>


                                }
                            </div>

                            <div className="text-white flex justify-center  w-full duration-150" onClick={() => setSetting(!setting)}>
                                {
                                    setting ?
                                        <NavLink to={"/dashboard/settings"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4 relative" : "flex gap-1 py-2 ps-4 w-full relative"}><FiSettings className="text-xl"></FiSettings> Setting <AiOutlineLeft className="absolute top-3 right-4"></AiOutlineLeft></NavLink>
                                        :
                                        <div className="flex flex-col w-full relative">
                                            <NavLink to={"/dashboard/settings"} className={({ isActive }) => isActive ? "bg-blue-600 w-full flex gap-1 py-2 ps-4 relative" : "flex gap-1 py-2 ps-4 w-full relative"}><FiSettings className="text-xl"></FiSettings>  Setting <AiOutlineDown className="absolute top-3 right-4"></AiOutlineDown></NavLink>

                                            <div className={`mt-2 bg-green-900 text-gray-200 rounded-md mx-6 py-2 px-3 flex gap-2 flex-col  ${setting ? "mt-0 duration-500" : "top-10 duration-500"}`}>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}> Site Settings </NavLink></span>
                                                <span className="hover:text-white hover:font-semibold"> <NavLink to={"/dashboard/"} className={({ isActive }) => isActive ? "text-white " : ""}> Change Password </NavLink></span>

                                            </div>
                                        </div>
                                }
                            </div>

                        </div>



                        <div className="ms-5 flex gap-1 text-white items-center justify-center border rounded-md py-2 px-3">
                            <div className="w-10 h-10 div-color rounded-full"></div>
                            <div className="">
                                <h5>Call for Support</h5>
                                <p>+00000000033</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" w-full h-full">
                    <div className='bg-white h-12 flex justify-between items-center px-2'>
                        <span onClick={() => setopen(!open)} className="cursor-pointer">
                            {
                                open ? <HiMenu className="text-2xl"></HiMenu> :
                                    <HiMenu className="text-2xl"></HiMenu>
                            }
                        </span>
                        <div className="relative">
                            <img src={userImage} onClick={() => window.my_modal_2.showModal()} className="w-8 h-8 rounded-full" alt="logo" />
                        </div>
                    </div>
                    <div className="h-full dashboard-bg">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div >
            {/* Open the modal using ID.showModal() method */}
            <dialog dialog id="my_modal_2" className="modal relative" >
                <form method="dialog" className="modal-box text-white bg-blue-900 w-[300px] rounded-none absolute top-12 right-0">
                    <div className="flex flex-col items-center text-center">
                        <img className="w-20 h-20 rounded-full" src={userImage} alt="" />
                        <p>Jahoss <br />
                            Year 2023 <br />
                            ROLE: STORE ADMIN</p>
                    </div>
                    <div className="flex justify-between mx-5 mt-3">
                        <button className="btn btn-sm">Profile</button>
                        <button onClick={handleLogout} className="btn btn-sm">LogOut</button>
                    </div>

                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >
        </>
    );
};

export default DashboardLayout;
