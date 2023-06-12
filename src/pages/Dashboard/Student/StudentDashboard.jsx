import { FaCcPaypal, FaListAlt} from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";
import { Link } from "react-router-dom";


const StudentDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <Link to="/dashboard/mySelectedClasses">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white md:h-64 h-40 flex justify-center items-center cursor-pointer rounded-xl hover:shadow-2xl">
                    <p className="flex items-center justify-center gap-3 "><FaListAlt />  My Selected Class</p>
                </div>
            </Link>
            <Link to="/dashboard/myEnrolledClass">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white md:h-64 h-40 flex justify-center items-center cursor-pointer rounded-xl hover:shadow-2xl">
                <div>
                    <p className="flex items-center justify-center gap-3 "><MdOutlineViewList />  Enrolled Classes</p>
                    <p className="flex items-center justify-center gap-3 "><FaCcPaypal />  Payment History</p> 
                </div>
            </div>
            </Link>
        </div>
    );
};

export default StudentDashboard;