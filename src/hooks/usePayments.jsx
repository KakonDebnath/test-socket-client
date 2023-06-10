import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const usePayments = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading, data: paymentData = [] } = useQuery({
        queryKey: ['paymentData', user.email],
        enabled: !loading,
        queryFn: async() => {
            const response = await axiosSecure(`/payments?email=${user?.email}`);
            return response.data;
        }
    })
    return [paymentData, refetch, isLoading]

}

export default usePayments;