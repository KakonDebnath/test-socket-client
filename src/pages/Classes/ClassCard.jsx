import CardBtn from "../../components/Button/CardBtn";
import useAxiosSecure from "../../hooks/useAxios";


const ClassCard = ({aClass}) => {
  const [axiosSecure] = useAxiosSecure()

  const handelSelectClick = (item) => {
    console.log(item);
    axiosSecure.post("/selectedClass", item)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }


  const { name, instructorName, availableSeats, price, image } = aClass;
  return (
    <div className={`class-card p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all  `}>
      <img src={image}/>
      <h2 className="text-lg font-bold mb-2">Class Name: {name}</h2>
      <p className="mb-2">Instructor: {instructorName}</p>
      <p className="mb-2">Available Seats: {availableSeats}</p>
      <p className="mb-2">Price: ${price}</p>
      <CardBtn handleClickBtn={()=>handelSelectClick(aClass)} style={"from-cyan-500 to-blue-500"}>Select Class</CardBtn>
    </div>
  );
};

export default ClassCard;
