"use client";
import CircleArrowRight from "@/app/assets/Icons/CircleArrowRight";
import FooterLogo from "@/app/assets/Icons/FooterLogo";
import InstagramIcon from "@/app/assets/Icons/InstagramIcon";
import TwitterIcon from "@/app/assets/Icons/TwitterIcon";
import YoutubeIcon from "@/app/assets/Icons/YoutubeIcon";
import { FC, useState } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-gray-500">
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 xl:gap-12 gap-6">
          <div className="col-span-1">
            <div className="w-full border-y border-y-gray-300 py-5">
              <div className="md:w-[81%]">
                <div className="font-bold text-white mb-3">
                  <p>Do you want more information?</p>
                </div>
                <div className="text-gray-250 text-xs font-normal">
                  <p>
                    Contact Our Sales Team Now And It Will Be Their Pleasure To
                    Help You.
                  </p>
                </div>
              </div>
              <div className="tablet:w-[81%] w-full flex justify-between items-center text-xs text-white mt-5">
                <div>
                  <a href="https://www.airhive.io/contact-us/">Contact us</a>
                </div>
                <div>
                  <a href="https://www.airhive.io/contact-us/">
                    <CircleArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full border-y border-y-gray-300 py-5">
              <div className="md:w-[81%]">
                <div className="font-bold text-white mb-3">
                  <p>Do you want to stay in the loop?</p>
                </div>
                <div className="text-gray-250 text-xs font-normal">
                  <p>
                    <a href="mailto:hello@airhive.io" target="_blank">
                      Hello@Airhive.Io
                    </a>
                  </p>
                  <p>
                    <a href="mailto:press@airhive.io" target="_blank">
                      Press@Airhive.Io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:my-12 my-8">
          <FooterLogo />
        </div>
        <div className="md:mt-12 mt-8 grid md:grid-cols-3 grid-cols-2 items-center">
          <div className="flex items-center md:col-span-1 col-span-2">
            <div className="mr-2">
              <a href="https://twitter.com/flywithairhive">
                <TwitterIcon />
              </a>
            </div>
            <div className="mr-2">
              <a href="https://www.youtube.com/channel/UClSdDhIBqgZ9UgQiQSsrW9Q">
                <YoutubeIcon />
              </a>
            </div>
            <div className="mr-2">
              <a href="https://www.instagram.com/flywithairhive/">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="flex md:justify-center items-center text-white sm:text-xs text-xxs md:col-span-1 md:mt-0 mt-3">
            <div className="mr-4">
              <p>
                <a href="https://www.airhive.io/product/">Airhive one</a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://www.airhive.io/company/">Company</a>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end text-gray-250 sm:text-xs text-xxs md:col-span-1 md:mt-0 mt-3">
            <div className="mr-4">
              <p>
                <a href="https://www.freeprivacypolicy.com/live/7ba9c2c8-78ff-45bc-8efd-f3b40f8b0a04">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://www.freeprivacypolicy.com/live/7ba9c2c8-78ff-45bc-8efd-f3b40f8b0a04">
                  Cookie Notice
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
