import { FaPencilAlt, FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxios";
import useAllClasses from "../../../hooks/useAllClasses";


const AdminDashboard = () => {
    const [adminClasses] = useAllClasses()
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    })
    const instructors = users.filter(ins=>ins.role === "instructor")
    const students = users.filter(ins=>ins.role !== 'admin' && ins.role !== 'instructor')
    const approvedClasses = adminClasses.filter(approvedClass => approvedClass.status === "approved");
    const pendingClasses = adminClasses.filter(pendingClass => pendingClass.status === "pending");
    const deniedClasses = adminClasses.filter(deniedClass => deniedClass.status === "denied");
    // console.log(students);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-10">
            <Link to="/dashboard/manageUsers">
                <motion.div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white flex justify-center items-center h-40 md:h-72 cursor-pointer rounded-xl hover:shadow-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="flex items-center justify-center gap-3 "><FaUsers />  All Users: {users?.length}</p>
                        <p className="flex items-center justify-center gap-3 "><FaUser />  Total Instructor {instructors?.length}</p>
                        <p className="flex items-center justify-center gap-3 "><FaUser />  Total Student {students?.length}</p>
                    </div>
                </motion.div>
            </Link>

            <Link to="/dashboard/manageClasses">
                <motion.div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-blue-400 text-2xl text-white flex justify-center items-center h-40 md:h-72 cursor-pointer rounded-xl hover:shadow-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="flex items-center justify-center gap-3 "><MdOutlineViewList />  Total Approved Class {approvedClasses?.length}</p>
                        <p className="flex items-center justify-center gap-3 "><MdOutlineViewList />  Total Denied Class {deniedClasses?.length}</p>
                        <p className="flex items-center justify-center gap-3  "><FaPencilAlt />  Pending Class {pendingClasses?.length}</p>
                    </div>
                </motion.div>
            </Link >
        </div >
    );
};

export default AdminDashboard;