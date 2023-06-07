import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        signIn(data?.email, data?.password)
            .then(res => {
                reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
                console.log(res.user);
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                  })
                console.log(err);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 w-full">

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-5/12">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Login Now!</h1>
                    <img className="w-2/4 md:w-1/2 lg:w-full mx-auto" src="https://i.ibb.co/thVcwHW/Pngtree-autumn-fall-cartoon-drawing-boy-3836413.png" alt="" />
                </div>

                <div className="card flex-shrink-0 md:w-5/12 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        {...register("password", { required: true })}
                                    />
                                    <div
                                        className="absolute top-4 right-2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </div>
                                </div>
                            </div>


                            <div className="form-control mt-6 w-1/2 mx-auto">
                                <button type="submit" className="btn btn-warning">Login</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">All ready registered? <Link to="/signUp"><span className="hover:font-bold">register now!</span></Link></p>
                            </div>
                        </form>
                        <div className="divider"></div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;