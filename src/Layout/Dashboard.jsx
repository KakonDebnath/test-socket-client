import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";
import { FaAlignLeft } from "react-icons/fa";


const Dashboard = () => {

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-10 gap-5">
                    {/* Page content here */}
                    <div className="flex justify-between items-center ">
                        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"><FaAlignLeft></FaAlignLeft></label>
                        <div className="cursor-pointer text-right">
                            <img className="w-14 md:w-20 mx-auto" src="https://i.ibb.co/wJKQkbY/favpng-painting-graphic-design-brush.png" alt="" />
                            <p className=" md:text-xl text-center">Fancy Drawing School</p>
                        </div>
                    </div>
                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                        {/* Sidebar content here */}
                        <Sidebar />
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;