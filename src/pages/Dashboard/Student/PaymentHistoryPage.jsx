
import EmptyState from "../../../components/Shared/EmptyState/EmptyState";
import usePayments from "../../../hooks/usePayments";
import dateFormat from "dateformat";


const PaymentHistoryPage = () => {
    const [paymentData] = usePayments();
    console.log(paymentData);
    return (
        <div>
            <h2 className="text-center text-2xl mb-5 underline">My Payment History</h2>
            {
                paymentData && Array.isArray(paymentData) && paymentData.length > 0 ?
                    <>
                        <div className="overflow-x">
                            <table className="table text-base">
                                {/* head */}
                                <thead>
                                    <tr className="">
                                        <th>#</th>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Transaction Id</th>
                                        <th>Purchase Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        paymentData?.map((payment,i)=> 
                                        <tr key={payment._id}>
                                            <td>{i+1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={payment.itemImage} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h3>{payment.itemName}</h3>
                                            </td>
                                            <td>
                                                <h3>{payment.price}</h3>
                                            </td>
                                            <td>
                                                <p>{payment.transactionId}</p>
                                            </td>
                                            <td>
                                                {dateFormat(payment.date, "dddd, mmmm dd, yyyy ")}
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </> :
                    <>
                        <EmptyState message={"Nodata Available"}></EmptyState>
                    </>
            }

        </div>
    );
};

export default PaymentHistoryPage;