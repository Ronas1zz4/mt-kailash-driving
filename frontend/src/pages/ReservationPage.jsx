import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutButton from "../components/StripeCheckoutButton";

const ReservationPage = () => {
  const { class_id } = useParams(); // Get the class_name from the URL
  const [classDetails, setClassDetails] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Fetch class details based on class_id
  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/classes/${class_id}`
        );
        const data = await response.json();
        setClassDetails(data);
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };

    fetchClassDetails();
  }, [class_id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5001/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            class_id: classDetails.class_id,
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
        alert("Reservation successful!");
      } else {
        alert("Reservation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  if (!classDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl flex space-x-6">
        {/* Class Details */}
        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Class Details
          </h1>
          <p className="text-gray-600">Class Name: {classDetails.class_name}</p>
          <p className="text-gray-600">
            Description: {classDetails.description}
          </p>
          <p className="text-gray-600">Day: {classDetails.day}</p>
          <p className="text-gray-600">Time: {classDetails.time}</p>
          <p className="text-gray-600">Cost: ${classDetails.cost}</p>
          <p className="text-gray-600">
            Capacity: {classDetails.current_capacity}/
            {classDetails.max_capacity}
          </p>
        </div>

        {/* Reservation Form */}
        <div className="w-1/2">
          <CheckoutButton classId={class_id} />

          {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">Verify your email</h1> */}
          {/* <form onSubmit={handleSubmit}> */}
          {/* <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div> */}

          {/* <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Checkout
            </button> */}

          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
