import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import InstructorCard from "./InstructorCard";
import axios from "axios";
import EmptyState from "../../components/Shared/EmptyState/EmptyState";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Instructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/allInstructors`);
            if (response) {
                console.log(response.data);
            }
            return response.data;
        }
    })



    return (
        <div className="">
            <Navbar />
            <div className="pt-20 ">
            <SectionTitle heading={"Meet Our Instructors"} subheading={"experienced"} imgUrl={"https://i.ibb.co/M6vsrJP/class-3.jpg"}></SectionTitle>
            </div>
            {
                instructors && Array.isArray(instructors) && instructors.length > 0 ? 
                <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-10 py-10">
                    {
                        instructors?.map(instructor => <InstructorCard key={instructor?._id} instructor={instructor} />)
                    }
                    
                </div>
                </> : 
                <>
                <EmptyState message={"No instructors found"}></EmptyState>
                </>
            }
            <Footer />
        </div>
    );
};

export default Instructors;