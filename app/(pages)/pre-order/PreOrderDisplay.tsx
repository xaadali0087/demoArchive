import { FC } from "react";
import DrownImg from "@/app/assets/Images/checkoutImg.png";
import Link from "next/link";
import TopLeftArrow from "@/app/assets/Icons/TopLeftArrow";
import Image from "next/image";
import PreOrder from "@/app/components/Forms/PreOrder/PreOrder";
import "./index.css";

interface PreOrderDisplayProps {}
const PreOrderDisplay: FC<PreOrderDisplayProps> = ({}) => {
  return (
    <div className="grid tablet:grid-cols-2 grid-cols-1 tablet:h-screen">
      <div
        className="tablet:block hidden col-span-1 bg-center tablet:bg-cover bg-no-repeat bg-[#C8CACB]"
        // style={{ backgroundImage: `url(${DrownImg.src})` }}
      >
        <div>
          <Image src={DrownImg} alt="img" className="cover h-screen w-screen max-h-fit " />
        </div>
      </div>
      <div className="col-span-1 pb-10 tablet:overflow-y-auto customScroller">
        <div className="tablet:px-[70px] sm:px-8 px-4 pt-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="md:text-xl text-lg text-gray-500">Pre-order form</p>
            </div>
            <Link href="/">
              <div className="flex items-center">
                <div className="mr-2">
                  <TopLeftArrow color="#FF4650" />
                </div>
                <div>
                  {/* <p className="text-gray-400 sm:text-xs text-xxs"> */}
                  <p className="text-gray-400">
                    Back to homepage
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="py-6 w-full">
          <div className="border-b border-dashed"></div>
          </div>
          <PreOrder />
        </div>
      </div>
    </div>
  );
};
export default PreOrderDisplay;
