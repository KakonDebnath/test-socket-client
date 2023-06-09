import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { FaTrashAlt, FaUser, FaUserCog } from "react-icons/fa"
import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import useAxiosSecure from "../../../hooks/useAxios";



const ManageUsers = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    })
    console.log(users);
    const remainingUsers = users.filter(dbUser => dbUser.email !== user.email)
    return (
        <div>
            <div className="  bg-white rounded-lg">
                <h2 className="uppercase font-bold">total user: {remainingUsers.length} </h2>
                <div className="">
                    <div className="overflow-x-auto w-full">
                        {
                            remainingUsers && Array.isArray(remainingUsers) && remainingUsers.length > 0 ? <>
                                <table className="table w-full text-center">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Roll</th>
                                            <th>Make Admin</th>
                                            <th>Make Instructor</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            remainingUsers?.map((user,i)=> <tr key={user._id}>
                                                <th>{i+1}</th>
                                                <td>{user?.name}</td>
                                                <td>{user?.email}</td>
                                                <td>{user?.role || "user"}</td>
                                                <td>
                                                    <button className="text-yellow-500"
                                                    ><FaUserCog size={20}></FaUserCog></button>
                                                </td>
                                                <td>
                                                    <button className="text-blue-500"><FaUser size={20}></FaUser></button>
                                                </td>
                                                <td>
                                                    <button className="text-red-500"><FaTrashAlt size={20}></FaTrashAlt></button>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </> : 
                            <>
                            <EmptyState message="No Users Found"></EmptyState>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;