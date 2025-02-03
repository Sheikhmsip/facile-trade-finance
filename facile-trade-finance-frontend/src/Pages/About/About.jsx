import React from "react";
import {
  BsCheckCircleFill,
  BsPeopleFill,
  BsBuildingsFill,
  BsBullseye,
} from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 py-48">
      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Vision Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#32CD32] to-[#4169E1] common-text">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Facile Trade Finance is established with a vision to set a standard
            of assisting the financial needs of the stakeholders and to be the
            best example of as a Financial consultant in Bangladesh Economy.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#32CD32] to-[#4169E1] common-text"
            variants={itemVariants}
          >
            Our Mission
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#32CD32]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-4">
                <BsCheckCircleFill className="w-8 h-8 text-[#32CD32] flex-shrink-0" />
                <p className="text-gray-700">
                  Seamless, efficient services provided Zero tolerance in
                  compliance
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#FEBA6E]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-4">
                <BsPeopleFill className="w-8 h-8 text-[#FEBA6E] flex-shrink-0" />
                <p className="text-gray-700">
                  Ensuring smooth deliverables with highest commitment to the
                  customers
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#4169E1]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-4">
                <BsBuildingsFill className="w-8 h-8 text-[#4169E1] flex-shrink-0" />
                <p className="text-gray-700">
                  Fair & competitive offers to the beneficiaries
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#32CD32]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-4">
                <BsBullseye className="w-8 h-8 text-[#32CD32] flex-shrink-0" />
                <p className="text-gray-700">
                  Reach countries top most customers with diversified offers for
                  financial needs
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
