import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {    

    const { refetch, isLoading : adminUserLoading, data:allUsers = []} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async ()=>{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/chat/allUsers`)
            // console.log("admin all classes",response.data);
            return response.data;
        }
      })


      return [
        allUsers, 
        refetch,
        adminUserLoading
    ]
}

export default useAllUsers;