"use client";
import Image from "next/image";
import DrownImg from "@/app/assets/Images/checkoutImg.png";
import { FC, useEffect, useState } from "react";
import TopLeftArrow from "@/app/assets/Icons/TopLeftArrow";
import OrderProduct from "@/app/assets/Images/orderProduct.png";
import CreditCardIcon from "@/app/assets/Icons/CreditCardIcon";
import WalletIcon from "@/app/assets/Icons/WalletIcon";
import Link from "next/link";
import Button from "@/app/components/Button/Button";
import "./index.css";
import { useRouter } from "next/navigation";
// import MetaMaskProvider from "@/app/components/MetaMask/useMetaMaskProvider";
import CryptoDialogue from "@/app/components/DialogueModal/CryptoDialogue";

interface CheckoutProps { }
const Checkout: FC<CheckoutProps> = ({ }) => {

  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // const [isChecked, setIsChecked] = useState<boolean>(() => {
  //   return typeof window !== "undefined" ? sessionStorage.getItem("isChecked") === "true" : false;


  // });
  const [enable, setEnable] = useState<boolean>(false);
  const [openDialogue, setOpenDialogue] = useState<boolean>(false);
  const handleRadio = (e: any) => {
    console.log("value = ", e.target.value);
    setPaymentMethod(e.target.value);
    // setEnable(true);
  };



  useEffect(() => {
    //
    if (paymentMethod && isChecked) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [paymentMethod, isChecked]);

  const router = useRouter();
  const payment = () => {
    if (paymentMethod === "card" && enable) {
      return router.push("https://buy.stripe.com/bIY4jrdYO9TeatiaEF");
    } else if (paymentMethod === "crypto" && enable) {
      return setOpenDialogue(true);
    }
    // else {
    //   return;
    // }
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div
          className="md:block hidden col-span-1 bg-center tablet:bg-cover bg-no-repeat tablet:h-screen"
          style={{ backgroundImage: `url(${DrownImg.src})` }}
        >
          {/* <div>
          <Image src={DrownImg} alt="img" />
        </div> */}
        </div>
        <div className="col-span-1 tablet:pb-6 sm:pb-20 pb-6">
          <div className="tablet:px-[70px] sm:px-8 px-4 pt-10">
            <div className="flex justify-between items-center">
              <div>
                <p className="md:text-xl text-lg text-gray-500">Checkout</p>
              </div>
              <Link href="/">
                <div className="flex items-center">
                  <div className="mr-2">
                    <TopLeftArrow color="#FF4650" />
                  </div>
                  <div>
                    <p className="text-gray-400 sm:text-xs text-xxs">
                      Back to homepage
                    </p>
                  </div>
                </div>
              </Link>

            </div>
            <div className="py-6 w-full">
              <div className="border-b border-dashed"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Product</p>
            </div>
            <div className="py-6 flex justify-between">
              <div className="flex items-center">
                <div
                  className="rounded-full w-7 h-7 mr-2 bg-center bg-contain"
                  style={{ backgroundImage: `url(${OrderProduct.src})` }}
                ></div>
                <div>
                  <p className="text-gray-300">Pre-order “AIRHIVE ONE” </p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 font-bold text-end">
                  {paymentMethod === "crypto" ? "100 USDT" : "$100"}
                </p>
              </div>
            </div>
            <div className="pb-6 w-full">
              <div className="border-b border-dashed"></div>
            </div>

            <div className="pb-6">
              <p className="text-sm font-bold text-gray-500">Payment method</p>
            </div>
            <div className="pb-6">
              <div className="grid tablet:grid-cols-2 grid-cols-1 gap-3">
                <label htmlFor="card" className="cursor-pointer">
                  <div
                    className={`border ${paymentMethod === "card"
                      ? "border-primary-500"
                      : "border-[#E0E0E0]"
                      } rounded-lg py-3 px-3 flex justify-between items-center col-span-1`}
                  >
                    <div className="flex items-center">
                      <div className="mr-2">
                        <CreditCardIcon />
                      </div>
                      <div>
                        <p className="text-gray-500 font-bold">Pay with Card</p>
                      </div>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="card"
                        value="card"
                        onChange={handleRadio}
                        // onClick={handleRadio}
                        checked={paymentMethod === "card"}
                        className="paymentRadio mt-1.5"
                      />
                    </div>
                  </div>
                </label>
                <label htmlFor="crypto" className="cursor-pointer">
                  <div
                    className={`border ${paymentMethod === "crypto"
                      ? "border-primary-500"
                      : "border-[#E0E0E0]"
                      } rounded-lg py-3 px-3 flex justify-between items-center col-span-1`}
                  >
                    <div className="flex">
                      <div className="mr-2">
                        <WalletIcon />
                      </div>
                      <div>
                        <p className="text-gray-500 font-bold">
                          Pay with Crypto
                        </p>
                      </div>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="crypto"
                        value="crypto"
                        onChange={handleRadio}
                        // onClick={handleRadio}
                        checked={paymentMethod === "crypto"}
                        className="paymentRadio mt-1.5"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="pb-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-gray-500">
                  Total checkout
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-500 text-end">
                  {paymentMethod === "crypto" ? "100 USDT" : "$100"}
                </p>
              </div>
            </div>
            <div className="w-full">
              {/* {enable ? (
                <Button
                  variant="primary"
                  disabled={false}
                  className={`my-4 min-w-full `}
                  onClick={payment}
                >
                  Checkout yes
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  disabled={true}
                  className={`my-4 min-w-full `}
                >
                  Checkout no
                </Button>
              )} */}
              <Button
                variant={enable ? "primary" : "secondary"}
                disabled={!enable}
                className={`my-4 min-w-full `}
                onClick={payment}
              >
                Checkout
              </Button>
            </div>
            <div className="flex">
              <div>
                <label htmlFor="checkoutCheckbox" className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkoutCheckbox"
                    className="mr-1.5"
                    value="termsAndConditon"
                    onChange={() => setIsChecked(!isChecked)}
                    // onChange={handleCheckboxChange} // Call handleCheckboxChange when checkbox state changes
                    checked={isChecked}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-300">
                By clicking Checkout, you agree to our{" "}
                <span className="text-primary-500 font-bold">
                  Terms of Service
                </span>{" "}
                and that you have read our{" "}
                <span className="text-primary-500 font-bold">
                  <a href="https://www.freeprivacypolicy.com/live/7ba9c2c8-78ff-45bc-8efd-f3b40f8b0a04">
                    Privacy Policy
                  </a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <CryptoDialogue
        openDialogue={openDialogue}
        handleClose={() => setOpenDialogue(false)}
      />
    </div>
  );
};
export default Checkout;
