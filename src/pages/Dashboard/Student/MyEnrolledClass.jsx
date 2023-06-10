import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import usePayments from "../../../hooks/usePayments";
import dateFormat from "dateformat";


const MyEnrolledClass = () => {
    const [paymentData] = usePayments();
    console.log(paymentData);
    return (
        <div>
            myEnrolledClass
            {
                paymentData && Array.isArray(paymentData) && paymentData.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            paymentData?.map(payment =>
                                <div key={payment._id} className="card w-full md:w-96 bg-base-100 shadow-xl">
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