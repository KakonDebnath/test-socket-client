
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser?.displayName, email: loggedInUser?.email }
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div className='space-y-3'>
            <div>
                <p className="text-center">Or sign in with</p>
            </div>
            <div className="flex justify-center gap-5 md:w-1/2 w-full mx-auto ">
                <button onClick={handleGoogleSignIn} className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGoogle></FaGoogle></button>
                <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaGithub></FaGithub></button>
                <button className="border-2 border-black p-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"><FaFacebook></FaFacebook></button>
            </div>
        </div>
    );
};

export default SocialLogin;