import DrivingCenter from "../assets/drivingcenter.jpg";
import Owner from "../assets/owner.jpg";
import { ShieldCheck, Compass, BookOpen } from "lucide-react";
import { Link } from "react-router";
import Interior from "../assets/interior.jpg";

// VisionCard Component
const VisionCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
    <Icon className="w-12 h-12 text-[var(--color-text)] mb-4" />
    <h3 className="text-md font-primary font-semibold text-[var(--color-text)] mb-2">
      {title}
    </h3>
    <p className="text-md text-[var(--color-text)] opacity-80">{description}</p>
  </div>
);

// About Component
const About = () => {
  return (
    <div className="w-full relative  bg-[var(--color-light)] min-h-screen ">
      {/* About Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 min-h-screen py-24">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left ">
          <h2 className="text-4xl lg:text-5xl font-primary font-semibold text-[var(--color-text)] mb-8">
            About Mt Kailash Driving School
          </h2>
          <p className="text-md md:text-md text-[var(--color-text)] font-primary leading-relaxed">
            <strong>Founded by Daya Dhakal in 2025</strong>, Mount Kailash
            Driving School provides <strong>top-notch driving education</strong>{" "}
            for learners of all ages. We emphasize{" "}
            <strong>responsibility, safety, and confidence</strong> behind the
            wheel, ensuring that every student not only learns how to drive but
            also develops the mindset of a responsible driver.
          </p>
          <p className="text-md md:text-md text-[var(--color-text)] font-primary leading-relaxed mt-4">
            Our <strong>certified instructors</strong> bring years of experience
            and are committed to delivering
            <strong> personalized, hands-on training</strong> tailored to each
            student’s needs. Through structured lessons, we cover everything
            from <strong>basic driving techniques</strong> to{" "}
            <strong>advanced defensive driving strategies</strong>, equipping
            students with the necessary skills to navigate diverse driving
            conditions with ease.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:mt-12 mt-0">
          <img
            src={DrivingCenter}
            alt="Mount Kailash Driving Center"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* For drivers */}
      <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-12  min-h-screen justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-7/12 relative">
          <img
            src={Interior}
            alt="Car Interior"
            className="w-full h-[60vh] md:h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold md:text-4xl font-primary text-gray-800 mb-6 leading-snug">
            Mt Kailash Driving School for Drivers Education
          </h2>
          <ul className="text-gray-700 space-y-4 font-primary ">
            {[
              "Clean spacious auto for on-road training",
              "Well maintained, safe vehicles",
              "Well appointed vehicles for comfort and safety",
              "Vehicles certified by NC for Drivers Education safety while training",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="text-xl text-gray-900 mr-2">➜</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="w-full flex flex-col justify-center items-center py-12 bg-nav">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-primary font-bold text-[var(--color-text)] mb-6">
            Our Vision
          </h2>
          <p className="text-md md:text-md text-[var(--color-text)] font-primary max-w-3xl mx-auto leading-relaxed italic">
            "Master the road with confidence, clarity, and control."
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <VisionCard
              icon={Compass}
              title="Confidence"
              description="Master the road with skill and assurance."
            />
            <VisionCard
              icon={ShieldCheck}
              title="Safety"
              description="Instilling responsible driving habits for life."
            />
            <VisionCard
              icon={BookOpen}
              title="Knowledge"
              description="Beyond passing the test—becoming a skilled driver."
            />
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Owner Image */}
          <div className="w-full md:w-1/3">
            <img
              src={Owner}
              alt="Daya Dhakal - Owner"
              className="w-full object-cover rounded-2xl shadow-lg mb-4 md:mb-0" // Increased image height
            />
          </div>

          {/* Right Side - Owner Details */}
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl sm:text-3xl font-primary font-semibold text-[var(--color-text)] mb-4">
              Meet Our Founder
            </h2>
            <p className="text-md text-[var(--color-text)] font-primary leading-relaxed">
              <strong>Daya Dhakal</strong>, originally from{" "}
              <strong>Nepal</strong>, is the visionary behind Mount Kailash
              Driving School. Now residing in the United States, he is dedicated
              to empowering individuals with essential driving skills and
              promoting safety on the road.
            </p>
            <p className="text-md text-[var(--color-text)] font-primary leading-relaxed mt-2">
              With years of experience and a passion for helping others, Daya
              has also ventured into various other industries. He strongly
              believes in building a secure and prosperous future for his
              clients, which is why he has expanded his expertise beyond driving
              education.
            </p>
            <p className="text-md text-[var(--color-text)] font-primary leading-relaxed mt-2">
              Beyond driving education, Daya has established successful ventures
              in multiple sectors:
            </p>

            {/* Other Businesses - Bullet Points */}
            <ul className="list-disc ml-6 mt-4 text-md text-[var(--color-text)] font-primary">
              <li>
                <strong>Health Insurance</strong> – Helping individuals and
                families secure the best health coverage.
              </li>
              <li>
                <strong>Life Insurance</strong> – Providing peace of mind and
                financial security for the future.
              </li>
              <li>
                <strong>Tax Services</strong> – Expert tax preparation and
                financial solutions for individuals and businesses.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
