import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const InstructorCard = ({ instructor }) => {
   console.log(instructor);
   const { image, name, email } = instructor;
   return (

      <Slide>

         <div className=" rounded overflow-hidden shadow hover:shadow-2xl transition-all duration-300 transform hover:rotateZ-50 origin-top p-6 border border-gray-100">
            <img className="w-full md:h-40 rounded" src={image} alt="Instructor Image" />
            <div className="pt-4">
               <h2 className="font-bold text-xl mb-3 capitalize">{name}</h2>
               <div className="mb-5">
                  <p className="flex items-center gap-3"><FaEnvelope /> {email}</p>
                  <p className="flex items-center gap-3"><FaPhone />+8801701245965</p>
               </div>
               <div className="flex justify-center gap-5 text-xl">
                  <span className="cursor-pointer hover:text-blue-500 hover:scale-125 transition-all"><FaFacebook /></span>
                  <span className="cursor-pointer hover:text-rose-600 hover:scale-125 transition-all"><FaInstagram /></span>
                  <span className="cursor-pointer hover:text-sky-400 hover:scale-125 transition-all"><FaLinkedin /></span>
                  <span className="cursor-pointer hover:text-red-500 hover:scale-125 transition-all"><FaYoutube /></span>
               </div>
            </div>
            <div className="mt-3 flex justify-center">
               <a href="#" className="text-indigo-500 font-bold hover:text-indigo-700">View Profile</a>
            </div>
         </div>
      </Slide>
   );
};

export default InstructorCard;
