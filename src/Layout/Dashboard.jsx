
import LogoutBtn from "../components/Button/LogoutBtn";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";


const Dashboard = () => {




    const { user } = useAuth();
    console.log(user);
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1'>
                <div className="flex justify-between items-center pl-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3">
                    <h1 className="text-2xl">Welcome back {user?.displayName}!</h1>
                    <div className="flex justify-around items-center">
                        <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="Instructor" />
                        <LogoutBtn></LogoutBtn>
                    </div>
                </div>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;