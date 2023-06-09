import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useAllClasses = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    

    const { refetch, isLoading : adminClassLoading, data:adminClasses = []} = useQuery({
        queryKey: ['adminClasses', user.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await axiosSecure.get("/admin/classes")
            // console.log("admin all classes",response.data);
            return response.data;
        }
      })


      return [
        adminClasses, 
        refetch,
        adminClassLoading
    ]
}

export default useAllClasses;