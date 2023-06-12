import { FaPencilAlt, FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <Link to="/dashboard/manageUsers">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white flex justify-center items-center h-40 md:h-72 cursor-pointer rounded-xl hover:shadow-2xl">
                    <div>
                        <p className="flex items-center justify-center gap-3 "><FaUsers />  All Users 10</p>
                        <p className="flex items-center justify-center gap-3 "><FaUser />  Total Instructor 10</p>
                    </div>
                </div>
            </Link>
            <Link to="/dashboard/manageClasses">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white flex justify-center items-center h-40 md:h-72 cursor-pointer rounded-xl hover:shadow-2xl">
                    <div>
                        <p className="flex items-center justify-center gap-3 "><MdOutlineViewList />  Total Class 10</p>
                        <p className="flex items-center justify-center gap-3 "><FaPencilAlt />  Pending Class 10</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdminDashboard;