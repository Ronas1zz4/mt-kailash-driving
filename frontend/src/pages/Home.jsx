import React, { memo } from "react";
import Driving from "../assets/driving.jpeg";
import Certified from "../assets/certified.jpg";
import Flexible from "../assets/flexible.jpg";
import Safety from "../assets/safety.jpg";
import Modern from "../assets/modern.jpg";
import Adult from "../assets/adult.jpg";
import { Link } from "react-router";

// Reusable Card Component for the benefits and driving courses
const Card = memo(({ imgSrc, title, description }) => (
  <div className="relative flex flex-col items-center bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-56 object-cover rounded-2xl mb-6"
    />
    <h3 className="text-2xl font-primary font-semibold text-[var(--color-text)] mb-4">
      {title}
    </h3>
    <p className="text-[var(--color-secondary-text)] font-primary">
      {description}
    </p>
  </div>
));

// Hero Section
const HeroSection = () => (
  <section className="relative w-full h-screen flex items-center bg-[var(--color-light)] px-6 md:px-12">
    <div
      className="absolute inset-0 bg-cover bg-left brightness-50"
      style={{ backgroundImage: `url(${Driving})` }}
    ></div>

    <div className="relative w-full max-w-6xl mx-auto text-left px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white drop-shadow-lg leading-snug">
        Master the Road with <br /> Confidence at
        <br /> <span className="text-dark"> Mt Kailash Driving Center</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-[var(--color-secondary-text)] mt-4 font-primary drop-shadow-lg">
        Learn from expert instructors and gain real-road experience to drive
        with skill, safety, and confidence.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="border border-[var(--color-secondary-text)] hover:bg-[var(--color-dark)] hover:border-[var(--color-dark)] text-white hover:text-white px-3 md:px-6 py-2 md:py-3 rounded-2xl text-xs sm:text-sm md:text-base font-primary transition"
        >
          Enroll Today
        </button>
        <button
          type="button"
          className="bg-[var(--color-dark)] px-3 md:px-6 py-2 md:py-3 rounded-2xl hover:bg-transparent border border-[var(--color-dark)] hover:border-[var(--color-secondary-text)] text-white text-xs sm:text-sm md:text-base font-primary transition"
        >
          Explore Course
        </button>
      </div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChooseUsSection = () => (
  <section className="relative py-16 bg-[var(--color-light)] min-h-screen flex justify-center items-center">
    <div className="container mx-auto text-center px-6 md:px-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary font-semibold text-[var(--color-text)] mb-6 sm:mb-8">
        Why Choose Us?
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-[var(--color-secondary-text)] mb-8 sm:mb-12 max-w-2xl mx-auto font-primary">
        Whether you're a beginner or looking to sharpen your driving skills, our
        courses provide personalized lessons, expert guidance, and a focus on
        safety to ensure you’re road-ready.
      </p>

      {/* Key Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
        <Card
          imgSrc={Certified}
          title="Certified Instructors"
          description="Learn from licensed experts who have years of experience guiding students toward safe and confident driving."
        />
        <Card
          imgSrc={Flexible}
          title="Flexible Scheduling"
          description="We offer lessons at times that work for you, including weekends, evenings, and fast-track options."
        />
        <Card
          imgSrc={Safety}
          title="Safety First Approach"
          description="We focus on defensive driving, equipping you with the skills to handle any situation safely on the road."
        />
        <Card
          imgSrc={Modern}
          title="Modern Vehicles"
          description="Learn to drive with the latest cars, equipped with all necessary safety features to ensure a smooth driving experience."
        />
      </div>
    </div>
  </section>
);

// Driving Courses Section
const DrivingCoursesSection = () => (
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-primary font-semibold text-[var(--color-text)] mb-10 sm:mb-8">
        Our Course
      </h2>

      {/* Driving Course Section */}
      <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg p-8 mb-12 gap-8">
        {/* Text Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-6 text-gray-900 rounded-lg flex flex-col text-left justify-center bg-[var(--color-light)]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-primary font-semibold mb-4">
            Teen Driving Course
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 font-primary">
            At Mt. Kailash Driving Center, we provide a comprehensive driver
            education program designed to ensure safety and confidence on the
            road. Our program consists of{" "}
            <strong>30 hours of classroom instruction</strong> and{" "}
            <strong>6 hours of behind-the-wheel training</strong> with
            experienced instructors. Join us to start your journey toward safe
            and responsible driving!
          </p>
          <ul className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 font-primary list-disc pl-6">
            <li>Expert Tutors</li>
            <li>Flexible Schedule</li>
            <li>In-class Instructions</li>
            <li>Road Work</li>
          </ul>
          <Link to="/schedule">
            <button className="bg-dark px-6 py-2 rounded hover:bg-transparent hover:text-text border border-dark hover:border-secondary-text text-white text-sm md:text-base font-primary">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src={Adult}
            alt="Teen Driving Course"
            className="w-full h-auto md:h-[500px] object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);


const Home = () => {
  return (
    <div className="w-full relative">
      <HeroSection />
      <WhyChooseUsSection />
      <DrivingCoursesSection />
    </div>
  );
};

export default Home;
