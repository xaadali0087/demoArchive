import { FC } from "react";
import BannerLines from "@/app/assets/Images/bannerlines.png";
import TickMark from "@/app/assets/Icons/TickMark";
import ProductImg from "@/app/assets/Images/product-img-2.png";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import TopLeftArrow from "@/app/assets/Icons/TopLeftArrow";

interface CustomErrorProps {}
const CustomError: FC<CustomErrorProps> = ({}) => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-gray-100 py-14 sm:mb-20"
      style={{ backgroundImage: `url(${BannerLines.src})` }}
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="tablet:w-[785px] bg-white rounded-[20px] pt-14 sm:pb-11 pb-20">
            <div className="container">
              <div>
                <p className="sm:text-6xl text-5xl text-500 font-bold text-center">
                  404 Error
                </p>
              </div>
              <div className="sm:mt-4 mt-2">
                <p className="sm:text-xl text-lg text-gray-500 text-center">
                  Page not found
                </p>
              </div>
              <div>
                <p className="sm:text-sm text-xs text-gray-400 text-center">
                  Oops! Looks like you&apos;ve stumbled upon a page that doesn&apos;t
                  exist.
                </p>
              </div>
              <div className="flex justify-center sm:mt-11 mt-24">
                <Image src={ProductImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <Link
            href="/"
            className="flex justify-center tablet:w-[785px] w-full"
          >
            <Button
              variant="primary"
              // className="my-4 flex justify-center gap-2 items-center tablet:min-w-[90%] w-full py-3"
              className="my-4 flex justify-center gap-2 items-center tablet:min-w-[90%] min-w-[80%] w-full py-3"
            >
              <TopLeftArrow color="#FFF"/> Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CustomError;
