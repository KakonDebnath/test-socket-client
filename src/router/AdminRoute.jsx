import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isUserRole] = useRole();
    // console.log(isUserRole);
    const location = useLocation();

    if ( loading) {
        return <div className="flex flex-col justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg text-info"></span>
        </div>
    }

    if( user && isUserRole == "admin"){
        return children;
    }else {
        return <Navigate to="/dashboard/adminHome" state={{ from: location }} replace={true}></Navigate>
    }
};

export default AdminRoute;