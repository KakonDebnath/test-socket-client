import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../pages/Dashboard/Instracor/AddClass";
import MyClasses from "../pages/Dashboard/Instracor/MyClasses";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses";
import Payment from "../pages/Dashboard/Student/Payment";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import MyEnrolledClass from "../pages/Dashboard/Student/MyEnrolledClass";
import PaymentHistoryPage from "../pages/Dashboard/Student/PaymentHistoryPage";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/login", element: <Login></Login> },
            { path: "/signUp", element: <SignUp></SignUp> },
            { path: "/instructors", element: <Instructors></Instructors> },
            { path: "/classes", element: <Classes></Classes> },
        ],
    },
    {
        path: "/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            { path: "mySelectedClasses", element: <PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>},
            { path: "payment", element: <PrivateRoute><Payment></Payment></PrivateRoute>},
            { path: "myEnrolledClass", element: <PrivateRoute><MyEnrolledClass></MyEnrolledClass></PrivateRoute>},
            { path: "paymentHistory", element: <PrivateRoute><PaymentHistoryPage></PaymentHistoryPage></PrivateRoute>},
            { path: "addClass", element: <InstructorRoute><AddClass></AddClass></InstructorRoute>},
            { path: "myClasses", element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>},
            { path: "manageClasses", element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>},
            { path: "manageUsers", element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>},
        ]
    }
]);
export default router;