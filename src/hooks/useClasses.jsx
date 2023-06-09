import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useClasses = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const { refetch, isLoading, data:insClasses = []} = useQuery({
        queryKey: ['insClasses', user.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await axiosSecure.get(`/instructor/classes?email=${user?.email}`)
            console.log("instructors class",response.data);
            return response.data;
        }
      })

    

    const { refetch :adminClassRefetch, isLoading : adminClassLoading, data:adminClasses = []} = useQuery({
        queryKey: ['adminClasses', user.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await axiosSecure.get("/admin/classes")
            console.log("admin all classes",response.data);
            return response.data;
        }
      })


      return [
        insClasses, 
        adminClasses, 
        refetch, 
        adminClassRefetch, 
        isLoading, 
        adminClassLoading
    ]
}

export default useClasses;