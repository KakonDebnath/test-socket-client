import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            rating: 5,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus augue ac ligula convallis, id ullamcorper urna pellentesque.',
            image: 'https://i.ibb.co/NxwsHMc/t-11.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 4,
            review: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vitae lectus eget est molestie tempus a eget tortor.',
            image: 'https://i.ibb.co/RcN747r/t-10.jpg'
        },
        {
            id: 3,
            name: 'David Johnson',
            rating: 5,
            review: 'Nullam consectetur diam ut ligula efficitur, et luctus risus luctus. Fusce fermentum malesuada est non maximus.',
            image: 'https://i.ibb.co/CtqFNyb/t-6.jpg'
        },
        {
            id: 4,
            name: 'Emily Brown',
            rating: 4,
            review: 'Vestibulum consequat risus eget risus lacinia, non tincidunt libero tempus. Morbi fermentum vulputate neque at condimentum.',
            image: 'https://i.ibb.co/f1sF6D9/t-4.jpg'
        },
        {
            id: 5,
            name: 'Michael Wilson',
            rating: 5,
            review: 'Maecenas finibus urna in ligula eleifend, vitae feugiat sem aliquet. Proin et tristique tortor, id gravida lectus.',
            image: 'https://i.ibb.co/31MCJVF/t-3.jpg'
        },
        // Add more testimonials here

        
    ];

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
    return (
        <div>
            <SectionTitle subheading={"what's our student's say"} heading={"Happy Students"} imgUrl={"https://i.ibb.co/ZKPJS76/class-8.jpg"}></SectionTitle>

            <div className=" py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="kakon">
                        <Carousel
                            responsive={responsive}
                            swipeable
                            draggable
                            arrows={true}
                            showDots={true}
                            infinite = {true}
                            autoPlay = {true}
                            autoPlaySpeed={5000}
                            keyBoardControl
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="bg-white shadow overflow-hidden sm:rounded-lg p-6 h-52 mr-5">
                                    <div className="flex items-center mb-4">
                                        <img className="w-10 h-10 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                                            <div className="mt-1 flex items-center">
                                                {[...Array(testimonial.rating)].map((_, index) => (
                                                    <svg key={index} className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 1l2.928 6.856 6.072.472-4.664 4.38 1.388 6.08-5.824-3.512L4.376 18.76l1.388-6.08L0 8.328l6.072-.472L10 1z"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">{testimonial.review}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;