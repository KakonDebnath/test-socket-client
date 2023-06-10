import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxios";
import CardBtn from "../../../components/Button/CardBtn";




const AddClass = () => {
    const [axiosSecure] = useAxiosSecure() 
    const imgbbApiKey = import.meta.env.VITE_IMGBB_APIKEY;
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`
    const {user} = useAuth()
    const { register, handleSubmit, reset, } = useForm();
  const onSubmit = async data => {
    console.log(data)
    data.price = parseFloat(data.price);
    data.availableSeats = parseFloat(data.availableSeats);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    const imgUrl = res.data.display_url;
                    data.image = imgUrl;
                    data.status= "pending";
                    console.log(data);
                    axiosSecure.post("/addClass", data)
                        .then(result => {
                            console.log(result.data);
                            if (result.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
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
};
    return (
        <div>
            <h2 className="text-center text-3xl underline py-3">Add A Class</h2>
            <div className="w-full px-5 md:px-10 lg:px-20">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="className" className="block text-gray-700 font-bold mb-2">Class Name:</label>
                    <input {...register("className", { required: true })} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter class name" />
                </div>

                <div className="mb-4">
                    <label htmlFor="classImage" className="block text-gray-700 font-bold mb-2">Class Image:</label>
                    <input {...register("image", { required: true })} type="file" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">Instructor Name:</label>
                    <input {...register("instructorName", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={user?.displayName} readOnly />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">Instructor Email:</label>
                    <input {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={user?.email} readOnly />
                </div>

                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">Available Seats:</label>
                    <input {...register("availableSeats", { required: true })} type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter available seats" />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                    <input {...register("price", { required: true })} type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter price" />
                </div>

                <button className="btn btn-info text-white">Add A Class</button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;