import React from 'react';
import Button from '../../components/Button/Button';

const ClassCard = ({ name, instructorName, availableSeats, price, isLoggedIn, isAdmin }) => {
  // Disable select button if not logged in or if available seats are 0
  const isButtonDisabled = !isLoggedIn || availableSeats === 0 || isAdmin;

  // Set class card background color based on available seats
  const cardStyle = {
    backgroundColor: availableSeats === 0 ? 'bg-red-200' : 'bg-white',
  };

  const handleSelect = () => {
    // Handle the select button click event
    // Add your logic here
  };

  return (
    <div className={`class-card p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all  ${cardStyle}`}>
      <img src="https://i.ibb.co/Vtj85ky/class-2.jpg" alt="Class" className="w-full mb-4" />
      <h2 className="text-lg font-bold mb-2">Class Name: {name}</h2>
      <p className="mb-2">Instructor: {instructorName}</p>
      <p className="mb-2">Available Seats: {availableSeats}</p>
      <p className="mb-2">Price: ${price}</p>
      {isButtonDisabled ? (
        <Button >Select Class</Button>
      ) : (
        <button
          disabled={isButtonDisabled}
          className={`button px-4 py-2 ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'}`}
          onClick={handleSelect}
        >
          Select
        </button>
      )}
    </div>
  );
};

export default ClassCard;
