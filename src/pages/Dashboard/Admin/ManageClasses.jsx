
import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import useAxiosSecure from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useAllClasses from "../../../hooks/useAllClasses";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCheck, FaTimes, FaRegCommentDots } from "react-icons/fa";


const ManageClasses = () => {
   const [adminClasses, refetch] = useAllClasses()
   const [axiosSecure] = useAxiosSecure();
   const [feedbackUpdateId, setFeedbackUpdateId] = useState("");
   // console.log(adminClasses);

   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
      // console.log(data, feedbackUpdateId, data)
      axiosSecure.patch(`/admin/feedback/${feedbackUpdateId}`,data)
               .then(res => {
                  if (res.data.modifiedCount > 0) {
                     refetch();
                     Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Send to Instructor',
                        showConfirmButton: false,
                        timer: 1500
                     })
                     window.feedbackModal.close();
                  }
               })
   };


   // handleApproved btn
   const handleIsApproved = (id, status) => {
      // console.log(id);
      Swal.fire({
         title: 'Are you sure?',
         // text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#36D399',
         cancelButtonColor: '#d33',
         confirmButtonText: `You want to ${status} this`
      }).then((result) => {
         if (result.isConfirmed) {
            axiosSecure.patch(`/admin/classes/${id}`, { status: status })
               .then(res => {
                  console.log(res.data)
                  if (res.data.modifiedCount > 0) {
                     refetch();
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
   // // handleDeny btn
   // const handleDeny = (id) => {
   //    console.log(id);
   //    Swal.fire({
   //       title: 'Are you sure?',
   //       // text: "You won't be able to revert this!",
   //       icon: 'warning',
   //       showCancelButton: true,
   //       confirmButtonColor: '#d33',
   //       cancelButtonColor: '#36D399',
   //       confirmButtonText: 'Yes, Deny it!'
   //    }).then((result) => {
   //       if (result.isConfirmed) {
   //          axiosSecure.patch(`/admin/classes/${id}`, { status: "denied" })
   //             .then(res => {
   //                console.log(res.data)
   //                if (res.data.modifiedCount > 0) {
   //                   refetch();
   //                   Swal.fire({
   //                      position: 'center',
   //                      icon: 'success',
   //                      title: 'Successfully Updated',
   //                      showConfirmButton: false,
   //                      timer: 1500
   //                   })
   //                }
   //             })
   //       }
   //    })
   // }
   const handleFeedback = (id) => {
      window.feedbackModal.showModal();
      // console.log(id);
      setFeedbackUpdateId(id)
   };


   return (
      <>
         <h2 className="text-center text-3xl underline py-3">Manage Classes </h2>

         {

            adminClasses && Array.isArray(adminClasses) && adminClasses.length > 0 ?
               <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-3  gap-2 md:gap-5 mb-10 px-0 md:px-3">
                  {
                     adminClasses?.map(adClass =>
                        <div key={adClass._id} className={`class-card rounded-xl shadow-lg hover:shadow-2xl transition-all border-gray-100 border `}>
                           <img className="w-full max-h-[200px] rounded-t-xl" src={adClass?.image} />
                           <div className="p-4">
                              <h2 className="text-lg font-bold mb-2 capitalize">{adClass?.className} </h2>
                              <p className="mb-2">Author: {adClass?.instructorName}</p>
                              <p className="mb-2 text-sm">Email: {adClass?.email}</p>
                              <div className="flex justify-between items-center">
                                 <p className="mb-2">Available Seats: {adClass?.availableSeats} </p>
                                 <p className="mb-2">Price: $ {adClass?.price}</p>
                              </div>
                              <p>Status: <span className={`capitalize text-white text-xs px-2 py-1 rounded-lg ${adClass?.status === "pending" ? "bg-yellow-500" : adClass?.status === "approved" ? "bg-green-500" : "bg-red-500 "}`}>{adClass?.status}</span></p>
                           </div>
                           <div className="flex flex-row justify-center items-center px-5 py-2 md:py-5 gap-2">

                              <button disabled={adClass.status === "approved" || adClass.status === "denied"} onClick={() => handleIsApproved(adClass._id,"approved")} className="btn btn-sm btn-success"><FaCheck size={20} /></button>
                              <button className="btn btn-sm btn-warning" onClick={() => handleFeedback(adClass._id)}><FaRegCommentDots size={20} /></button>
                              <button disabled={adClass.status === "approved" || adClass.status === "denied"}
                                 onClick={() => handleIsApproved(adClass._id, "denied")} className="btn btn-sm btn-error"><FaTimes size={20} /></button>
                           </div>
                        </div>

                     )

                  }

                  {/* Feedback modal You can open the modal using ID.showModal() method */}

                  <dialog id="feedbackModal" className="modal">
                     <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box w-9/12 md:w-6/12 ">
                        <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.feedbackModal.close()}>✕</button>
                        <h3 className="font-bold text-lg text-center py-5">Hello!</h3>
                        <input {...register("feedback", { required: true })} type="text" placeholder="Type here" className="input input-bordered input-info w-full mb-10" />
                        <button type="submit" className="btn btn-sm text-white btn-info relative left-1/2 -translate-x-1/2" defaultValue="">Feedback Send</button>
                     </form>
                  </dialog>
               </div>
               :
               <>
                  <EmptyState message={"No data Available"}></EmptyState>
               </>
         }


      </>
   );
};

export default ManageClasses;