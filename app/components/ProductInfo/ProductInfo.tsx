"use client";

import React, { FC, useState } from "react";
import productImg2 from "@/app/assets/Images/product-img-2.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
import ProductAttribute from "./ProductAttribute";
import RangeSlider from "../RangeSlider/RangeSlider";
import Link from "next/link";
import Slider1 from "@/app/assets/Images/s1.png";
import Slider2 from "@/app/assets/Images/s2.png";
import Slider3 from "@/app/assets/Images/s3.png";
import Slider4 from "@/app/assets/Images/s4.png";
import Slider5 from "@/app/assets/Images/s5.png";
import Slider6 from "@/app/assets/Images/s6.png";

const ProductInfo = () => {
  const [ownPercentage, setOwnPercentage] = useState(2);

  return (
    <div className="container pt-44 pb-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="tablet:col-span-7 sm:col-span-6 col-span-12">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={Slider4} alt="drone" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider2} alt="drone" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider3} alt="drone" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider1} alt="drone" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider5} alt="drone" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider6} alt="drone" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex-grow border-[1px] border-solid border-[#e0e0e0] rounded-2xl p-6 tablet:col-span-5 sm:col-span-6 col-span-12">
          <div className="sm:text-4xl text-xl">Airhive One</div>
          <div className="text-xs mt-6">The value you will own</div>
          <ProgressBar completed={ownPercentage} />

          <RangeSlider
            title="Amount"
            min="1000"
            max="50000"
            step="1000"
            symbol="$"
            className="mt-8"
            onChange={(val) => {
              let percentage = (Number(val) * 100) / 50000;
              setOwnPercentage(percentage);
            }}
          />

          <div className="bg-[#F5F5F5] rounded-xl p-4 mt-6">
            <div className="text-xs text-gray-400">
              Member Subscription Costs
            </div>
            <div>
              <ul className="list-disc pl-4 ml-2">
                <li className="text-xs mt-2 text-gray-400">
                  $250 per month Or $500 quarterly payments
                </li>
                <li className="text-xs mt-2 text-gray-400">
                  Minimum Investment of $1000
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <Button disabled className="mt-4 md:max-w-[100%]">
              Public sale will open in June
            </Button>
          </div>

          <Link href="/pre-order" className="w-full">
            <Button variant="primary" className="mt-2 md:max-w-[100%]">
              Pre-order your spot for $100
            </Button>
          </Link>
        </div>
      </div>

      {/* Drone specification */}
      <div className="tablet:text-4xl text-base font-bold tablet:my-16 mt-10 mb-4">
        Drone Specification
      </div>
      <div className="tablet:flex tablet:gap-16">
        <div className="flex-grow">
          <ProductAttribute title="Weight" values={["10 pounds"]} />
          <ProductAttribute
            title="Max Dimensions (Include mounts)"
            values={["64 x 67 x 13 inches (W x L x H)"]}
          />
          <ProductAttribute title="Flight time" values={["70 Minutes"]} />
          <ProductAttribute title="Speed" values={["1.2M/S"]} />
          <ProductAttribute
            title="Camera"
            values={["3 Axis Gimbal Stabliized 4K camera"]}
          />
          <ProductAttribute
            title="Sensors"
            values={["360 Object avoidance suite", "6 Depth Sensor camera"]}
          />
          <ProductAttribute title="Total Flight distance" values={["50 km"]} />
        </div>
        <div className="flex-grow">
          <ProductAttribute
            title="Typical operation distance"
            values={["20 km"]}
          />
          <ProductAttribute
            title="Max AMSL Altitude"
            values={[
              "3000",
              "5G",
              "360 Object Avoidance",
              "Optional parachute recovery system",
              "Optional payload specific bottom door/opening",
              "Optional retractable payload mount",
              "Triple Stop Cargo Pod with smart locks",
            ]}
            noBottomBorder
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
