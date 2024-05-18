"use client";
import { FC } from "react";
import BannerLines from "@/app/assets/Images/bannerlines.png";
import TickMark from "@/app/assets/Icons/TickMark";
import ProductImg from "@/app/assets/Images/product-img-2.png";
import Image from "next/image";
import Button from "../Button/Button";
import TopLeftArrow from "@/app/assets/Icons/TopLeftArrow";
import TopRightArrow from "@/app/assets/Icons/TopRightArrow";
import Link from "next/link";
import metamaskIcon from "@/app/assets/Images/metamaskIcon.png";
import { useAppSelector } from "../ReduxToolKit/hook";

interface SuccessfulProps {}
const Successful: FC<SuccessfulProps> = ({}) => {

  const {customerAddress} = useAppSelector(state=>state.web3)

  const customerAddressToStr = customerAddress.toString();
  const formatHexString = (str:string) => {
    return `${str.slice(0, 6)}....${str.slice(-7)}`;
  };
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
                <p className="text-xl text-gray-500 text-center">
                  Checkout success
                </p>
              </div>
              <div className="flex justify-center mt-14">
                <Image src={ProductImg} alt="img" />
              </div>
              <div className="py-6 w-full">
                <div className="border-b border-dashed"></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-500">Total checkout</p>
                </div>
                <div>
                  <p className="font-bold text-primary-500 text-end">100 USDT</p>
                </div>
              </div>
              <div className="py-6 w-full">
                <div className="border-b border-dashed"></div>
              </div>
              <div className="grid tablet:grid-cols-2 grid-cols-1 text-gray-500">
                <div className="col-span-1">
                  <p className="font-bold mb-3">Customer information</p>
                  <p className="text-xs">{formatHexString(customerAddressToStr)}</p>
                </div>
                <div className="col-span-1 md:mt-0 mt-4">
                  <p className="font-bold mb-3">Payment method</p>
                  <div className="flex text-xs items-center">
                    <Image className="mr-3 max-w-8" src={metamaskIcon} alt="icon" />{" "}
                    <p>Crypto</p>
                  </div>
                </div>
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
              <TopLeftArrow color="#FFF" /> Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Successful;
