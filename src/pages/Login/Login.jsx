import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SignUp = () => {

    return (
        <div className="hero min-h-screen bg-base-200 w-full">

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-5/12">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Login Now!</h1>
                    <img className="w-2/4 md:w-1/2 lg:w-full mx-auto" src="https://i.ibb.co/thVcwHW/Pngtree-autumn-fall-cartoon-drawing-boy-3836413.png" alt="" />
                </div>

                <div className="card flex-shrink-0 md:w-5/12 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        {/* {
                            errorMsg && <div className="alert alert-warning shadow-lg">
                                <div>
                                    <BiError size={24}></BiError>
                                    <span>{errorMsg}</span>
                                </div>
                            </div>
                        } */}
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input placeholder="email" className="input input-bordered" />
                                {/* {errors.email && <span className="text-red-500">This field is required</span>} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                {/* {errors.password && <span className="text-red-500">This field is required</span>} */}
                            </div>
                            

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-warning">Login</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">All ready registered? <Link to="/signUp"><span className="hover:font-bold">register now!</span></Link></p>
                            </div>
                        </form>
                        <div className="divider"></div>
                        <div>
                            <p className="text-center">Or sign in with</p>
                        </div>
                        <div className="flex justify-center gap-10 md:w-1/2 w-full mx-auto ">

                            <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGoogle></FaGoogle></button>
                            <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGithub></FaGithub></button>
                            <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaFacebook></FaFacebook></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;