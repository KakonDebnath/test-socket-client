import axios from "axios";
import { useForm } from "react-hook-form";


const SslPayments = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const url = `${import.meta.env.VITE_API_URL}/payment/order`
    const onSubmit = (data) => {
        console.log(data)
        axios.post(url, data)
        .then(response=>{
            console.log(response);
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="Enter Your Name" {...register("name")} />
            <input placeholder="Enter Your Email" {...register("email")}
             />
            <input placeholder="Fee" {...register("amount")}/>

            

            <input type="submit" />
        </form>
    );
};

export default SslPayments;