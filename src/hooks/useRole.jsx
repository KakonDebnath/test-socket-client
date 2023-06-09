import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useRole = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isUserRole, isLoading: isUserRoleLoading} = useQuery({
        queryKey: ['isUserRole', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const result = await axiosSecure.get(`/users/admin/${user?.email}`);
            return result.data.role;
        }
    })
    return [isUserRole, isUserRoleLoading]

}
export default useRole;