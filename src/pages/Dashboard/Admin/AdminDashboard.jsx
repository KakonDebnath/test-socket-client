import { FaPencilAlt, FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";


const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white py-20 cursor-pointer rounded-xl hover:shadow-2xl">
               <p className="flex items-center justify-center gap-3 "><FaUsers />  All Users 10</p>
               <p className="flex items-center justify-center gap-3 "><FaUser />  Total Instructor 10</p>
               
               
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white py-20 cursor-pointer rounded-xl hover:shadow-2xl">
               <p className="flex items-center justify-center gap-3 "><MdOutlineViewList />  Total Class 10</p>
               <p className="flex items-center justify-center gap-3 "><FaPencilAlt />  Pending Class 10</p>
               
               
            </div>
        </div>
    );
};

export default AdminDashboard;