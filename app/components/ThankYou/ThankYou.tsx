import { FC } from "react";
import BannerLines from "@/app/assets/Images/bannerlines.png";
import TickMark from "@/app/assets/Icons/TickMark";
import ProductImg from "@/app/assets/Images/product-img-2.png";
import Image from "next/image";
import Button from "../Button/Button";
import TopLeftArrow from "@/app/assets/Icons/TopLeftArrow";
import TopRightArrow from "@/app/assets/Icons/TopRightArrow";
import Link from "next/link";

interface ThankYouProps {}
const ThankYou: FC<ThankYouProps> = ({}) => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-gray-100 py-14"
      style={{ backgroundImage: `url(${BannerLines.src})` }}
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="tablet:w-[785px] bg-white rounded-[20px] py-11">
            <div className="container">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-[#ECFDD1] p-4">
                  <TickMark />
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-500 text-center">Thank You!</p>
              </div>
              <div className="flex justify-center mt-14">
                <Image src={ProductImg} alt="img" />
              </div>
              <div className="py-6 w-full">
              <div className="border-b border-dashed"></div>
              </div>
              <div className="flex justify-between items-center tablet:px-0 sm:px-3">
                <div>
                  <p className="text-gray-500 text-center font-medium text-[16px]">
                    Thank you for submitting the form on our website. Your
                    information has been successfully received. Please expect a
                    response via email shortly. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:pt-5 pt-32">
          <Link
            href="/"
            className="flex justify-center tablet:w-[785px] w-full"
          >
            <Button
              variant="primary"
              // className="my-4 flex justify-center gap-2 items-center min-w-[90%] w-full py-3"
              className="my-4 flex justify-center gap-2 items-center min-w-[90%] w-full py-3"
>
              <TopLeftArrow color="#FFF" /> Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;
