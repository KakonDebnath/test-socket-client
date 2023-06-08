import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import ClassCard from "./ClassCard";


const Classes = () => {
    return (
        <>
            <Navbar />
            <div className="pt-24 grid grid-cols-1 md:grid-cols-4  gap-5 mb-10 px-10">
            <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
            </div>
            <Footer />
        </>
    );
};

export default Classes;