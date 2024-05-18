import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import TopRightArrow from "@/app/assets/Icons/TopRightArrow";
// import droneImg from "@/app/assets/Images/drone-img-1.png";
import droneImg from "@/app/assets/Images/bgHomeHero2.png";
import droneImgLeft from "@/app/assets/Images/bgHomeHeroleft2.png";
import droneImgRight from "@/app/assets/Images/bgHomeHeroRight2.png";
import droneImgPhone from "@/app/assets/Images/product-img-phone.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="tablet:bg-home-hero-section bg-contain xl:bg-contain bg-no-repeat relative pt-7 overflow-hidden">
      <div className="sm:container">
        <Image
          src={droneImgLeft}
          alt="drone"
          className="sm:blur-sm blur absolute sm:max-w-[158px] max-w-[90px] tablet:hidden sm:ml-0 ml-6"
        />
      </div>
      <div className="tablet:container sm:block hidden">
        <Image src={droneImg} alt="drone" className="max-h-[412]" />
      </div>
      <div className="sm:hidden">
        <Image src={droneImgPhone} alt="drone" className="max-h-[412]" />
      </div>
      <div className="container tablet:py-10 pb-10">
        <div className="sm:container flex justify-end ">
          <Image
            src={droneImgRight}
            alt="drone"
            className="sm:blur-sm blur-[4px] absolute sm:bottom-16 bottom-[110px] sm:max-w-[250px] max-w-[110px] tablet:hidden sm:mr-0 -mr-14"
          />
        </div>
        <div>
          <p className="sm:text-sm tablet:text-center sm:text-start text-center">
            The World&apos;s first Spatial Computing Drone.
          </p>
        </div>
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold tablet:text-center sm:text-start text-center mt-2">
            INTRODUCING <br />{" "}
            <span className="text-primary-500">AIRHIVE ONE</span>
          </h2>
        </div>
        {/* <div className="flex tablet:justify-center sm:justify-start justify-center"> */}
          <Link href='/pre-order' className="flex tablet:justify-center sm:justify-start justify-center">
          <Button
            variant="primary"
            className="mt-4 flex items-center justify-center gap-2 tablet:mx-auto sm:mx-0 mx-auto tablet:py-4 py-3"
          >
            Pre-order <TopRightArrow />
          </Button>
          </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
