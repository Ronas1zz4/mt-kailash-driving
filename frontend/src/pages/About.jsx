import DrivingCenter from "../assets/drivingcenter.jpg";
import Owner from "../assets/owner.jpg";
import { ShieldCheck, Compass, BookOpen } from "lucide-react";
import { Link } from "react-router";
import Interior from "../assets/interior.jpg";

// About Component
const About = () => {
  return (
    <>
      <div className="w-full relative bg-nav min-h-screen">
        {/* About Section */}

        <section className="relative max-w-full h-screen flex items-center bg-[var(--color-light)] px-4 sm:px-8 md:px-12">
          <div
            className="absolute inset-0 bg-cover bg-left brightness-30"
            style={{ backgroundImage: `url(${Interior})` }}
          ></div>
          <div className="relative w-full max-w-5xl mx-auto text-left px-3 md:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white drop-shadow-lg leading-tight">
              About
              <br />{" "}
              <span className="text-dark"> Mt Kailash Driving Center</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--color-secondary-text)] mt-2 font-primary drop-shadow-md">
              Your trusted partner in driver education since 2005. We've helped
              thousands of students become confident, responsible drivers
              through our comprehensive training programs and experienced
              instructors.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3  sm:justify-start">
              <Link to="/schedule">
                <button className="border border-[var(--color-secondary-text)] hover:bg-[var(--color-dark)] hover:border-[var(--color-dark)] text-white px-3 py-2  text-xs sm:text-sm font-primary transition rounded">
                  Enroll Today
                </button>
              </Link>
              <a href="tel:+1234567890">
                <button className="bg-[var(--color-dark)] px-3 py-2 rounded hover:bg-transparent border border-[var(--color-dark)] hover:border-[var(--color-secondary-text)] text-white text-xs sm:text-sm font-primary transition">
                  Call Us
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-8 md:py-24 lg:py-24 font-primary bg-nav">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-semibold text-[var(--color-text)] tracking-tighter text-left md:text-center">
                Our Story
              </h2>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-6 md:py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <p className="text-md md:text-md text-[var(--color-text)] font-primary leading-relaxed">
                  <strong>Founded by Daya Dhakal in 2025</strong>, Mount Kailash
                  Driving School provides{" "}
                  <strong>top-notch driving education</strong> for learners of
                  all ages. We emphasize{" "}
                  <strong>responsibility, safety, and confidence</strong> behind
                  the wheel, ensuring that every student not only learns how to
                  drive but also develops the mindset of a responsible driver.
                </p>
                <p className="text-md md:text-md text-[var(--color-text)] font-primary leading-relaxed">
                  Our <strong>certified instructors</strong> bring years of
                  experience and are committed to delivering
                  <strong> personalized, hands-on training</strong> tailored to
                  each student’s needs. Through structured lessons, we cover
                  everything from <strong>basic driving techniques</strong> to{" "}
                  <strong>advanced defensive driving strategies</strong>,
                  equipping students with the necessary skills to navigate
                  diverse driving conditions with ease.
                </p>
                <p className="text-md md:text-md text-[var(--color-text)] font-primary leading-relaxed">
                  {" "}
                  Your trusted partner in driver education since 2024. We've
                  helped thousands of students become confident, responsible
                  drivers through our comprehensive training programs and
                  experienced instructors.
                </p>
              </div>
              <div className="mx-auto  overflow-hidden object-cover lg:order-first">
                <img
                  src={Interior}
                  width={600}
                  height={400}
                  alt="DriveSafe Academy history"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-light font-primary">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-left md:text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-semibold text-[var(--color-text)] tracking-tighter">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We're committed to creating safer roads through exceptional
                driver education.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="p-6 space-y-4 border border-gray-200 rounded bg-white">
                <h3 className="text-2xl font-bold text-[var(--color-text)]">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To empower individuals with the knowledge, skills, and
                  confidence needed to become safe, responsible drivers for
                  life.
                </p>
              </div>
              <div className="p-6 space-y-4 border border-gray-200 rounded bg-white">
                <h3 className="text-2xl font-bold text-[var(--color-text)]">
                  Our Values
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-4 items-center">
                    <ShieldCheck className="h-5 w-5 mt-0.5 text-primary text-dark" />
                    <span>Safety First</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Compass className="h-5 w-5 mt-0.5 text-primary text-dark" />
                    <span>Student-Centered</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <BookOpen className="h-5 w-5 mt-0.5 text-primary text-dark" />
                    <span>Continuous Improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="w-full  py-16  max-w-6xl mx-auto">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Owner Image */}
            <div className="w-full md:w-1/3">
              <img
                src={Owner}
                alt="Daya Dhakal - Owner"
                className="w-full object-cover rounded-2xl shadow-lg mb-4 md:mb-0"
              />
            </div>

            {/* Right Side - Owner Details */}
            <div className="w-full md:w-2/3 text-left">
              <h2 className="text-3xl sm:text-3xl font-primary font-semibold text-[var(--color-text)] mb-4 ">
                Meet Our Founder
              </h2>
              <p className="text-md text-[var(--color-text)] font-primary leading-relaxed">
                <strong>Daya Dhakal</strong>, originally from{" "}
                <strong>Nepal</strong>, is the visionary behind Mount Kailash
                Driving School. Now residing in the United States, he is
                dedicated to empowering individuals with essential driving
                skills and promoting safety on the road.
              </p>
              <p className="text-md text-[var(--color-text)] font-primary leading-relaxed mt-2">
                With years of experience and a passion for helping others, Daya
                has also ventured into various other industries. He strongly
                believes in building a secure and prosperous future for his
                clients, which is why he has expanded his expertise beyond
                driving education.
              </p>
              <p className="text-md text-[var(--color-text)] font-primary leading-relaxed mt-2">
                Beyond driving education, Daya has established successful
                ventures in multiple sectors:
              </p>

              {/* Other Businesses - Bullet Points */}
              <ul className="list-disc ml-6 mt-4 text-md text-[var(--color-text)] font-primary flex flex-col gap-2">
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
        </section>
      </div>
    </>
  );
};

export default About;
