import CardBtn from "../../components/Button/CardBtn";


const ClassCard = ({ name, instructorName, availableSeats, price, }) => {
  return (
    <div className={`class-card p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all  `}>
      <img src="https://i.ibb.co/Vtj85ky/class-2.jpg" alt="Class" className="w-full mb-4" />
      <h2 className="text-lg font-bold mb-2">Class Name: {name}</h2>
      <p className="mb-2">Instructor: {instructorName}</p>
      <p className="mb-2">Available Seats: {availableSeats}</p>
      <p className="mb-2">Price: ${price}</p>
      <CardBtn style={"from-cyan-500 to-blue-500"}>Select Class</CardBtn>
    </div>
  );
};

export default ClassCard;
