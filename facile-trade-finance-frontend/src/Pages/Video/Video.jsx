import React from "react";
import { ContainerScroll } from "../../Components/ContainerScroll/ContainerScroll ";
import video from "../../../src/assets/video/FacileTreadFinance.mp4";

export function Video() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        {/* Video Background */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <video
            src={video}
            autoPlay
            loop
            controls
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
      </ContainerScroll>
    </div>
  );
}
