import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useClasses = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { refetch, isLoading, data:classes = []} = useQuery({
        queryKey: ['classes', user?.email],
        // enabled: !loading,
        queryFn: async ()=>{
            const response = await axiosSecure(`/classes?email=${user?.email}`)
            console.log(response.data);
            return response.data;
        }
      })
      return [classes, refetch, isLoading]
}

export default useClasses;