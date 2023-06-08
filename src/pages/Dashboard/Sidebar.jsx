import { Link, NavLink } from "react-router-dom";
import {MdAddCard, MdOutlineViewList} from "react-icons/md"

const Sidebar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-3/12 px-2">
            <Link>
                <div className="cursor-pointer p-5">
                    <img className="w-14 md:w-20 mx-auto" src="https://i.ibb.co/wJKQkbY/favpng-painting-graphic-design-brush.png" alt="" />
                    <p className=" md:text-xl text-center">Fancy Drawing School</p>
                </div>
            </Link>
            <ul className="flex flex-col gap-2">
                <li>
                    <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive}) =>
                        isActive ? " px-5 py-2 text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-5 py-2 text-xl rounded-xl block"
                    }
                ><span className="flex items-center gap-2"><MdAddCard />Add A Class</span>
                </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive}) =>
                        isActive ? " px-5 py-2 text-xl rounded-xl text-black bg-white block transition-all duration-500" : "px-5 py-2 text-xl rounded-xl block"
                    }
                ><span className="flex items-center gap-2"><MdOutlineViewList /> My Classes</span>
                </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;