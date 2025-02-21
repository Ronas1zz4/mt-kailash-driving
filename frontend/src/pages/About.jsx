import DrivingCenter from "../assets/drivingcenter.jpg";
import Certification from "../assets/certification.jpg";
import Owner from "../assets/owner.jpg";
import { ShieldCheck, Compass, BookOpen, Phone } from "lucide-react";
import { Link } from "react-router";

// VisionCard Component
const VisionCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
    <Icon className="w-12 h-12 text-[var(--color-text)] mb-4" />
    <h3 className="text-2xl font-primary font-semibold text-[var(--color-text)] mb-2">
      {title}
    </h3>
    <p className="text-base text-[var(--color-text)] opacity-80">
      {description}
    </p>
  </div>
);

// About Component
const About = () => {
  return (
    <div className="w-full relative pb-16 bg-[var(--color-light)] min-h-screen">
      {/* About Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 min-h-screen py-24">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl lg:text-5xl font-primary font-semibold text-[var(--color-text)] mb-8">
            About Mt Kailash Driving School
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed">
            <strong>Founded by Daya Dhakal in 2025</strong>, Mount Kailash
            Driving School provides <strong>top-notch driving education</strong>{" "}
            for learners of all ages. We emphasize{" "}
            <strong>responsibility, safety, and confidence</strong> behind the
            wheel, ensuring that every student not only learns how to drive but
            also develops the mindset of a responsible driver.
          </p>
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed mt-4">
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
        <div className="w-full md:w-1/2">
          <img
            src={DrivingCenter}
            alt="Mount Kailash Driving Center"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="w-full flex flex-col justify-center items-center py-12 bg-nav">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-[var(--color-text)] mb-6">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text)] font-primary max-w-3xl mx-auto leading-relaxed italic">
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

      {/* Certification Section */}
      <div className="w-full py-12">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h2 className="text-4xl font-primary font-bold text-[var(--color-text)] mb-6">
            Our Certification
          </h2>
          <p className="text-lg text-[var(--color-text)] font-primary mb-6">
            We are certified by the State of North Carolina as a Commercial
            Driver Training School.
          </p>
          <div className="flex justify-center items-center">
            <img
              src={Certification}
              alt="Driving School Certification"
              className="max-w-full sm:max-w-3xl md:max-w-4xl w-full h-auto object-contain rounded-lg shadow-md"
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
            <h2 className="text-3xl sm:text-4xl font-primary font-semibold text-[var(--color-text)] mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-[var(--color-text)] font-primary leading-relaxed">
              <strong>Daya Dhakal</strong>, originally from{" "}
              <strong>Nepal</strong>, is the visionary behind Mount Kailash
              Driving School. Now residing in the United States, he is dedicated
              to empowering individuals with essential driving skills and
              promoting safety on the road.
            </p>
            <p className="text-lg text-[var(--color-text)] font-primary leading-relaxed mt-2">
              With years of experience and a passion for helping others, Daya
              has also ventured into various other industries. He strongly
              believes in building a secure and prosperous future for his
              clients, which is why he has expanded his expertise beyond driving
              education.
            </p>
            <p className="text-lg text-[var(--color-text)] font-primary leading-relaxed mt-2">
              Beyond driving education, Daya has established successful ventures
              in multiple sectors:
            </p>

            {/* Other Businesses - Bullet Points */}
            <ul className="list-disc ml-6 mt-4 text-lg text-[var(--color-text)] font-primary">
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
