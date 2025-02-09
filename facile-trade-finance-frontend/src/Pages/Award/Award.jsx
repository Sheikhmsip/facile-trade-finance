import React from "react";
import Marquee from "react-fast-marquee";

const Award = () => {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="font-bold text-blue-600 uppercase">
          Awards & Certifications
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Awards & Certifications
        </h1>
      </div>

      {/* Marquee Section */}
      <div className="max-w-screen-2xl mx-auto">
        <Marquee gradient={true} speed={50} className="overflow-visible">
          {/* Award 1 */}
          <div className="mx-12 py-12 flex flex-col items-center text-center">
            <img
              src="https://www.contour.network/wp-content/uploads/2023/05/GTR-Saudi-Arabia-2023_Awards_logo.png"
              className="w-40"
              alt="GTR Saudi Arabia 2023 Awards"
            />
            <h5 className="text-lg font-semibold text-gray-800 mt-2">
              GTR Saudi Arabia 2023 Awards
            </h5>
            <p className="text-sm text-gray-600">
              Leader in Trade - Digital Innovation
            </p>
          </div>

          {/* Award 2 */}
          <div className="mx-12 py-12 flex flex-col items-center text-center">
            <img
              src="https://www.contour.network/wp-content/uploads/2023/05/8593_CP_CTAwards_2023_Pos_01.png"
              className="w-40"
              alt="CTA Awards 2023"
            />
            <h5 className="text-lg font-semibold text-gray-800 mt-2">
              CTA Awards 2023
            </h5>
            <p className="text-sm text-gray-600">Excellence in Digital Trade</p>
          </div>

          {/* Award 3 */}
          <div className="mx-12 py-12 flex flex-col items-center text-center">
            <img
              src="https://contour.network/wp-content/uploads/2023/01/contour_awards_trade-finance-awards-2023.jpg"
              className="w-40"
              alt="Trade Finance Awards 2023"
            />
            <h5 className="text-lg font-semibold text-gray-800 mt-2">
              Trade Finance Awards 2023
            </h5>
            <p className="text-sm text-gray-600">Best Fintech Innovation</p>
          </div>

          {/* Award 4 */}
          <div className="mx-12 py-12 flex flex-col items-center text-center">
            <img
              src="https://contour.network/wp-content/uploads/2023/01/contour_awards_corporate-treasurer.png"
              className="w-40"
              alt="Corporate Treasurer Awards"
            />
            <h5 className="text-lg font-semibold text-gray-800 mt-2">
              Corporate Treasurer Awards
            </h5>
            <p className="text-sm text-gray-600">
              Most Innovative Treasury Solution
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Award;
