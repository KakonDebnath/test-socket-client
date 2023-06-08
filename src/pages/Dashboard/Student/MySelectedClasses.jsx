import { Link } from "react-router-dom";
import CardBtn from "../../../components/Button/CardBtn";

const MySelectedClasses = () => {
    const handleDelete = () => {
        console.log("Clicked");
    }
    return (
        <div>
            <h2 className="text-center text-2xl underline pb-5">My Selected Class</h2>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/1TcDxs1/class-18.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name</h2>
                    <div className="flex  justify-between items-center">
                        <div>
                            <h3 className="font-bold">Instructor Name:</h3>
                            <p>Md Kamal Hossain</p>
                        </div>
                        <div>
                            <p className="font-bold">Price: $ 199</p>
                            <p>Available Seats: 20</p>
                        </div>
                    </div>
                    <div className="card-actions justify-between">
                        <Link to="/dashboard/payment"><CardBtn style={"from-cyan-500 to-blue-500"}>Pay Now</CardBtn></Link>
                        <CardBtn handleClickBtn={()=>handleDelete()} style={"from-red-500 to-yellow-500"}>Delete Class</CardBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClasses;