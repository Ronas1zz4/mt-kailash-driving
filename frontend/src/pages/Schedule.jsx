import React, { useEffect, useState } from "react";

const Schedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchOpenClasses = async () => {
      try {
        const response = await fetch("http://localhost:5001/classes"); // Adjust endpoint as needed
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching open classes:", error);
      }
    };

    fetchOpenClasses();
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
            <p className="text-gray-500">No open classes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
