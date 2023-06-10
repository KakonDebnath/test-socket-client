
import { FaPencilAlt } from 'react-icons/fa';
import EmptyState from '../../../components/Shared/EmptyState/EmptyState';

const MyClassesCard = ({ classes }) => {
    console.log(classes);
    return (
        <div className="overflow-x-auto">
            {
                classes && Array.isArray(classes) && classes.length > 0 ?
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-base-300'>
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
                                    <tr key={i} className='transition-all duration-300 hover:bg-base-200'>
                                        <td>{i + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='capitalize'>{singleClass?.className}</td>
                                        <td className='text-center'>{singleClass?.availableSeats}</td>
                                        <td>$ {singleClass?.price}</td>
                                        <td className={`capitalize`}>
                                            <p className={`text-white text-center rounded-lg ${singleClass?.status === "pending" ? "bg-yellow-500" : singleClass?.status === "approved" ? "bg-green-500" : "bg-red-500 "}`}>{singleClass?.status}</p>
                                        </td>
                                        <td className='text-center'>{singleClass?.totalEnrolledStudent || 0}</td>
                                        <td>
                                            <p className={`${singleClass?.adminFeedback && " text-center font-bold text-black "}`}>
                                                {singleClass?.adminFeedback || "Not Available"}
                                            </p>
                                        </td>
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
                    :
                    <>
                        <EmptyState message={"No Data Available"}></EmptyState>
                    </>
            }
        </div>
    );
};

export default MyClassesCard;