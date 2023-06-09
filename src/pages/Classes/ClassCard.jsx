import Swal from "sweetalert2";
import CardBtn from "../../components/Button/CardBtn";
import useAxiosSecure from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const ClassCard = ({ aClass, refetch }) => {
  // console.log(aClass);
  const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth();
  const navigate = useNavigate();

  const handelSelectClick = (item) => {
    console.log(item);

    if (user && user.email) {
      const selectedClass = {
        selectedClassId: item._id,
        image: item.image,
        className: item.name,
        available_seats: item.availableSeats,
        instructorName: item.instructorName,
        instructorEmail: item.email,
        paymentStatus: "unpaid",
        price: item.price,
        status: item.status,
        email: user.email,
        isSelected: "selected"
      }

      axiosSecure.post("/selectedClass", selectedClass)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Selected Class Successfully Added',
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


  const { name, instructorName, availableSeats, price, image, isSelected } = aClass;
  return (
    <div className={`class-card p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all  `}>
      <img className="w-full" src={image} />
      <h2 className="text-lg font-bold mb-2">Class Name: {name}</h2>
      <p className="mb-2">Instructor: {instructorName}</p>
      <p className="mb-2">Available Seats: {availableSeats}</p>
      <p className="mb-2">Price: ${price}</p>
      <CardBtn isSelected={isSelected} handleClickBtn={() => handelSelectClick(aClass)} style={"from-cyan-500 to-blue-500"} >Select Class</CardBtn>
    </div>
  );
};

export default ClassCard;
