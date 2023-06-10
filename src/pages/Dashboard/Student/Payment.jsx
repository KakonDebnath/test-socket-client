import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);


const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const price = parseFloat(searchParams.get("price"));
    return (
        <div>
            Payment

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;