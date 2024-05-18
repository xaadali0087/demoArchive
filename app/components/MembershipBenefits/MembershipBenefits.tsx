"use client";

// import React, { useEffect, useRef, useState } from "react";
// import Benefit from "./Benefit";
// import droneCam from "@/app/assets/Images/drone-cam.png";
// import droneCam1 from "@/app/assets/Images/drone-cam-1.png";
// import Image from "next/image";
// import { useInView } from 'react-intersection-observer';
// const MembershipBenefits = () => {
//   const [isActive, setIsActive] = useState("01");
//   // const [isHighlighted, setIsHighlighted] = useState(false);
//   // const ref = useRef<HTMLElement>(null);
//   // const { inView } = useInView({ threshold: 0.5 }); // Observe when 50% or more is visible
//   // useEffect(() => {
//   //   setIsHighlighted(inView);
//   // }, [inView]);

//   return (
//     <div className="container pt-[157px]">
//       <div className="sm:text-sm text-center text-gray-600">
//         Benefits of being a Member
//       </div>
//       <div className="text-center tablet:text-5xl sm:text-4xl text-lg leading-7 sm:pt-6">
//         Benefits of being a Member
//       </div>
//       <div className="sm:flex justify-between pt-24">
//         <div className="tablet:w-6/12 sm:w-3/5">
//           <Benefit
//             benefitNumber={"01"}
//             text={`Earn US Dollar Coin from every mission your \n drone completes on the Airhive Network.`}
//             isActive={isActive === "01"}
//             handleClick={() => setIsActive("01")}
//             // ref={ref}
//             // isHighlighted={isHighlighted}
//           />
//           <Benefit
//             benefitNumber={"02"}
//             text={`Access to Exclusive NFT’s Digital and \n Physical Merch, products and service drops`}
//             isActive={isActive === "02"}
//             handleClick={() => setIsActive("02")}
//             // ref={ref}
//             // isHighlighted={isHighlighted}
//           />
//           <Benefit
//             benefitNumber={"03"}
//             text={`Discounts on field trips as \n founding member`}
//             isActive={isActive === "03"}
//             handleClick={() => setIsActive("03")}
//             // ref={ref}
//             // isHighlighted={isHighlighted}
//           />
//           <Benefit
//             benefitNumber={"04"}
//             text={`Access to exclusive virtual \n and physical events`}
//             isActive={isActive === "04"}
//             handleClick={() => setIsActive("04")}
//             // ref={ref}
//             // isHighlighted={isHighlighted}
//           />
//           <Benefit
//             benefitNumber={"05"}
//             text={`Premier priority of service \n on network`}
//             isActive={isActive === "05"}
//             handleClick={() => setIsActive("05")}
//             // ref={ref}
//             // isHighlighted={isHighlighted}
//           />
//           <Benefit
//             benefitNumber={"06"}
//             text={`Earn Rewards from using the platform \n (trying prompts, interacting, using \n missions, loyalty program) `}
//             isActive={isActive === "06"}
//             handleClick={() => setIsActive("06")}
//             // ref={ref}
//             // isHighlighted={isHighlighted}
//           />
//         </div>
//         <div className="tablet:w-5/12 sm:w-1/3">
//           <div className="h-[307px] bg-center bg-cover bg-no-repeat rounded-2xl mb-6" style={{ backgroundImage: `url(${droneCam.src})` }}></div>
//           <div className="h-[307px] bg-center bg-cover bg-no-repeat rounded-2xl sm:block hidden" style={{ backgroundImage: `url(${droneCam1.src})` }}></div>
//           {/* <Image src={droneCam} alt="drone" className="max-h-[307px]" />
//           <Image src={droneCam1} alt="drone" className="mt-4 max-h-[307px]" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MembershipBenefits;

