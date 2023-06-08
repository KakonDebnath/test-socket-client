import { Link } from "react-router-dom";
import CardBtn from "../../../components/Button/CardBtn";
import useSelectedClass from "../../../hooks/useSelectedClass";
import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClass();
    console.log(selectedClasses);
    const handleDelete = (id) => {
        console.log("Clicked", id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/selectedClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!'
                              })
                        }
                    })
            }
        })
    }
    return (
        <>
            <h2 className="text-center text-2xl underline pb-5">My Selected Class</h2>
            {
                selectedClasses && Array.isArray(selectedClasses) && selectedClasses.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center mx-auto">
                        {
                            selectedClasses?.map(classes=><div key={classes._id} className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img className="max-w-xs object-cover max-h-52 " src={classes?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{classes?.className}</h2>
                                <div className="flex  justify-between items-center">
                                    <div>
                                        <h3 className="font-bold">Instructor Name:</h3>
                                        <p>{classes?.instructorName}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Price: $ {classes?.price}</p>
                                        <p>Available Seats: 20</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-between">
                                    <Link to="/dashboard/payment"><CardBtn style={"from-cyan-500 to-blue-500"}>Pay Now</CardBtn></Link>
                                    <CardBtn handleClickBtn={() => handleDelete(classes?._id)} style={"from-red-500 to-yellow-500"}>Delete Class</CardBtn>
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                    :
                    <EmptyState message={"No Data Available"}></EmptyState>
            }

        </>
    );
};

export default MySelectedClasses;