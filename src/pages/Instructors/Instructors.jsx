import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-24">
                <InstructorCard imageUrl={"https://i.ibb.co/CtqFNyb/t-6.jpg"} name={"Md. Morshed Alom"} email={"kakon@m.com"} />
            </div>
            <Footer />
        </>
    );
};

export default Instructors;