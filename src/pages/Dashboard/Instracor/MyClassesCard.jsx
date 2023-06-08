
import { FaPencilAlt } from 'react-icons/fa';
import EmptyState from '../../../components/Shared/EmptyState/EmptyState';

const MyClassesCard = ({ classes }) => {
    console.log(classes);
    return (
        <div className="overflow-x-auto">

            {
                classes && Array.isArray(classes) && classes.length > 0 ?
                    <>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Class Name</th>
                                    <th>Available Seats</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Enrolled Student</th>
                                    <th>Feedback</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    classes.map((singleClass, i) =>
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleClass?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{singleClass?.className}</td>
                                            <td>{singleClass?.availableSeats}</td>
                                            <td>$ {singleClass?.price}</td>
                                            <td>{singleClass?.status}</td>
                                            <td>{singleClass?.enrolledStudent || 0}</td>
                                            <td>{singleClass?.feedback || "Not Available"}</td>
                                            <td>
                                                <div className="tooltip hover:tooltip-open tooltip-top mx-2" data-tip="Edit Class">
                                                    <button className="text-blue-500 p-2 "><FaPencilAlt size={18}></FaPencilAlt>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>

                    </> :
                    <>
                        <EmptyState message={"No Data Available"}></EmptyState>
                    </>
            }
        </div>
    );
};

export default MyClassesCard;