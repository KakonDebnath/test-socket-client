import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="flex flex-col justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg text-info"></span>
        </div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    }
};

export default PrivateRoute;