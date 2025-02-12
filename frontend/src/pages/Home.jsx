import React from 'react'

const Home = () => {
  return (
    <div className='w-full relative '>
    <section className="relative w-full h-screen"> 
    {/* Background Image */}
    <div
      className="absolute  bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?car,driving')" }}
    ></div>
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    
    {/* Content */}
    <div className="relative  flex flex-col items-center justify-center h-full text-center px-4"> 
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Learn to Drive with Confidence!
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Professional instructors & personalized training to make you road-ready.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg text-lg shadow-lg hover:bg-yellow-400 transition">
        Get Started
      </button>
    </div>
  </section>
  <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At [Your Driving School Name], we stand out because of our dedication to providing the best driving education experience. Whether you're a beginner or looking to refresh your skills, we offer a variety of reasons why you should choose us for your journey to becoming a safe and confident driver.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Experienced Instructors */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experienced Instructors</h3>
            <p className="text-gray-600">
              Our team consists of certified, experienced, and friendly instructors who are passionate about teaching safe driving techniques. With years of experience, they understand how to guide students through every step of their driving journey.
            </p>
          </div>

          {/* Card 2 - Flexible Scheduling */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Flexible Scheduling</h3>
            <p className="text-gray-600">
              We know that life can be busy. That's why we offer flexible scheduling options that work around your lifestyle. Whether you prefer weekend sessions or evening classes, we've got you covered!
            </p>
          </div>

          {/* Card 3 - Road Safety Focus */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Road Safety Focus</h3>
            <p className="text-gray-600">
              Our driving courses prioritize road safety, defensive driving, and preparing you for all types of driving conditions. We aim to make you not just a good driver, but a responsible one who understands the importance of safety.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Our Driving Courses
        </h2>

        {/* 18+ Driving Course Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/2 p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">18+ Driving Course</h3>
            <p className="text-lg mb-6">
              This course is designed for adults looking to get their driver's
              license. We focus on building the necessary skills for safe,
              confident driving in all road conditions.
            </p>
            <ul className="list-inside list-disc text-lg">
              <li>Personalized lessons tailored to your needs.</li>
              <li>Flexible scheduling and modern vehicles.</li>
              <li>Comprehensive road safety training.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://via.placeholder.com/600x400?text=18%2B+Course"
              alt="18+ Course"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Under 18 Driving Course Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-1/2 p-6 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Under 18 Driving Course</h3>
            <p className="text-lg mb-6">
              Our Under 18 Driving Course is perfect for young learners who are
              eager to start their journey behind the wheel. We ensure a safe and
              enjoyable learning experience while preparing them for their future on the road.
            </p>
            <ul className="list-inside list-disc text-lg">
              <li>Fun and interactive lessons tailored for teens.</li>
              <li>Incorporating parental guidance and progress tracking.</li>
              <li>Focus on building responsible and safe driving habits.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://via.placeholder.com/600x400?text=Under+18+Course"
              alt="Under 18 Course"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home