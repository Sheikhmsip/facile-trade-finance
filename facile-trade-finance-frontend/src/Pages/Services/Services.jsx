import React from "react";
import {
  FaFileInvoice,
  FaCreditCard,
  FaSuitcase,
  FaDollarSign,
  FaFileAlt,
  FaCalculator,
  FaCoins,
  FaBuilding,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Trade Finance for UPAS L/C",
      description:
        "We offer financing solutions for UPAS L/C to facilitate your trade requirements efficiently.",
      icon: <FaFileInvoice className="text-4xl primary-text mb-4" />,
      bgClass: "bg-gray-100",
      hoverBgClass: "hover:bg-blue-200", // Added hover background color
    },
    {
      title: "LC Advising",
      description:
        "Providing expert advising services to ensure smooth issuance and operation of Letters of Credit.",
      icon: <FaCreditCard className="text-4xl primary-text mb-4" />,
      bgClass: "bg-blue-100",
      hoverBgClass: "hover:bg-blue-300", // Added hover background color
    },
    {
      title: "OBU Funding",
      description:
        "Specialized offshore banking unit funding tailored to meet your cross-border trade needs.",
      icon: <FaSuitcase className="text-4xl primary-text mb-4" />,
      bgClass: "bg-gray-100",
      hoverBgClass: "hover:bg-blue-200", // Added hover background color
    },
    {
      title: "US Dollar Syndication",
      description:
        "Comprehensive syndication solutions in US Dollars for large-scale trade financing.",
      icon: <FaDollarSign className="text-4xl primary-text mb-4" />,
      bgClass: "bg-blue-100",
      hoverBgClass: "hover:bg-blue-300", // Added hover background color
    },
    {
      title: "L/C Confirmation",
      description:
        "Reliable confirmation services for Letters of Credit to ensure secure trade transactions.",
      icon: <FaFileAlt className="text-4xl primary-text mb-4" />,
      bgClass: "bg-gray-100",
      hoverBgClass: "hover:bg-blue-200", // Added hover background color
    },
    {
      title: "L/C Discounting",
      description:
        "Efficient L/C discounting services to improve your cash flow and liquidity.",
      icon: <FaCalculator className="text-4xl primary-text mb-4" />,
      bgClass: "bg-blue-100",
      hoverBgClass: "hover:bg-blue-300", // Added hover background color
    },
    {
      title: "Islamic Financing (Murabaha)",
      description:
        "Sharia-compliant Murabaha financing to support your Islamic trade finance needs.",
      icon: <FaCoins className="text-4xl primary-text mb-4" />,
      bgClass: "bg-gray-100",
      hoverBgClass: "hover:bg-blue-200", // Added hover background color
    },
    {
      title: "Trade Loan",
      description:
        "Flexible trade loan options to bridge the gap between your trade cycles.",
      icon: <FaBuilding className="text-4xl primary-text mb-4" />,
      bgClass: "bg-blue-100",
      hoverBgClass: "hover:bg-blue-300", // Added hover background color
    },
  ];

  const path = location.pathname == "/services"


  return (
    <div className={`max-w-screen-xl lg:mx-auto mx-4 ${path ? "pt-35 pb-10" : "pt-20"}`}>
      <div className="text-center mb-10">
        <p className="common-text primary-font uppercase">Our Services</p>
        <h1 className="text-3xl font-bold text-[#F19131] mt-2 primary-font">
          Featured Services That We Provide
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div data-aos="zoom-in-up" data-aos-duration="1000"
            key={index}
            className={`p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${service.bgClass} ${service.hoverBgClass} hover:shadow-lg`}
          >
            <div className="flex flex-col items-center">
             <p>{service.icon}</p>
              <h2 className="text-xl common-font common-text mb-3 text-center">
                {service.title}
              </h2>
            </div>
            <p className="secondary-text text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

/**"use client";

import {
  FileText,
  CreditCard,
  Briefcase,
  DollarSign,
  FileCheck,
  Calculator,
  Coins,
  Building,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Trade Finance for UPAS L/C",
      description:
        "Financing solutions for UPAS L/C to facilitate trade requirements efficiently.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "LC Advising",
      description:
        "Expert advising services for smooth issuance and operation of Letters of Credit.",
      icon: <CreditCard className="h-8 w-8" />,
    },
    {
      title: "OBU Funding",
      description:
        "Specialized offshore banking unit funding for cross-border trade needs.",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      title: "US Dollar Syndication",
      description:
        "Comprehensive syndication solutions in US Dollars for large-scale trade financing.",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "L/C Confirmation",
      description:
        "Reliable confirmation services for Letters of Credit to ensure secure transactions.",
      icon: <FileCheck className="h-8 w-8" />,
    },
    {
      title: "L/C Discounting",
      description:
        "Efficient L/C discounting services to improve cash flow and liquidity.",
      icon: <Calculator className="h-8 w-8" />,
    },
    {
      title: "Islamic Financing (Murabaha)",
      description:
        "Sharia-compliant Murabaha financing to support Islamic trade finance needs.",
      icon: <Coins className="h-8 w-8" />,
    },
    {
      title: "Trade Loan",
      description:
        "Flexible trade loan options to bridge the gap between trade cycles.",
      icon: <Building className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Featured Services That We Provide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-600/80 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex flex-col items-center pt-6">
                <div className="p-3 primary-text border-1 rounded-full mb-4 group-hover:bg-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-center common-text group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div>
                <p className="text-sm text-center text-gray-600 group-hover:text-blue-100 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
 */
