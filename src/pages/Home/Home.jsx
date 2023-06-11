import Navbar from "../../components/Shared/Navbar/Navbar";
import Instructors from "../Instructors/Instructors";
import BannerSection from "./Banner";
import PopularClass from "./PopularClass";




const Home = () => {
    return (
        <>
           <Navbar></Navbar>
           <BannerSection></BannerSection>
           <PopularClass></PopularClass>
           <Instructors></Instructors>
        </>
    );
};

export default Home;