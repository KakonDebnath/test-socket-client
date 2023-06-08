import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import ClassCard from "./ClassCard";
import axios from "axios";
import EmptyState from "../../components/Shared/EmptyState/EmptyState";


const Classes = () => {
  const { isLoading, isError, data: allClasses = [], error } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const response = await axios(`${import.meta.env.VITE_API_URL}/allClasses`)
      return response.data;
    },
  })

  return (
    <>
      <Navbar />

      {
        allClasses && Array.isArray(allClasses) && allClasses.length > 0 ?
          <div className="pt-24 grid grid-cols-1 md:grid-cols-4  gap-5 mb-10 px-10">
            {
              allClasses?.map(singleClass=><ClassCard key={singleClass?._id} aClass={singleClass}></ClassCard>)
            }
          </div> 
          :
          <EmptyState message={"No Data Available"}></EmptyState>
      }
      <Footer />
    </>
  );
};

export default Classes;