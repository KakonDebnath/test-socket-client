import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LogoutBtn from "../../Button/LogoutBtn";
import useTheme from "../../../hooks/useTheme";


const Navbar = () => {
    const { user } = useAuth();
    const [toggleTheme] = useTheme()

    const navOptions = <>
        <li><Link className="text-lg" to="/">Home</Link></li>
        <li><Link className="text-lg" to="/instructors">Instructors</Link></li>
        <li><Link className="text-lg" to="/classes">Classes</Link></li>
        {
            user && <>
                <li><Link className="text-lg" to="/dashboard">Dashboard</Link></li>
                <div className="tooltip hover:tooltip-open tooltip-top mx-2" data-tip={user?.displayName}>
                    <img className="w-10 h-10 rounded-full " src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/5Rcst90/proile.png"} />
                </div>
            </>
        }
    </>
    return (
        <>
            <div className="navbar md:fixed justify-start md:justify-between z-50 bg-black text-white bg-opacity-30  max-w-7xl">
                <div className="navbar-start text-black">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost md:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div to="/" className="cursor-pointer">
                        <img className="w-14 md:w-20 mx-auto" src="https://i.ibb.co/wJKQkbY/favpng-painting-graphic-design-brush.png" alt="" />
                        <a className=" normal-case text-base md:text-xl text-white">Fancy Drawing School</a>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="w-[30vw] md:w-[15vw]">
                    {
                        user ?
                            <LogoutBtn></LogoutBtn>
                            : <Link to="/login">
                                <button className="btn btn-ghost">Login</button>
                            </Link>
                    }
                </div>
                <div>
                    <input onClick={toggleTheme} type="checkbox" className="toggle toggle-primary"/>
                </div>
            </div>
        </>
    );
};

export default Navbar;