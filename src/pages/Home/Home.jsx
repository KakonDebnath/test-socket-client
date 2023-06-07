import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import BannerSection from "./Banner";
import PopularClass from "./PopularClass";




const Home = () => {
    return (
        <>
           <Navbar></Navbar>
           <BannerSection></BannerSection>
           <PopularClass></PopularClass>
           <Footer></Footer>
        </>
    );
};

export default Home;