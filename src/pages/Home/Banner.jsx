import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

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
                <img src="https://i.ibb.co/QQsJ1Bd/banner6-Custom.jpg" />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 ">
                    <h1 className=" text-white text-2xl md:text-5xl w-full md:w-[40vw]  capitalize text-left mb-4 md:mb-10 ">
                        earn Drawing and Painting from the Best Art Teachers &nbsp;

                        <span className="text-background" style={{ color: 'red', fontWeight: 'bold' }}>
                            <Typewriter
                                // words={['Practice', 'Makes', 'A Man', 'Perfect!']}
                                words={['Practice Makes A Man Perfect']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <Link to="/login"><Button className="">Enroll Now!</Button></Link>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src="https://i.ibb.co/RvpyLty/banner3-Custom.jpg" />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 ">
                    <h1 className=" text-white text-2xl md:text-5xl w-full md:w-[40vw]  capitalize text-left mb-4 md:mb-10 ">
                        earn Drawing and Painting from the Best Art Teachers &nbsp;

                        <span className="text-background" style={{ color: 'red', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Practice Makes A Man Perfect']}
                                // words={['Practice', 'Makes', 'A Man', 'Perfect!']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <Link to="/login"><Button className="">Enroll Now!</Button></Link>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src="https://i.ibb.co/HrPSKZR/banner4-Custom.jpg" />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 ">
                    <h1 className=" text-white text-2xl md:text-5xl w-full md:w-[40vw]  capitalize text-left mb-4 md:mb-10 ">
                        earn Drawing and Painting from the Best Art Teachers &nbsp;

                        <span className="text-background" style={{ color: 'red', fontWeight: 'bold' }}>
                            <Typewriter
                                // words={['Practice', 'Makes', 'A Man', 'Perfect!']}
                                words={['Practice Makes A Man Perfect']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <Link to="/login"><Button className="">Enroll Now!</Button></Link>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src="https://i.ibb.co/Q9scCr4/banner5-Custom.jpg" />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 ">
                    <h1 className=" text-white text-2xl md:text-5xl w-full md:w-[40vw]  capitalize text-left mb-4 md:mb-10 ">
                        earn Drawing and Painting from the Best Art Teachers &nbsp;

                        <span className="text-background" style={{ color: 'red', fontWeight: 'bold' }}>
                            <Typewriter
                                // words={['Practice', 'Makes', 'A Man', 'Perfect!']}
                                words={['Practice Makes A Man Perfect']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <Link to="/login"><Button className="">Enroll Now!</Button></Link>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-black bg-opacity-50 w-full h-full "></div>
                <img src="https://i.ibb.co/BynKcrt/banner2-Custom.jpg" />
                <div className="absolute top-1/2 -translate-y-1/2 left-20 ">
                    <h1 className=" text-white text-2xl md:text-5xl w-full md:w-[40vw]  capitalize text-left mb-4 md:mb-10 ">
                        earn Drawing and Painting from the Best Art Teachers &nbsp;

                        <span className="text-background" style={{ color: 'red', fontWeight: 'bold' }}>
                            <Typewriter
                                // words={['Practice', 'Makes', 'A Man', 'Perfect!']}
                                words={['Practice Makes A Man Perfect']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <Link to="/login"><Button className="">Enroll Now!</Button></Link>
                </div>
            </div>
        </Carousel>
    );
};

export default BannerSection;