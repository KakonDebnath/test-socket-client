import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SignUp = () => {

    return (
        <div className="hero min-h-screen bg-base-200 w-full">

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-5/12">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Sign UP Now!</h1>
                    <img className="w-2/4 md:w-1/2 lg:w-full mx-auto" src="https://i.ibb.co/ChhB5TN/Lovepik-com-401480219-cartoon-boy-drawing.png" alt="" />
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input placeholder="Name" className="input input-bordered" />
                                {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered" />
                                {/* {errors.password && <span className="text-red-500">This field is required</span>} */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                    
                                </label>
                                <select className="select select-warning w-full">
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-warning">Sign Up Now!</button>
                            </div>
                            <div>
                                <p className="text-center text-yellow-600">All ready registered? <Link to="/login"><span className="hover:font-bold">Log in hare</span></Link></p>
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