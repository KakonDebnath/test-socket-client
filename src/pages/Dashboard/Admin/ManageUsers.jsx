import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa"
import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import useAxiosSecure from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useRole from "../../../hooks/useRole";



const ManageUsers = () => {
    const [, roleRefetch] = useRole()
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    })
    console.log(users);
    // Handle Change role for users 
    const handleUserRoleChange = (email, role) => {
        console.log(email);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#36D399',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes Make ${role} Now!`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/admin/role/${email}`, { role: role })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            roleRefetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Successfully Updated',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        })
    }





    return (
        <div>
            <div className="  bg-white rounded-lg">
                <h2 className="text-center text-3xl underline py-3">Manage User </h2>
                <h2 className="uppercase font-bold">total user: {users.length} </h2>
                <div className="overflow-x-auto w-full">
                    {
                        users && Array.isArray(users) && users.length > 0 ? <>
                            <table className="table w-full text-center text-sm md:text-base text-black capitalize">
                                {/* head */}
                                <thead>
                                    <tr className="text-base bg-base-300">
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
                                        users?.map((user, i) =>
                                            <tr key={user._id} className="hover:bg-base-200 transition-all">
                                                <th>{i + 1}</th>
                                                <td className="text-left">{user?.name}</td>
                                                <td className="text-left lowercase">{user?.email}</td>
                                                <td className={`capitalize ${user?.role === "admin" && "text-red-500 font-bold"} ${user?.role === "instructor" && "text-green-500 font-bold"}`}>{user?.role || "Student"}</td>
                                                <td>
                                                    <button onClick={() => handleUserRoleChange(user?.email, "admin")} disabled={user?.role === "admin"} className="btn btn-success btn-sm"
                                                    >Make Admin</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleUserRoleChange(user?.email, "instructor")} disabled={user?.role === "instructor"} className="btn btn-info btn-sm">Make Instructor</button>
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
    );
};

export default ManageUsers;