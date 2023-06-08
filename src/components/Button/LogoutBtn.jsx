
import useAuth from '../../hooks/useAuth';

const LogoutBtn = () => {
    const {logOut} = useAuth()
    return (
        <button onClick={() => logOut()} className="btn btn-ghost">Sign Out</button>
    );
};

export default LogoutBtn;