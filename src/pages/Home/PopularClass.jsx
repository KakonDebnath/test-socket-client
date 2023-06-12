import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import EmptyState from "../../components/Shared/EmptyState/EmptyState";
import {Zoom} from "react-awesome-reveal";

const PopularClass = () => {
    const { data: popularClasses = [] } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/popularClasses`)
            if (response) {
                console.log(response.data);
            }
            return response.data;
        },
    })
    return (
        <>
            <SectionTitle subheading="best course" heading="Popular classes" imgUrl={'https://i.ibb.co/b2HfD18/class-23.jpg'}></SectionTitle>
            {
                popularClasses && Array.isArray(popularClasses) && popularClasses.length > 0 ?
                    
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 px-3 md:px-10 mt-10">
                            {
                                popularClasses?.map(popularClass =>
                                    <div key={popularClass._id} className="card card-compact w-full md:w-96 border border-gray-100 shadow-lg hover:shadow-2xl transition-all" style={{ height: '100%' }}>
                                        <figure style={{ height: '50%' }}>
                                        <Zoom>
                                            <img src={popularClass?.image} alt="Shoes" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                        </Zoom>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{popularClass?.className}</h2>
                                            <div className="md:flex justify-around">
                                                <div className="text-md">
                                                    <h2 className="underline text-blue-500">Instructor:</h2>
                                                    <h3>{popularClass?.instructorName}</h3>
                                                    <p>{popularClass?.email}</p>
                                                </div>
                                                <div className="">
                                                    <h2 className="underline text-blue-500 ">Class Details:</h2>
                                                    <h3>Price: $ {popularClass?.price}</h3>
                                                    <p>Available Seats: {popularClass?.availableSeats}</p>
                                                    <p>Total Enrolled Students: {popularClass?.totalEnrolledStudent}</p>
                                                </div>
                                            </div>
                                            <div className="card-actions justify-center">
                                                <button className="btn btn-sm btn-info mt-5">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    
                    :
                    <EmptyState message={"No Data Available"}></EmptyState>
            }
        </>
    );
};

export default PopularClass;