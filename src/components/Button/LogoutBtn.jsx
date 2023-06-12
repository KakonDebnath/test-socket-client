
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutBtn = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    return (
        <button onClick={() => {
            logOut().then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate("/");
            })
        }} className="btn btn-ghost"> <FaSignOutAlt></FaSignOutAlt> Sign Out</button>
    );
};

export default LogoutBtn;