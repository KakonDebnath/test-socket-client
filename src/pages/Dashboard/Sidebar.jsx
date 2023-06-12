import { NavLink } from "react-router-dom";
import { MdAddCard, MdOutlineViewList } from "react-icons/md"
import { FaGraduationCap, FaHome, FaPaypal, FaTachometerAlt, FaUsers, FaWallet } from "react-icons/fa";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import LogoutBtn from "../../components/Button/LogoutBtn";
import useTheme from "../../hooks/useTheme";

const Sidebar = () => {
    const { user } = useAuth()
    const [isUserRole] = useRole()
    const [toggleTheme] = useTheme();
    // console.log(isUserRole);
    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <img className="w-10 h-10 rounded-full " src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/5Rcst90/proile.png"} />
                </div>
                <div className=" text-left md:text-center text-xl">
                    <h2 >Welcome: </h2>
                    <h2>{user?.displayName}</h2>
                    <p className="text-base underline">{user?.email}</p>
                </div>
                <div className="flex items-center md:justify-around mt-5">
                    <LogoutBtn></LogoutBtn>

                    <div className="tooltip hover:tooltip-open tooltip-top" data-tip="Change Theme">
                        <input onClick={toggleTheme} type="checkbox" className="toggle toggle-primary" />
                    </div>
                </div>
            </div>

            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
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
                                    to="/dashboard/adminHome"
                                    className={({ isActive }) =>
                                        isActive ? " text-xl text-black transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                    }
                                >
                                    <span className="flex items-center gap-2  "><FaTachometerAlt /> Admin Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manageClasses"
                                    className={({ isActive }) =>
                                        isActive ? "text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                    }
                                ><span className="flex items-center gap-2"><MdOutlineViewList /> Manage Class</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manageUsers"
                                    className={({ isActive }) =>
                                        isActive ? "text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                    }
                                ><span className="flex items-center gap-2"><FaUsers /> Manage Users</span>
                                </NavLink>
                            </li>
                        </> : isUserRole == "instructor" ?
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/instructorHome"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    >
                                        <span className="flex items-center gap-2  "><FaTachometerAlt />Instructor Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/addClass"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    ><span className="flex items-center gap-2"><MdAddCard />Add A Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myClasses"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    ><span className="flex items-center gap-2"><MdOutlineViewList /> My Classes</span>
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/studentHome"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    ><span className="flex items-center gap-2"><FaTachometerAlt />Student Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/mySelectedClasses"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    ><span className="flex items-center gap-2"><FaWallet />My Selected Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myEnrolledClass"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    ><span className="flex items-center gap-2"><FaGraduationCap />My Enrolled Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive }) =>
                                            isActive ? " text-black text-xl transition-all duration-500" : "px-1 md:px-5 py-1 md:py-2 text-base md:text-xl rounded-xl"
                                        }
                                    ><span className="flex items-center gap-2"><FaPaypal />Payment History</span>
                                    </NavLink>
                                </li>
                            </>
                }
            </ul>
        </div>
    );
};

export default Sidebar;