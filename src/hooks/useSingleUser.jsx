import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useSingleUser = () => {
    const {user, loading} = useAuth();
    const {data: singleUser} = useQuery({
        queryKey: ['singleUser', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/chat/singleUser/${user?.email}`);
            return result.data;
        }
    })
    return [singleUser]

}
export default useSingleUser;