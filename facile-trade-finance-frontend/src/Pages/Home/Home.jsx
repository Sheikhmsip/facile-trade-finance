import Banner from "../../Components/Banner/Banner";
import About from "../About/About";
import Award from "../Award/Award";
import Services from "../Services/Services";
import Team from "../Team/Team";
import { Video } from "../Video/Video";
// import video from "../../../src/assets/video/FacileTreadFinance.mp4";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      <Services />
      <Video />
      {/* <video
        className="h-[100%] w-[100%] "
        style={{ objectFit: "cover" }}
        src={video}
        autoPlay
        loop
        controls
        playsInline
      ></video> */}
      <Award />
      <Team />
    </div>
  );
};

export default Home;
