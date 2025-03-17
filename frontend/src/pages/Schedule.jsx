// import React, { useEffect, useState } from "react";

// const Schedule = () => {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     const fetchOpenClasses = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/classes"); // Adjust endpoint as needed
//         const data = await response.json();
//         setClasses(data);
//       } catch (error) {
//         console.error("Error fetching open classes:", error);
//       }
//     };

//     fetchOpenClasses();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//           Open Classes
//         </h1>
//         <p className="text-gray-600 text-center">
//           Browse and enroll in available classes.
//         </p>

//         {/* Horizontal Open Classes List */}
//         <div className="mt-4 flex space-x-3 overflow-x-auto">
//           {classes.length > 0 ? (
//             classes.map((cls) => (
//               <div
//                 key={cls.class_id}
//                 className="p-3 bg-gray-200 rounded-lg whitespace-nowrap"
//               >
//                 <p className="font-semibold">{cls.class_name}</p>
//                 <p className="text-sm">{cls.description}</p>
//                 <p className="text-sm">Day: {cls.day}</p>
//                 <p className="text-sm">Time: {cls.time}</p>
//                 <p className="text-sm">Cost: ${cls.cost}</p>
//                 <p className="text-sm">
//                   Capacity: {cls.current_capacity}/{cls.max_capacity}
//                 </p>
//                 <button
//                   onClick={() =>
//                     (window.location.href = `/schedule/${cls.class_id}`)
//                   }
//                   className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Reserve Seat
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No open classes available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Interior from "../assets/interior.jpg";

const Schedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const dummyClasses = [
      {
        class_id: 1,
        class_name: "Teen Driving Course",
        description:
          "A comprehensive 15-day course designed for teens to gain essential driving skills and road safety awareness.",
        day: "Monday, March 10th, 2025",
        time: "9:00 AM - 11:00 AM",
        cost: 150,
        current_capacity: 5,
        max_capacity: 10,
      },
      {
        class_id: 2,
        class_name: "Teen Driving Course",
        description:
          "A comprehensive 15-day course designed for teens to gain essential driving skills and road safety awareness.",
        day: "Wednesday, March 12th, 2025",
        time: "2:00 PM - 4:00 PM",
        cost: 150,
        current_capacity: 8,
        max_capacity: 12,
      },
      {
        class_id: 3,
        class_name: "Teen Driving Course",
        description:
          "A comprehensive 15-day course designed for teens to gain essential driving skills and road safety awareness.",
        day: "Friday, March 14th, 2025",
        time: "1:00 PM - 3:00 PM",
        cost: 150,
        current_capacity: 3,
        max_capacity: 10,
      },
      // Add more instances as needed for the 15-day schedule
    ];

    setClasses(dummyClasses);
  }, []);

  return (
    <section>
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 mt-20">
        {/* Left Section */}
        <div className="space-y-2 md:space-y-6 w-full px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-semibold text-black tracking-tighter leading-tight">
            Drivers Training Schedule
          </h2>
          <p className="text-sm sm:text-base md:text-md lg:text-md text-[var(--color-secondary-text)] font-primary leading-relaxed">
            Reserve a seat and pay online to secure your spot in our Drivers
            Training Schedule. After payment, we'll confirm your spot via email
            or phone call.
          </p>

          {/* Content Section */}
          <div className="bg-white p-8  mt-6 font-primary">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure Your Spot
            </h3>
            <p className="text-gray-600 mb-4">
              Your chances of securing an available seat in our Drivers Training
              Schedule are higher if you pay online. After payment, we will
              confirm your seat in the class via email or phone call.
            </p>
            <p className="text-gray-600">
              If you prefer, click on reserve for the teen drivers class
              reservation.
            </p>
          </div>

          <p className="mt-6 text-left font-primary text-dark  font-semibold">
            All classes are offered on a first-come, first-serve basis.
          </p>
        </div>
      </div>

      {/*Reserve Section Teen Drivers*/}
      <div className="max-w-full relative font-primary bg-[var(--color-light)] min-h-screen flex items-center justify-center p-6 mt-8">
        <div className="bg-white shadow rounded  p-6 w-full max-w-5xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Open Classes
          </h1>
          <p className="text-gray-600 mb-6">
            Browse and enroll in available classes.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {classes.length > 0 ? (
              classes.map((cls) => (
                <div
                  key={cls.class_id}
                  className="bg-gray-100 p-4 rounded hover:shadow transition text-left"
                >
                  <h2 className="text-xl font-semibold text-gray-900">
                    {cls.class_name}
                  </h2>
                  <p className="text-sm text-gray-700 mt-2">
                    {cls.description}
                  </p>
                  <p className="text-sm text-gray-800 mt-1">Day: {cls.day}</p>
                  <p className="text-sm text-gray-800">Time: {cls.time}</p>
                  <p className="text-sm text-gray-800 font-semibold">
                    Cost: ${cls.cost}
                  </p>
                  <p className="text-sm text-gray-800">
                    Capacity: {cls.current_capacity}/{cls.max_capacity}
                  </p>
                  <Link to={`/schedule/${cls.class_id}`}>
                    <button className="mt-4 bg-[var(--color-dark)] text-white px-4 py-2 rounded w-full hover:bg-white hover:text-black hover:border border-dark transition">
                      Reserve Seat
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No classes available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
