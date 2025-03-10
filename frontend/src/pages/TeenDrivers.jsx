import React from "react";
import {
  AlertCircle,
  CheckCircle,
  ClipboardCheck,
  FileText,
} from "lucide-react";
import { Link } from "react-router";
import TeenDriving from "../assets/teendriving.jpg";
import DrivingCenter from "../assets/drivingcenter.jpg";

const TeenDriversPage = () => {
  return (
    <div className="max-w-full relative font-primary">
      {/* Teen Drivers Program Section */}
      <section className="relative max-w-full h-screen flex items-center bg-[var(--color-light)] px-4 sm:px-8 md:px-12">
        <div
          className="absolute inset-0 bg-cover bg-left brightness-40"
          style={{ backgroundImage: `url(${TeenDriving})` }}
        ></div>
        <div className="relative w-full max-w-5xl mx-auto text-left px-3 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white drop-shadow-lg leading-tight">
            Teen Drivers Education at
            <br /> <span className="text-dark"> Mt Kailash Driving Center</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-secondary-text)] mt-2 font-primary drop-shadow-md">
            Expert instructors help teen drivers gain real-world experience,
            building the skills, safety, and confidence they need on the road.
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

      {/*Img  */}
      <section className="max-w-5xl mx-auto h-screen flex flex-col md:flex-row items-center p-6 md:p-12">
        {/* Left Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center inset-0 bg-cover bg-center brightness-40 h-100 md:h-full"
          style={{ backgroundImage: `url(${DrivingCenter})` }}
        ></div>

        {/* Right Text Content Section */}
        <div className="w-full md:w-1/2 text-left mt-6 md:mt-0 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Approved Drivers Training Courses
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            To participate in a Teen Drivers Training program in the State of
            North Carolina, you must be 18 or younger when you take the course.
            If you are 18 or over, visit North Carolina DMV to get a driver's
            permit. Mt Kailash Driving School can assist with Behind the Wheel
            training after you get your driver’s permit.
          </p>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-dark font-bold text-lg mr-2">✔</span>{" "}
              Teaching Safe Drivers
            </li>
            <li className="flex items-center">
              <span className="text-dark font-bold text-lg mr-2">✔</span> 30
              hours of classroom instruction, 6 hours of on-road training
            </li>
            <li className="flex items-center">
              <span className="text-dark font-bold text-lg mr-2">✔</span> Peace
              of mind for parents
            </li>
            <li className="flex items-center">
              <span className="text-dark font-bold text-lg mr-2">✔</span>{" "}
              Experienced, certified instructors
            </li>
          </ul>
          <Link to="/schedule">
            <button className="bg-dark text-white px-6 py-3 rounded-lg w-full md:w-auto mt-4 hover:bg-white hover:text-black hover:border border-dark">
              Start Drivers Training
            </button>
          </Link>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="w-full py-6 max-w-5xl mx-auto">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-primary font-semibold text-[var(--color-text)] mb-2 md:mb-4 text-left md:text-center">
              Teen Drivers Requirements
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-secondary-text)] mb-2 max-w-2xl mx-auto font-primary text-left md:text-center">
              Understanding the requirements for teen drivers is the first step
              toward getting your license. Here's what you need to know:
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:gap-12  py-4 md:py-12 md:grid-cols-2 ">
            {/* Eligibility Requirements Card */}
            <div className="bg-white rounded shadow p-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-primary font-semibold flex items-center gap-3 text-[var(--color-primary)]">
                <AlertCircle className="h-6 w-6" />
                Eligibility Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Age Requirement:",
                    description:
                      "Must be at least 15 years and 6 months old to begin the program.",
                  },
                  {
                    title: "Learner's Permit:",
                    description:
                      "Must obtain a learner's permit before beginning behind-the-wheel training.",
                  },
                  {
                    title: "Parental Consent:",
                    description:
                      "Parent or guardian must sign consent forms for students under 18.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-2">
                      <CheckCircle className="h-5 w-6 text-dark" />
                    </div>
                    <div>
                      <span className="font-medium text-sm sm:text-base text-[var(--color-text)]">
                        {item.title}
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--color-secondary-text)]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentation Needed Card */}
            <div className=" bg-white rounded shadow p-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-primary font-semibold flex items-center gap-3 text-[var(--color-text)]">
                <FileText className="h-6 w-6 text-[var(--color-primary)]" />
                Documentation Needed
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Identification:",
                    description:
                      "Birth certificate or passport, Social Security card, and school ID.",
                  },
                  {
                    title: "Proof of Residence:",
                    description:
                      "Utility bill, bank statement, or other official mail showing current address.",
                  },
                  {
                    title: "Medical Information:",
                    description:
                      "Any relevant medical information that instructors should be aware of.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-6 text-dark mt-2" />
                    </div>
                    <div>
                      <span className="font-medium text-sm sm:text-base text-[var(--color-text)]">
                        {item.title}
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--color-secondary-text)]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Graduated Licensing Process Card */}
        <div className="rounded  space-y-6 max-w-5xl mx-auto p-4">
          <h3 className="text-xl sm:text-2xl font-primary font-semibold flex items-center gap-3 text-[var(--color-primary)]">
            <ClipboardCheck className="h-6 w-7" />
            Graduated Licensing Process
          </h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 w-full ">
            {[
              {
                title: "Learner's Permit",
                details: [
                  "Complete 30 hours of classroom instruction",
                  "Pass written knowledge test",
                  "Must drive with licensed adult 21 or older",
                  "No driving between midnight and 5 AM",
                ],
              },
              {
                title: "Provisional License",
                details: [
                  "Complete 6 hours of behind-the-wheel training",
                  "Log 50 hours of supervised driving (10 at night)",
                  "Pass road skills test",
                  "Limited passengers for first 6 months",
                ],
              },
              {
                title: "Full License",
                details: [
                  "Hold provisional license for 12 months",
                  "No traffic violations during provisional period",
                  "Complete advanced driver education (recommended)",
                  "All restrictions lifted",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-3 shadow rounded-lg p-4 bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-start rounded"></div>
                  <h4 className="font-bold  text-[var(--color-dark)] ">
                    {item.title}
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-[var(--color-secondary-text)]">
                  {item.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeenDriversPage;
