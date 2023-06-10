import { Link, NavLink } from "react-router-dom";
import { MdAddCard, MdOutlineViewList } from "react-icons/md"
import { FaHome, FaUsers } from "react-icons/fa";
import useRole from "../../hooks/useRole";

const Sidebar = () => {
    const [isUserRole] = useRole()
    // console.log(isUserRole);
    return (
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white  md:w-3/12  px-2  min-h-[100vh]">
            <Link>
                <div className="cursor-pointer p-5">
                    <img className="w-14 md:w-20 mx-auto" src="https://i.ibb.co/wJKQkbY/favpng-painting-graphic-design-brush.png" alt="" />
                    <p className=" md:text-xl text-center">Fancy Drawing School</p>
                </div>
            </Link>

            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                        }
                    ><span className="flex items-center gap-2"><FaHome /> Go to Home</span>
                    </NavLink>
                </li>
            </ul>
            <hr className="my-5" />
            <ul className="flex flex-col gap-2">
                {
                    isUserRole == "admin" ?
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard/manageClasses"
                                    className={({ isActive }) =>
                                        isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                    }
                                ><span className="flex items-center gap-2"><MdOutlineViewList /> Manage Class</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manageUsers"
                                    className={({ isActive }) =>
                                        isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                    }
                                ><span className="flex items-center gap-2"><FaUsers /> Manage Users</span>
                                </NavLink>
                            </li>
                        </> : isUserRole == "instructor" ?
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/addClass"
                                        className={({ isActive }) =>
                                            isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                        }
                                    ><span className="flex items-center gap-2"><MdAddCard />Add A Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myClasses"
                                        className={({ isActive }) =>
                                            isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                        }
                                    ><span className="flex items-center gap-2"><MdOutlineViewList /> My Classes</span>
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/mySelectedClasses"
                                        className={({ isActive }) =>
                                            isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                        }
                                    ><span className="flex items-center gap-2"><MdAddCard />My Selected Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myEnrolledClass"
                                        className={({ isActive }) =>
                                            isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                        }
                                    ><span className="flex items-center gap-2"><MdAddCard />My Enrolled Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive }) =>
                                            isActive ? " px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-xl rounded-xl block"
                                        }
                                    ><span className="flex items-center gap-2"><MdAddCard />Payment History</span>
                                    </NavLink>
                                </li>
                            </>
                }
            </ul>
        </div>
    );
};

export default Sidebar;