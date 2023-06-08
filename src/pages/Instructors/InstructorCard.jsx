

const InstructorCard = ({ imageUrl, name, email }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 transform hover:rotateZ-50 origin-top p-6">
      <img className="w-full rounded-xl" src={imageUrl} alt="Instructor Image" />
      <div className="space-y-3 pt-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Email: {email}</p>
      </div>
      <div className="mt-3">
        <a href="#" className="text-indigo-500 font-bold">View Profile</a>
      </div>
    </div>
  );
};

export default InstructorCard;
