import { FC } from "react";
import BannerLines from "@/app/assets/Images/bannerlines.png";
import TickMark from "@/app/assets/Icons/TickMark";
import ProductImg from "@/app/assets/Images/product-img-2.png";
import Image from "next/image";
import Button from "../Button/Button";
import TopLeftArrow from "@/app/assets/Icons/TopLeftArrow";
import TopRightArrow from "@/app/assets/Icons/TopRightArrow";
import Link from "next/link";
import CrossMark from "@/app/assets/Icons/CrossMark";

interface FailedProps {}
const Failed: FC<FailedProps> = ({}) => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-gray-100 h-screen flex items-center"
      style={{ backgroundImage: `url(${BannerLines.src})` }}
    >
      <div className="container flex justify-center">
        <div className="tablet:w-[785px] bg-white rounded-[20px] py-10">
          <div className="container">
            <div className="flex justify-center mb-4">
              <CrossMark />
            </div>
            <div>
              <p className="text-xl text-gray-500 text-center">
                Checkout failed!
              </p>
            </div>
            <div className="mt-3">
              <p className="text-gray-300 text-xs text-center">
                Hey there. We tried to charge your card but something went
                wrong. Please try again.
              </p>
            </div>
            <div className="flex justify-center pt-5">
              <Link
                href="/checkout/"
                className="flex justify-center tablet:w-[785px] w-full"
              >
                <Button
                  variant="primary"
                  className="mt-4 flex justify-center gap-2 items-center max-w-fit py-3 px-7"
                >
                  Try Again
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Failed;
