import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jawad Hossain Tanjim",
    role: "MERN Stack Developer",
    image:
      "https://i.ibb.co/D8kz5wY/336536273-620458166790507-2988363118309037949-n.jpg",
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    name: "Mohammed Mainul Islam",
    role: "MERN Stack Developer",
    image:
      "https://i.ibb.co/yY71x7m/Whats-App-Image-2024-01-22-at-22-22-57-da0fb394.jpg",
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    name: "Mohammed Mainul Islam",
    role: "MERN Stack Developer",
    image:
      "https://i.ibb.co/yY71x7m/Whats-App-Image-2024-01-22-at-22-22-57-da0fb394.jpg",
    socials: {
      facebook: "#",
      github: "#",
      linkedin: "#",
      email: "#",
    },
  },
];

const Team = () => {
  return (
    <div className="bg-gray-800 py-20 px-6 text-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-blue-400 font-semibold uppercase tracking-wide">
          Our Team
        </p>
        <h1 className="text-5xl font-extrabold mt-3">Meet Our Experts</h1>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Avatar Section */}
            <div className="avatarc mx-17 lg:mx-32 mt-8 lg:mb-4">
              <div className="w-32 rounded-full ring ring-[#05345E] ring-offset-[#05345E] hover:ring-white hover:ring-offset-4 ring-offset-3 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="lg:text-2xl text-xl font-semibold text-white">
                {member.name}
              </h2>
              <p className="text-blue-400 uppercase text-sm font-medium mt-2">
                {member.role}
              </p>
              <div className="mt-4 flex justify-center gap-6 text-gray-400">
                <a
                  href={member.socials.facebook}
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href={member.socials.github}
                  className="hover:text-gray-100 transition"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={`mailto:${member.socials.email}`}
                  className="hover:text-red-500 transition"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
