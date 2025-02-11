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
// import React from "react";
// import {
//   BsCheckCircleFill,
//   BsPeopleFill,
//   BsBuildingsFill,
//   BsBullseye,
// } from "react-icons/bs";
// import { motion } from "framer-motion";

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900 py-32">
//       <motion.div
//         className="container mx-auto px-6 max-w-7xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Vision Section */}
//         <motion.div className="text-center mb-20" variants={itemVariants}>
//           <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
//             Our Vision
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             Facile Trade Finance is established with a vision to assist financial needs and
//             set an industry standard as a premier financial consultant in Bangladesh.
//           </p>
//         </motion.div>

//         {/* Mission Section */}
//         <div className="mb-16">
//           <motion.h2
//             className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600"
//             variants={itemVariants}
//           >
//             Our Mission
//           </motion.h2>
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//             variants={containerVariants}
//           >
//             {[
//               {
//                 icon: <BsCheckCircleFill className="w-10 h-10 text-green-500" />, 
//                 text: "Seamless, efficient services with zero tolerance in compliance.", 
//                 border: "border-green-500"
//               },
//               {
//                 icon: <BsPeopleFill className="w-10 h-10 text-orange-400" />, 
//                 text: "Ensuring smooth deliverables with the highest commitment to customers.", 
//                 border: "border-orange-400"
//               },
//               {
//                 icon: <BsBuildingsFill className="w-10 h-10 text-blue-500" />, 
//                 text: "Fair & competitive offers tailored for beneficiaries.", 
//                 border: "border-blue-500"
//               },
//               {
//                 icon: <BsBullseye className="w-10 h-10 text-green-500" />, 
//                 text: "Reach top customers with diversified financial solutions.", 
//                 border: "border-green-500"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-8 ${item.border}`}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="flex items-start gap-4">
//                   {item.icon}
//                   <p className="text-gray-800 text-lg">{item.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
// /** import React from "react";
// import {
//   BsCheckCircleFill,
//   BsPeopleFill,
//   BsBuildingsFill,
//   BsBullseye,
// } from "react-icons/bs";
// import { motion } from "framer-motion";

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900 py-32">
//       <motion.div
//         className="container mx-auto px-6 max-w-7xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Vision Section */}
//         <motion.div className="text-center mb-20" variants={itemVariants}>
//           <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
//             Our Vision
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             Facile Trade Finance is established with a vision to assist financial needs and
//             set an industry standard as a premier financial consultant in Bangladesh.
//           </p>
//         </motion.div>

//         {/* Mission Section */}
//         <div className="mb-16">
//           <motion.h2
//             className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600"
//             variants={itemVariants}
//           >
//             Our Mission
//           </motion.h2>
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//             variants={containerVariants}
//           >
//             {[
//               {
//                 icon: <BsCheckCircleFill className="w-10 h-10 text-green-500" />, 
//                 text: "Seamless, efficient services with zero tolerance in compliance.", 
//                 border: "border-green-500"
//               },
//               {
//                 icon: <BsPeopleFill className="w-10 h-10 text-orange-400" />, 
//                 text: "Ensuring smooth deliverables with the highest commitment to customers.", 
//                 border: "border-orange-400"
//               },
//               {
//                 icon: <BsBuildingsFill className="w-10 h-10 text-blue-500" />, 
//                 text: "Fair & competitive offers tailored for beneficiaries.", 
//                 border: "border-blue-500"
//               },
//               {
//                 icon: <BsBullseye className="w-10 h-10 text-green-500" />, 
//                 text: "Reach top customers with diversified financial solutions.", 
//                 border: "border-green-500"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-8 ${item.border}`}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="flex items-start gap-4">
//                   {item.icon}
//                   <p className="text-gray-800 text-lg">{item.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
