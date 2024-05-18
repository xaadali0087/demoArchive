import { FC } from "react";
import BannerLines from "@/app/assets/Images/bannerlines.png";
import Image from "next/image";
import DroneImg from "@/app/assets/Images/ownedDrone1.png";
import DroneImg2 from "@/app/assets/Images/ownedDrone2.png";
interface OwnDroneProps {}
const OwnDrone: FC<OwnDroneProps> = ({}) => {
  return (
    <div
      className="bg-no-repeat bg-top bg-contain -mt-24"
      style={{ backgroundImage: `url(${BannerLines.src})` }}
    >
      <div className="container pt-48">
        <div className="sm:w-[410px] w-[225px]">
          <p className="tablet:text-[64px] sm:text-[48px] text-[28px] tablet:leading-[64px] sm:leading-[48px] leading-[28px] tablet:mb-0 sm:mb-3 mb-8">
            The People Owned Drone Network
          </p>
        </div>
        <div className="grid grid-cols-12 tablet:gap-10 gap-5 text-gray-400">
          <div className="tablet:col-span-5 sm:col-span-6 col-span-12">
            <div className="tablet:my-5 mb-4">
              <p className="sm:text-base text-xs">
                Airhive.io ushers in a new era of cooperative economics, spatial
                computing and machine-fi, merging AI-powered drones with Web3
                technology.{" "}
              </p>
            </div>
            <div
            //   style={{ backgroundImage: `url(${DroneImg.src})` }}
            >
              <Image src={DroneImg} alt="img" className="w-full tablet:h-[465px] sm:h-[382px] h-[125px] rounded-2xl object-cover" />
            </div>
          </div>
          <div className="tablet:col-span-7 sm:col-span-6 col-span-12">
            <div className="tablet:w-[90%] tablet:my-5 mb-4">
              <p className="sm:text-base text-xs">
                Ditch the limitations of the ground. Airhive.io integrates
                secure Web3 technology with aerial drones, unlocking a new
                dimension of spatial computing.
              </p>
            </div>
            <div className="tablet:w-[90%] mb-5">
              <p className="sm:text-base text-xs">
                <span className="text-primary-500 font-bold">
                  It’s society’s turn to take control of our data and  build new
                  infrastructure networks to monetize it in a secure,
                  decentralized environment.
                </span>{" "}
                Earn USDC from every mission that your drone node completes to
                create new passive income revenue streams.{" "}
                <span className="text-primary-500 font-bold">
                  Transform the physical world with spatial computing tools,
                  unlocking possibilities beyond your wildest dreams.
                </span>{" "}
                The future unfolds in the skies above, and at Airhive.io,
                you&apos;re in the pilot&apos;s seat.
              </p>
            </div>
            <div
              className="tablet:block hidden"
              //   style={{ backgroundImage: `url(${DroneImg.src})` }}
            >
              <Image src={DroneImg2} alt="img" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
        <div
          className="tablet:hidden block"
          //   style={{ backgroundImage: `url(${DroneImg.src})` }}
        >
          <Image src={DroneImg2} alt="img" className="w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
export default OwnDrone;
