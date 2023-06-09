import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import ClassCard from "./ClassCard";
import axios from "axios";
import EmptyState from "../../components/Shared/EmptyState/EmptyState";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Classes = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [axiosSecure] = useAxiosSecure()
  const [disabled, setDisabled] = useState(false);
  const { refetch, data: allClasses = [] } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/allClasses`)
      if (response) {
        console.log(response.data);
      }
      return response.data;
    },
  })

  console.log(allClasses);




  const handelSelectClick = (item) => {
    console.log(item);

    if (user && user.email) {
      const selectedClass = {
        selectedClassId: item._id,
        image: item.image,
        className: item.className,
        available_seats: item.availableSeats,
        instructorName: item.instructorName,
        instructorEmail: item.email,
        paymentStatus: "unpaid",
        price: item.price,
        status: item.status,
        email: user.email,
        isSelected: "selected"
      }
      console.log(selectedClass);
      axiosSecure.post("/selectedClass", selectedClass)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Selected Class Successfully Added',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Yor Are All ready Selected the class',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }).catch((err) => {
          console.log(err);
        })
    } else {
      Swal.fire({
        title: 'Please Login first to Select A Class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      })
    }
  }

  return (
    <>
      <Navbar />

      {
        allClasses && Array.isArray(allClasses) && allClasses.length > 0 ?
          <div className="pt-24 grid grid-cols-1 md:grid-cols-4  gap-5 mb-10 px-10">
            {
              allClasses?.map(singleClass => <div key={singleClass._id} className={`class-card p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all  `}>
                <img className="w-full max-h-[200px]" src={singleClass?.image} />
                <h2 className="text-lg font-bold mb-2">Class Name: {singleClass?.name}</h2>
                <p className="mb-2">Instructor: {singleClass?.instructorName}</p>
                <p className="mb-2">Available Seats: {singleClass?.availableSeats}</p>
                <p className="mb-2">Price: ${singleClass?.price}</p>
                <button
                  disabled={disabled}
                  onClick={() => handelSelectClick(singleClass)}
                  className={`bg-gradient-to-b text-white px-5 py-2 rounded-xl from-cyan-500 to-blue-500 transition-all hover:from-blue-500 hover:to-cyan-500`} >Select Class</button>
              </div>)
            }
          </div>
          :
          <EmptyState message={"No Data Available"}></EmptyState>
      }
      <Footer />
    </>
  );
};

export default Classes;