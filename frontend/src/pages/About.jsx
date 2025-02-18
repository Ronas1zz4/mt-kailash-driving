import React from "react";

const About = () => {
  return (
    <div className="w-full relative  pb-16 bg-[var(--color-light)] min-h-screen">
      {/* About Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 min-h-screen py-24">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left ">
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed">
            Founded by <strong>Daya Dhakal</strong> in <strong>2025</strong>,
            Mount Kailash Driving School is dedicated to providing top-notch
            driving education for individuals of all ages. We believe that
            learning to drive is a crucial life skill that goes beyond passing a
            test—it’s about developing responsible driving habits, understanding
            road safety, and gaining confidence behind the wheel.
          </p>
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed mt-4">
            Our school is built on a foundation of excellence, ensuring that
            every student receives comprehensive training from experienced,
            certified instructors. Whether you are a teenager eager to get
            started on your driving journey or an adult looking to improve your
            driving skills, our courses are designed to meet your needs with
            flexibility and efficiency.
          </p>
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed mt-4">
            We emphasize a hands-on approach with real-road driving experience,
            advanced defensive driving techniques, and modern vehicles equipped
            with the latest safety features. Our goal is to make every student a
            confident and responsible driver who understands the importance of
            safety, rules, and regulations on the road.
          </p>
          {/* Additional Content to make the About section fuller */}
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed mt-4">
            We also offer refresher courses for experienced drivers looking to
            update their skills, learn about new traffic laws, or get
            comfortable with modern car technology. Whether you're a first-timer
            or a seasoned driver, Mount Kailash Driving School is the place to
            refine your skills.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="YOUR_IMAGE_URL_HERE" // Replace with the actual image URL
            alt="About Mount Kailash Driving Center"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="w-full flex flex-col justify-center items-center py-8 bg-nav">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-[var(--color-text)] mb-6">
            Our Vision
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text)] font-primary leading-relaxed">
            At Mount Kailash Driving School, our vision is to create
            responsible, confident, and skilled drivers who prioritize safety on
            the road. We aim to transform the way people perceive driving
            education by providing high-quality training that instills a deep
            understanding of road rules, traffic laws, and safe driving
            practices. We strive to cultivate a culture of safety,
            responsibility, and continuous learning, where students gain not
            only the skills to pass a driving test but the knowledge to drive
            confidently and make informed decisions in real-world driving
            scenarios. Our goal is to ensure that our students leave with a deep
            understanding of the road, the responsibility that comes with it,
            and the confidence to handle any situation safely. Our school is
            committed to offering personalized training, catering to individuals
            of all ages and skill levels. Whether you’re a teenager getting your
            first license, an adult seeking to improve your driving skills, or
            someone looking to refresh your knowledge, we are dedicated to
            providing a tailored approach that meets your needs.
          </p>
        </div>
      </div>

      {/* Certification Image */}

      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-[var(--color-text)] mb-6">
            Our Certification
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text)] mb-6 font-primary">
            We are proud to be officially certified by the State of North
            Carolina to operate as a Commercial Driver Training School. Below is
            a copy of our license.
          </p>

          <div className="flex justify-center items-center">
            <img
              src=""
              alt="Driving School Certification"
              className="max-w-full sm:max-w-3xl md:max-w-4xl w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Our Location Section */}
      <div className="w-full bg-white py-12">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8">
    {/* Left Side: Location Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-primary font-bold text-[var(--color-text)] mb-6">
        Our Location
      </h2>
      <p className="text-base md:text-lg font-primary text-[var(--color-text)] mb-4">
        We are conveniently located in the heart of North Carolina. Visit
        us at:
      </p>
      <p className="text-lg font-primary font-bold text-[var(--color-text)]">
        123 Main Street, Suite 101, City, NC 12345
      </p>
      <p className="text-base md:text-lg font-primary text-[var(--color-text)] mt-4">
        Feel free to drop by anytime during business hours!
      </p>
    </div>

    {/* Right Side: Google Map */}
    <div className="flex-1">
      <iframe
        title="Our Location on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.570527417373!2d-77.03687028464592!3d38.90731021627927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7549d36bdb7%3A0x5592e8f6fd1ec174!2s1600%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020500!5e0!3m2!1sen!2sus!4v1646743509359!5m2!1sen!2sus"
        width="100%"
        height="350"
        className="rounded-lg shadow-md"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
