import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div className="relative">
      <AwesomeSlider className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px]">
        {/* Slide 1 */}
        <div className="relative bg-black">
          <img
            src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2161449.jpg&fm=jpg"
            alt="Slide 1"
            className="w-full h-[300px] lg:h-full object-cover opacity-40"
          />
          <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-10 transform -translate-y-1/2 text-left text-white space-y-2 sm:space-y-3 md:space-y-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              The Trusted Network for Global Trade
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Join the digital transformation in trade finance.
            </p>
            <button className="bg-orange-500 text-white text-sm sm:text-base py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-orange-600 transition duration-300">
              SIGN UP NOW
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative bg-black">
          <img
            src="https://thumbs.dreamstime.com/b/tam-coc-ninh-binh-vietnam-september-tour-tourist-boats-bay-46711390.jpg"
            alt="Slide 2"
            className="w-full lg:w-[2000px] h-[300px] lg:h-full object-cover opacity-40"
          />
          <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-10 transform -translate-y-1/2 text-left text-white space-y-2 sm:space-y-3 md:space-y-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Explore Opportunities Together
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Reach new horizons in collaboration.
            </p>
            <button className="bg-orange-500 text-white text-sm sm:text-base py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-orange-600 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative bg-black">
          <img
            src="https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Slide 3"
            className="w-full h-[300px] lg:h-full object-cover opacity-40"
          />
          <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-10 transform -translate-y-1/2 text-left text-white space-y-2 sm:space-y-3 md:space-y-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Discover the World of Trade
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Empower your business with endless possibilities.
            </p>
            <button className="bg-orange-500 text-white text-sm sm:text-base py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-orange-600 transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