import React, { useEffect, useState } from "react";
import Benefit from "./Benefit";
import droneCam from "@/app/assets/Images/drone-cam.png";
import droneCam1 from "@/app/assets/Images/drone-cam-1.png";

const MembershipBenefits = () => {
  const [isActive, setIsActive] = useState("01");
  const [isHighlighted, setIsHighlighted] = useState<{
    [key: string]: boolean;
  }>({});

  const handleScroll = () => {
    const benefitRefs = Array.from(
      document.querySelectorAll("[data-benefit-ref]")
    );
    benefitRefs.forEach((ref) => {
      const inView =
        ref.getBoundingClientRect().top < window.innerHeight * 0.6 &&
        ref.getBoundingClientRect().bottom > window.innerHeight * 0.5;
      setIsHighlighted((prev) => ({
        ...prev,
        [ref.getAttribute("data-benefit-ref") || ""]: inView,
      }));
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container sm:pt-[157px] pt-24">
      <div className="md:w-full w-[220px] mx-auto">
        <div className="sm:text-sm text-center text-gray-600">
          Benefits of being a Member
        </div>
        <div className="text-center sm:text-5xl text-3xl sm:pt-6">
          Benefits of being a Member
        </div>
      </div>
      <div className="sm:flex justify-between tablet:pt-24 sm:pt-16 pt-8 relative">
        {/* <div className="tablet:w-6/12 sm:w-3/5"> */}
        <div className="tablet:w-6/12 sm:w-2/3">
          <Benefit
            benefitNumber={"01"}
            text={`Earn US Dollar Coin from every mission your \n drone completes on the Airhive Network.`}
            isActive={isActive === "01"}
            handleClick={() => setIsActive("01")}
            isHighlighted={isHighlighted["01"]}
            dataRef="01"
          />
          <Benefit
            benefitNumber={"02"}
            text={`Access to Exclusive NFT’s Digital and \n Physical Merch, products and \n service drops`}
            isActive={isActive === "02"}
            handleClick={() => setIsActive("02")}
            isHighlighted={isHighlighted["02"]}
            dataRef="02"
          />
          <Benefit
            benefitNumber={"03"}
            text={`Discounts on field trips as \n founding member`}
            isActive={isActive === "03"}
            handleClick={() => setIsActive("03")}
            isHighlighted={isHighlighted["03"]}
            dataRef="03"
            textClassName="w-[180px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
          />
          <Benefit
            benefitNumber={"04"}
            text={`Access to exclusive virtual \n and physical events`}
            isActive={isActive === "04"}
            handleClick={() => setIsActive("04")}
            isHighlighted={isHighlighted["04"]}
            dataRef="04"
            textClassName="w-[180px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
          />
          <Benefit
            benefitNumber={"05"}
            text={`Premier priority of service \n on network`}
            isActive={isActive === "05"}
            handleClick={() => setIsActive("05")}
            isHighlighted={isHighlighted["05"]}
            dataRef="05"
            textClassName="w-[180px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
          />
          <Benefit
            benefitNumber={"06"}
            text={`Earn Rewards from using the platform \n (trying prompts, interacting, using \n missions, loyalty program) `}
            isActive={isActive === "06"}
            handleClick={() => setIsActive("06")}
            isHighlighted={isHighlighted["06"]}
            dataRef="06"
          />
        </div>
        {/* <div className="tablet:w-5/12 sm:w-1/3 sticky top-0"> */}
        <div className="tablet:w-5/12 sm:w-1/4 sticky top-0">
          <div
            className="tablet:h-[307px] sm:h-[350px] h-[158px] bg-center bg-cover bg-no-repeat rounded-2xl mb-6"
            style={{ backgroundImage: `url(${droneCam.src})` }}
          ></div>
          <div
            className="tablet:h-[307px] sm:h-[350px] bg-center bg-cover bg-no-repeat rounded-2xl sm:block hidden"
            style={{ backgroundImage: `url(${droneCam1.src})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MembershipBenefits;
