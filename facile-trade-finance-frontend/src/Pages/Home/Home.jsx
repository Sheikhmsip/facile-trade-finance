import Banner from "../../Components/Banner/Banner";
import About from "../About/About";
import Award from "../../Components/Award/Award";
import Services from "../Services/Services";
// import Team from "../../Components/Team/Team";
import { Video } from "../../Components/Video/Video";
import Partners from "../Partners/Partners";
// import video from "../../../src/assets/video/FacileTreadFinance.mp4";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Video />
      <About />
      <Services />
      <Partners></Partners>

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
      {/* <Team /> */}
    </div>
  );
};

export default Home;
