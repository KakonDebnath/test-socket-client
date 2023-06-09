import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import useClasses from "../../../hooks/useClasses";


const ManageClasses = () => {
   const [, adminClasses] = useClasses();
   console.log(adminClasses);
   return (
      <>
         manageClasses

         {
            adminClasses && Array.isArray(adminClasses) && adminClasses.length > 0 ?
               <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-3  gap-2 mb-10 px-0 md:px-3">
                  {
                     adminClasses?.map(adClass =>
                        <div key={adClass._id} className={`class-card rounded-xl shadow-lg hover:shadow-2xl transition-all `}>
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
                           <div className="flex flex-col md:flex-row justify-between items-center px-5 py-2 md:py-5 gap-2">
                              <button className="btn btn-sm btn-success">Approved</button>
                              <button className="btn btn-sm btn-warning">Send Feedback</button>
                              <button className="btn btn-sm btn-error">Deny</button>
                           </div>
                        </div>)
                  }
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