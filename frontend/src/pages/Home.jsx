import React, { memo } from "react";
import Driving from "../assets/driving.jpeg";
import Certified from "../assets/certified.jpg";
import Flexible from "../assets/flexible.jpg";
import Safety from "../assets/safety.jpg";
import Modern from "../assets/modern.jpg";
import Adult from "../assets/adult.jpg";
import Teen from "../assets/teen.jpg";
import { CheckCircle } from "lucide-react";
import Teaching from "../assets/teaching.jpg";

const Card = memo(({ imgSrc, title, description }) => (
  <div className="relative flex flex-col items-center bg-white p-4 sm:p-5   hover:shadow-xl transition-transform transform hover:scale-105 w-full">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-40 sm:h-44 md:h-48 object-cover mb-3"
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
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3  sm:justify-start">
        <button className="border border-[var(--color-secondary-text)] hover:bg-[var(--color-dark)] hover:border-[var(--color-dark)] text-white px-3 py-2  text-xs sm:text-sm font-primary transition rounded">
          Enroll Today
        </button>
        <button className="bg-[var(--color-dark)] px-3 py-2 rounded hover:bg-transparent border border-[var(--color-dark)] hover:border-[var(--color-secondary-text)] text-white text-xs sm:text-sm font-primary transition">
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

const Testimonials = () => (
  <section className="max-w-full py-10 bg-[var(--color-light)] flex justify-center items-center ">
    <div className="container mx-auto text-center px-4 sm:px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-primary font-semibold text-[var(--color-text)] mb-6">
        What Our Graduates Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-transform transform hover:scale-105 w-full font-primary">
          <p className="text-lg sm:text-base md:text-md mb-4 italic text-[var(--color-secondary-text)]">
            "Mt Kailash Driving Center gave me the confidence I needed to become
            a safe driver. The instructors were patient and, made the learning
            process enjoyable and stress-free."
          </p>
          <p className="font-semibold text-[var(--color-text)]">
            - Sujan Dhakal., Recent Graduate
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-transform transform hover:scale-105 w-full font-primary">
          <p className="text-lg sm:text-base md:text-md mb-4 italic text-[var(--color-secondary-text)]">
            "I was nervous about driving, but the team at Mt Kailash Driving
            Center made me feel comfortable from day one. Their step-by-step
            approach really helped me master the skills I needed."
          </p>
          <p className="font-semibold text-[var(--color-text)]">
            - Ronas T., Recent Graduate
          </p>
        </div>
      </div>
    </div>
  </section>
);

const InfoSection = () => (
  <section className="relative w-full py-12 md:py-16 lg:py-24 bg-nav">
    <div className="relative container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between ">
      {/* Text on top (for small screens) */}
      <div className="space-y-2 md:space-y-6 w-full lg:w-1/2 px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-semibold text-black tracking-tighter leading-tight ">
          Your Journey to Safe Driving Starts Here
        </h2>
        <p className="text-sm sm:text-base md:text-md lg:text-md text-[var(--color-secondary-text)] font-primary leading-relaxed ">
          At Mt Kailash Driving Center, we're committed to creating confident,
          skilled drivers through comprehensive training and personalized
          instruction. With over 15 years of experience, we've helped thousands
          of students achieve their driving goals.
        </p>
        <ul className="space-y-3 md:space-y-3">
          <li className="flex items-center text-sm sm:text-base lg:text-md text-dark">
            <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
            <span className="font-primary">
              Flexible scheduling to fit your busy lifestyle
            </span>
          </li>
          <li className="flex items-center text-sm sm:text-base lg:text-md text-dark">
            <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
            <span className="font-primary">
              Modern fleet of dual-control vehicles for safe learning
            </span>
          </li>
          <li className="flex items-center text-sm sm:text-base lg:text-md text-dark">
            <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
            <span className="font-primary">
              Comprehensive courses for new drivers and refresher training
            </span>
          </li>
        </ul>
      </div>

      {/* Image at the bottom (for small screens) */}
      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={Teaching} // Replace with your image URL
          alt="Professional driving instructor teaching a student in a car"
          className="object-cover w-full h-full shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="relative max-w-full py-8 md:py-12  flex justify-center items-center bg-nav">
    <div className="relative container mx-auto text-center px-4 sm:px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-primary font-semibold text-[var(--color-text)] mb-4">
        Our Courses
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-[var(--color-secondary-text)] mb-6 sm:mb-8 max-w-2xl mx-auto font-primary">
        Our courses provide personalized lessons, expert guidance, and a focus
        on safety to ensure you’re road-ready.
      </p>

      {/* Pricing Sections */}
      <div className="space-y-12">
        {/* Teen Drivers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6  max-w-5xl mx-auto bg-white p-8  hover:shadow-lg">
          <div>
            <img
              src={Teen}
              alt="Teen Driver Training"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-primary font-semibold mb-4 text-[var(--color-text)]">
              Teen Drivers Program
            </h3>
            <p className="text-sm sm:text-base text-[var(--color-secondary-text)] mb-4 font-primary">
              A structured program to help young drivers develop essential
              skills and confidence on the road.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center text-sm sm:text-base text-[var(--color-secondary-text)]">
                <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
                <span className="font-primary">
                  30 hours of classroom instruction
                </span>
              </li>
              <li className="flex items-center text-sm sm:text-base text-[var(--color-secondary-text)]">
                <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
                <span className="font-primary">
                  6 hours of behind-the-wheel training
                </span>
              </li>
              <li className="flex items-center text-sm sm:text-base text-[var(--color-secondary-text)]">
                <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
                <span className="font-primary">
                  Course materials and certification
                </span>
              </li>
            </ul>
            <button className="bg-[var(--color-dark)] px-6 py-2 rounded hover:bg-transparent border border-[var(--color-dark)] hover:border-[var(--color-secondary-text)] text-white hover:text-black text-xs sm:text-sm font-primary transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Adult Drivers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-5xl mx-auto bg-white p-8  hover:shadow-lg">
          <div className="text-left order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-primary font-semibold mb-4 text-[var(--color-text)]">
              Adult Drivers Program
            </h3>
            <p className="text-sm sm:text-base text-[var(--color-secondary-text)] mb-4 font-primary">
              Customized lessons for adults looking to refine their driving
              skills or gain confidence on the road.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center text-sm sm:text-base text-[var(--color-secondary-text)]">
                <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
                <span className="font-primary">
                  Behind-the-wheel personalized training
                </span>
              </li>
              <li className="flex items-center text-sm sm:text-base text-[var(--color-secondary-text)]">
                <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
                <span className="font-primary">
                  Learner’s permit assistance
                </span>
              </li>
              <li className="flex items-center text-sm sm:text-base text-[var(--color-secondary-text)]">
                <CheckCircle className="mr-2 h-5 w-5 text-[var(--color-dark)]" />
                <span className="font-primary">
                  Defensive driving techniques
                </span>
              </li>
            </ul>
            <button className="bg-[var(--color-dark)] px-6 py-2 rounded hover:bg-transparent border border-[var(--color-dark)] hover:border-[var(--color-secondary-text)] text-white hover:text-black text-xs sm:text-sm font-primary transition">
              Enroll Now
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={Adult}
              alt="Adult Driver Training"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="max-w-full relative ">
      <HeroSection />
      <InfoSection />
      <WhyChooseUsSection />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
