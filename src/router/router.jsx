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
            { path: "addClass", element: <PrivateRoute><AddClass></AddClass></PrivateRoute>},
            { path: "myClasses", element: <PrivateRoute><MyClasses></MyClasses></PrivateRoute>},
        ]
    }
]);
export default router;