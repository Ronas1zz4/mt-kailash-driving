import React, { memo } from "react";
import Driving from "../assets/driving.jpeg";
import Certified from "../assets/certified.jpg";
import Flexible from "../assets/flexible.jpg";
import Safety from "../assets/safety.jpg";
import Modern from "../assets/modern.jpg";
import Adult from "../assets/adult.jpg";
import { Link } from "react-router";

const Card = memo(({ imgSrc, title, description }) => (
  <div className="relative flex flex-col items-center bg-white p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-full">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl mb-3"
    />
    <h3 className="text-base sm:text-lg font-primary font-semibold text-[var(--color-text)] mb-2">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-[var(--color-secondary-text)] font-primary text-center">
      {description}
    </p>
  </div>
));

const HeroSection = () => (
  <section className="relative max-w-full h-screen flex items-center bg-[var(--color-light)] px-4 sm:px-8 md:px-12">
    <div
      className="absolute inset-0 bg-cover bg-left brightness-50"
      style={{ backgroundImage: `url(${Driving})` }}
    ></div>
    <div className="relative w-full max-w-5xl mx-auto text-left px-3 md:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white drop-shadow-lg leading-tight">
        Master the Road with <br /> Confidence at
        <br /> <span className="text-dark"> Mt Kailash Driving Center</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-[var(--color-secondary-text)] mt-2 font-primary drop-shadow-md">
        Learn from expert instructors and gain real-road experience to drive
        with skill, safety, and confidence.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
        <button className="border border-[var(--color-secondary-text)] hover:bg-[var(--color-dark)] hover:border-[var(--color-dark)] text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-primary transition">
          Enroll Today
        </button>
        <button className="bg-[var(--color-dark)] px-3 py-2 rounded-xl hover:bg-transparent border border-[var(--color-dark)] hover:border-[var(--color-secondary-text)] text-white text-xs sm:text-sm font-primary transition">
          Explore Course
        </button>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className=" max-w-full relative py-10 bg-[var(--color-light)] flex justify-center items-center min-h-screen lg:min-h-[100vh]">
    <div className="container mx-auto text-center px-4 sm:px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-primary font-semibold text-[var(--color-text)] mb-4">
        Why Choose Us?
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-[var(--color-secondary-text)] mb-6 sm:mb-8 max-w-2xl mx-auto font-primary">
        Our courses provide personalized lessons, expert guidance, and a focus
        on safety to ensure you’re road-ready.
      </p>
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center items-center max-w-6xl mx-auto">
        <Card
          imgSrc={Certified}
          title="Certified Instructors"
          description="Learn from licensed experts guiding students toward safe and confident driving."
        />
        <Card
          imgSrc={Flexible}
          title="Flexible Scheduling"
          description="We offer lessons at times that work for you, including weekends and evenings."
        />
        <Card
          imgSrc={Safety}
          title="Safety First Approach"
          description="We focus on defensive driving, equipping you with essential skills for the road."
        />
        <Card
          imgSrc={Modern}
          title="Modern Vehicles"
          description="Learn in the latest cars equipped safety features for a smooth experience."
        />
      </div>
    </div>
  </section>
);

const DrivingCoursesSection = () => (
  <section className="max-w-full py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-primary font-semibold text-[var(--color-text)] mb-6">
        Our Course
      </h2>
      <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg p-5 gap-5">
        <div className="w-full md:w-1/2 text-gray-900 text-left bg-[var(--color-light)] p-4 rounded-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-primary font-semibold mb-2">
            Teen Driving Course
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-3 font-primary">
            Our program consists of{" "}
            <strong>30 hours of classroom instruction</strong> and
            <strong> 6 hours of behind-the-wheel training</strong> with
            experienced instructors.
          </p>
          <ul className="text-sm sm:text-base md:text-lg mb-3 list-disc pl-4">
            <li>Expert Tutors</li>
            <li>Flexible Schedule</li>
            <li>In-class Instructions</li>
            <li>Road Work</li>
          </ul>
          <Link to="/schedule">
            <button className="bg-dark px-4 py-2 rounded hover:bg-transparent hover:text-text border border-dark hover:border-secondary-text text-white text-sm font-primary">
              Enroll Now
            </button>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2">
          <img
            src={Adult}
            alt="Teen Driving Course"
            className="w-full h-auto md:h-[320px] object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="max-w-full relative">
      <HeroSection />
      <WhyChooseUsSection />
      <DrivingCoursesSection />
    </div>
  );
};

export default Home;
