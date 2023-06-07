import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/404.json";
import Button from "../../components/Button/Button";

const ErrorPage = () => {
    return (
        <>
            <Lottie className="h-[90vh]" animationData={animationData} loop={true} />
            <Link className="flex justify-center" to="/">
                <Button>{"Back To Home"}</Button>
            </Link>
        </>
    );
};

export default ErrorPage;