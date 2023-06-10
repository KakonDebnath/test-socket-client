import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";


const SignUp = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, errorMsg, setErrorMsg } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    const onSubmit = (data) => {
        setErrorMsg("")
        createUser(data?.email, data?.password)
            .then((result) => {
                console.log(result.user);
                if (result.user) {
                    updateUserProfile(data?.name, data?.photo)
                        .then(() => {
                            const savedUser = {
                                name: data?.name, email: data?.email, image: data?.photo
                            }
                            fetch(`${import.meta.env.VITE_API_URL}/users`, {
                                method: 'PUT',
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify(savedUser)
                            }).then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.modifiedCount >= 0 || data.upsertedCount >= 0) {
                                        reset();
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Registration Successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate(from, { replace: true });
                                    }
                                })
                        })
                }

            })
            .catch((err) => {
                if (err) {
                    console.log(err.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${err.message}`,
                    })
                }
            })
    };


    return (
        <div className="hero min-h-screen bg-base-200 w-full">

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-5/12">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Sign UP Now!</h1>
                    <img className="w-2/4 md:w-1/2 lg:w-full mx-auto" src="https://i.ibb.co/ChhB5TN/Lovepik-com-401480219-cartoon-boy-drawing.png" alt="" />
                </div>

                <div className="card flex-shrink-0 md:w-5/12 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        {
                            errorMsg && <div className="alert alert-warning shadow-lg">
                                <div>
                                    <span>{errorMsg}</span>
                                </div>
                            </div>
                        }
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        {...register("password", {
                                            required: true,
                                            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()])[\w!@#$%^&*()]{8,}$/,
                                        })}
                                    />
                                    {errors.password && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                    {errors.password?.type === 'pattern' && (
                                        <span className="text-red-500">
                                            Password must contain at least one uppercase letter and one special character.
                                        </span>
                                    )}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="confirm password"
                                        className="input input-bordered"
                                        {...register("confirmPassword", {
                                            required: true,
                                            validate: (value) => value === watch('password'),
                                        })}
                                    />
                                    {errors.confirmPassword && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                    {errors.confirmPassword?.type === 'validate' && (
                                        <span className="text-red-500">Passwords do not match</span>
                                    )}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                            </div>






                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input placeholder="Photo URL" className="input input-bordered" {...register("photo")} />
                            </div>

                            <div className="form-control mt-6 w-1/2 mx-auto">
                                <button type="submit" className="btn btn-warning">Sign Up Now!</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">All ready registered? <Link to="/login"><span className="hover:font-bold">Log in hare</span></Link></p>
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

export default SignUp;