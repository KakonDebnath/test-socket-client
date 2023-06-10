import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
    const {user, loading} = useAuth();
    const {data: isUserRole, isLoading: isUserRoleLoading} = useQuery({
        queryKey: ['isUserRole', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/users/role/${user?.email}`);
            return result.data.role;
        }
    })
    return [isUserRole, isUserRoleLoading]

}
export default useRole;