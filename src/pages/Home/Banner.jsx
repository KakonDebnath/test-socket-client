import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img6 from "../../../src/assets/banner6 (Custom).jpg"
import img2 from "../../../src/assets/banner2 (Custom).jpg"
import img3 from "../../../src/assets/banner3 (Custom).jpg"
import img4 from "../../../src/assets/banner4 (Custom).jpg"
import img5 from "../../../src/assets/banner5 (Custom).jpg"
import Button from "../../components/Button/Button";

const BannerSection = () => {
    return (
        <Carousel
            autoPlay={false}
            infiniteLoop={true}
            transitionTime={1000}
            className="text-center"
            swipeable={true}
        >
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src={img2} />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 space-y-5">
                    <p className=" text-white text-5xl w-[40vw]  capitalize text-left ">earn Drawing and Painting from the Best Art Teachers</p>
                    <Button className="">Enroll Now!</Button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src={img3} />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 space-y-5">
                    <p className=" text-white text-5xl w-[40vw]  capitalize text-left ">earn Drawing and Painting from the Best Art Teachers</p>
                    <Button className="">Enroll Now!</Button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src={img4} />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 space-y-5">
                    <p className=" text-white text-5xl w-[40vw]  capitalize text-left ">earn Drawing and Painting from the Best Art Teachers</p>
                    <Button className="">Enroll Now!</Button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src={img5} />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 space-y-5">
                    <p className=" text-white text-5xl w-[40vw]  capitalize text-left ">earn Drawing and Painting from the Best Art Teachers</p>
                    <Button className="">Enroll Now!</Button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src={img6} />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 space-y-5">
                    <p className=" text-white text-5xl w-[40vw]  capitalize text-left ">earn Drawing and Painting from the Best Art Teachers</p>
                    <Button className="">Enroll Now!</Button>
                </div>
            </div>

        </Carousel>
    );
};

export default BannerSection;