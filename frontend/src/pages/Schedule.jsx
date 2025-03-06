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

const Schedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Dummy data for UI demonstration
    const dummyClasses = [
      {
        class_id: 1,
        class_name: "Yoga Basics",
        description:
          "A beginner-friendly yoga class to improve flexibility and relaxation.",
        day: "Monday",
        time: "10:00 AM - 11:00 AM",
        cost: 20,
        current_capacity: 5,
        max_capacity: 15,
      },
      {
        class_id: 2,
        class_name: "HIIT Training",
        description:
          "High-intensity interval training to boost your endurance and strength.",
        day: "Wednesday",
        time: "6:00 PM - 7:00 PM",
        cost: 25,
        current_capacity: 10,
        max_capacity: 20,
      },
      {
        class_id: 3,
        class_name: "Pilates Core Strength",
        description:
          "A core-focused pilates session to strengthen your abs and back.",
        day: "Friday",
        time: "8:00 AM - 9:00 AM",
        cost: 18,
        current_capacity: 8,
        max_capacity: 12,
      },
    ];

    setClasses(dummyClasses);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Open Classes
        </h1>
        <p className="text-gray-600 text-center">
          Browse and enroll in available classes.
        </p>

        {/* Horizontal Open Classes List */}
        <div className="mt-4 flex space-x-3 overflow-x-auto">
          {classes.length > 0 ? (
            classes.map((cls) => (
              <div
                key={cls.class_id}
                className="p-3 bg-gray-200 rounded-lg whitespace-nowrap"
              >
                <p className="font-semibold">{cls.class_name}</p>
                <p className="text-sm">{cls.description}</p>
                <p className="text-sm">Day: {cls.day}</p>
                <p className="text-sm">Time: {cls.time}</p>
                <p className="text-sm">Cost: ${cls.cost}</p>
                <p className="text-sm">
                  Capacity: {cls.current_capacity}/{cls.max_capacity}
                </p>
                <button
                  onClick={() =>
                    (window.location.href = `/schedule/${cls.class_id}`)
                  }
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Reserve Seat
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No classes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
