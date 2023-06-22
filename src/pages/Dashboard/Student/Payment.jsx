import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);


const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectItem = searchParams.get("selectClass");
    const selectClass = JSON.parse(selectItem);
    return (
        <div>
            <h2 className="text-center text-md md:text-2xl mb-10 underline">Complete Payment Now!</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={selectClass.price} selectClass={selectClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;