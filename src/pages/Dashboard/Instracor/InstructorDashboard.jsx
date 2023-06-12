import { FaListUl } from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";
import { Link } from "react-router-dom";


const InstructorDashboard = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <Link to="/dashboard/addClass">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white cursor-pointer rounded-xl hover:shadow-2xl md:h-64 h-40 flex justify-center items-center ">
                    <p className="flex items-center justify-center gap-3 "><FaListUl />  Add A Class</p>
                </div>
            </Link>
            <Link to="/dashboard/myClasses">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white cursor-pointer rounded-xl hover:shadow-2xl md:h-64 h-40 flex justify-center items-center ">
                    <div>
                        <p className="flex text-2xl items-center gap-5 "><MdOutlineViewList />  My Classes</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default InstructorDashboard;