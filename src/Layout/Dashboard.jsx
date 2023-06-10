
import LogoutBtn from "../components/Button/LogoutBtn";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";


const Dashboard = () => {




    const { user } = useAuth();
    // console.log(user);
    return (
        <>
            <div className="flex justify-between items-center pl-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3">
                <h1 className="text-2xl">Welcome back {user?.displayName}!</h1>
                <div className="flex justify-around items-center gap-5">
                <div className="tooltip hover:tooltip-open tooltip-bottom mx-2" data-tip={user?.email}>
                    <img className="w-10 h-10 rounded-full " src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/5Rcst90/proile.png"} />
                </div>
                    <LogoutBtn></LogoutBtn>
                </div>
            </div>
            <div className='flex'>
                <Sidebar />
                <div className='w-10/12 p-3 md:p-5'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;