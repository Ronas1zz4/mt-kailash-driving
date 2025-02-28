import React from 'react'

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch('localhost:5001/schedule'); // Adjust endpoint as needed
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Schedule</h1>
        <p className="text-gray-600 text-center">Manage your appointments and classes here.</p>
        
        {/* Horizontal Schedule List */}
        <div className="mt-4 flex space-x-3 overflow-x-auto">
          <div className="p-3 bg-gray-200 rounded-lg whitespace-nowrap">Monday - Driving Lesson @ 10 AM</div>
          <div className="p-3 bg-gray-200 rounded-lg whitespace-nowrap">Wednesday - Theory Class @ 2 PM</div>
          <div className="p-3 bg-gray-200 rounded-lg whitespace-nowrap">Friday - Road Test @ 9 AM</div>
        </div>
      </div>
    </div>
  );
};


export default Schedule;