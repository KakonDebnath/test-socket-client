import { Slide } from "react-awesome-reveal";
import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import usePayments from "../../../hooks/usePayments";
import dateFormat from "dateformat";


const MyEnrolledClass = () => {
    const [paymentData] = usePayments();
    // console.log(paymentData);
    return (
        <div>
            <h2 className="text-center text-2xl py-10 underline">My Enrolled Classes</h2>
            {
                paymentData && Array.isArray(paymentData) && paymentData.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                        {
                            paymentData?.map(payment =>
                                <Slide key={payment._id} >
                                <div className="card w-full md:w-96 border border-gray-50 shadow-xl mb-10">
                                    <figure><img src={payment.itemImage} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {payment.itemName}
                                        </h2>
                                        <p className="text-xs md:text-sm lg:text-base">Instructor: {payment.instructorEmail}</p>
                                        <h2>Price: ${payment.price}</h2>
                                        <h2>Putsches Date: {dateFormat(payment.date, "dddd, mmmm dd, yyyy ")}</h2>
                                    </div>
                                </div>
                                </Slide>
                            )
                        }
                    </div> :
                    <>
                        <EmptyState message={"Nodata Available"}></EmptyState>
                    </>
            }

        </div>
    );
};

export default MyEnrolledClass;