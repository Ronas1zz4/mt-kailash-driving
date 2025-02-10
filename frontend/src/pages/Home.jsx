import React from 'react'

const Home = () => {
  return (
    <div className="relative w-full h-screen"> 
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
  </div>
  )
}

export default Home