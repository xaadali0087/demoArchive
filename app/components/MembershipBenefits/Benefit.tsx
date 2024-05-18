// import React, { FC, RefObject, useEffect, useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { twMerge } from "tailwind-merge";

// type BenefitProps = {
//   benefitNumber: string;
//   text: string;
//   isActive: boolean;
//   handleClick: () => void;
//   // ref: RefObject<HTMLElement>;
//   // isHighlighted: boolean;
// };

// const Benefit: FC<BenefitProps> = ({
//   benefitNumber,
//   text,
//   isActive,
//   handleClick,
// }) => {
//   const [isHighlighted, setIsHighlighted] = useState(false);
//   const ref = useRef<HTMLElement>(null);
//   const { inView } = useInView({ threshold: 0.5 }); // Observe when 50% or more is visible
//   useEffect(() => {
//     setIsHighlighted(inView);
//   }, [inView]);
//   return (
//     <>
//       <div
//         ref={ref as RefObject<HTMLDivElement>}
//         className={twMerge(
//           "flex items-center cursor-pointer",
//           // isActive ? "opacity-100" : "opacity-30"
//           isHighlighted ? "opacity-100" : "opacity-30"
//         )}
//         onClick={handleClick}
//       >
//         <div
//           className={twMerge(
//             "w-3/12 text-5xl text-white font-semibold",
//             // isActive ? "primary-stroke-text" : "gray-stroke-text"
//             isHighlighted ? "primary-stroke-text" : "gray-stroke-text"
//           )}
//         >
//           {benefitNumber}
//         </div>
//         <div className="w-9/12 whitespace-pre-line sm:text-sm">{text}</div>
//       </div>
//       <div className="border-b-2 border-[#D9D9D9] my-7" />
//     </>
//   );
// };

// export default Benefit;
"use client";
import React, { FC, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type BenefitProps = {
  benefitNumber: string;
  text: string;
  isActive: boolean;
  handleClick: () => void;
  isHighlighted: boolean;
  dataRef: string;
  textClassName?: string;
};

const Benefit: FC<BenefitProps> = ({
  benefitNumber,
  text,
  isActive,
  handleClick,
  isHighlighted,
  dataRef,
  textClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.setAttribute("data-benefit-ref", dataRef);
  }, [dataRef]);

  return (
    <>
      <div
        ref={ref}
        className={twMerge(
          "flex items-center cursor-pointer",
          isHighlighted ? "opacity-100" : "opacity-30"
        )}
        onClick={handleClick}
      >
        <div
          className={twMerge(
            "w-3/12 text-5xl text-white font-semibold",
            isHighlighted ? "primary-stroke-text" : "gray-stroke-text"
          )}
        >
          {benefitNumber}
        </div>
        {benefitNumber === "01" ? (
          <div
            className={twMerge(
              "w-9/12 tablet:whitespace-pre-line sm:text-sm",
              textClassName
            )}
          >
            {text}
          </div>
        ) : (
          <div
            className={twMerge(
              "w-9/12 md:whitespace-pre-line sm:text-sm",
              textClassName
            )}
          >
            {text}
          </div>
        )}
      </div>
      <div className="border-b-2 border-[#D9D9D9] my-7" />
    </>
  );
};

export default Benefit;
