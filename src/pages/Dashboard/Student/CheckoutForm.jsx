import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxios";
import './CheckoutForm.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ price, selectClass }) => {
    console.log(selectClass);
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const { user, btnLoading, setBtnLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setBtnLoading(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        // console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            setBtnLoading(false)
            setTransactionId(paymentIntent.id);

            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                itemId: selectClass.selectedClassId,
                itemImage: selectClass.image,
                itemName: selectClass.className,
                instructorEmail: selectClass.instructorEmail,
            }
            console.log(payment);
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        axiosSecure
                            .delete("/payment/selectedClass", {
                                params: {
                                    email: user?.email,
                                    selectedId: selectClass?.selectedClassId
                                }
                            })
                            .then(res => {
                                console.log("successfully removed", res.data);
                                Swal.fire(
                                    'Good job!',
                                    'Your Payment Successfully Done!',
                                    'success'
                                )
                                navigate("/dashboard/paymentHistory");
                            })
                    }
                })
        }


    }

    return (
        <>
            <form className="" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-center mt-5 md:mt-10">
                    <button className="btn btn-primary btn-sm md:btn-md px-5 md:px-10 " type="submit" disabled={!stripe || !clientSecret || btnLoading}>
                        {btnLoading ? <>Pay Now <span className="loading loading-spinner text-primary"></span></> : "Pay Now"}
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500 text-center text-xl">Your purchase has been confirmed! With TransactionId: {transactionId}</p>

            }
        </>
    );
};

export default CheckoutForm;