"use client";

import DownCarret from "@/app/assets/Icons/DownCarret";
import { FC, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Button/Button";
import ProgressBar from "../../ProgressBar/ProgressBar";
import RangeSlider from "../../RangeSlider/RangeSlider";
import Tick from "@/app/assets/Images/check.png";
import IncrementRounded from "@/app/assets/Icons/IncrementRounded";
import DecrementRounded from "@/app/assets/Icons/DecrementRounded";
import { useRouter } from "next/navigation";
import { usePreOrderMutation } from "../../ReduxToolKit/droneAPI";

const isNotEmpty = (value: string) => {
  return !value.trim() ? "This field is required" : true;
};
type Inputs = {
  fullName: string;
  country: string;
  network: string;
  useCases: string;
  numberOfLocations: string;
  city: string;
  state: string;
  numberOfDrones: string;
  email: string;
  investmentAmount: string;
  // privacy: boolean;
};
interface PreOrderProps {}
const PreOrder: FC<PreOrderProps> = ({}) => {
  // const [isUsa, setIsUSa] = useState(false);
  const [droneQuantity, setDroneQuantity] = useState<number>(1);
  const [droneinvestment, setDroneInvestment] = useState<number>(1000);
  const [isChecked, setIsChecked] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    setError,
    formState: { isValid },
  } = useForm<Inputs>();
  const [open, setOpen] = useState<boolean>(false);
  const [useCaseValue, setUseCaseValue] = useState<string>("");
  const [enable, setEnable] = useState(false);
  const [ownValue, setOwnValue] = useState<number>(2);
  const [apiPayLoad, setApiPayLoad] = useState<Inputs>();
  const [createPreOrder] = usePreOrderMutation();
  const router = useRouter();

  const useCaseOptions = [
    "Agriculture",
    "Сonstruction",
    "Defense",
    "Entertainment",
    "Healthcare",
    "Infastructure",
    "Retail",
    "Tourism",
  ];
  useEffect(() => {
    if (isChecked && isValid) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [isChecked, isValid]);

  const country = watch("country");
  const network = watch("network");

  const checkQuantity = () => {
    if (droneQuantity === 1) {
      return;
    } else {
      return setDroneQuantity(droneQuantity - 1);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.numberOfDrones = droneQuantity.toString();
    data.investmentAmount = droneinvestment.toString();
    if (data.email) {
      setApiPayLoad(data);
      try {
        await createPreOrder(data).unwrap();
      } catch (error) {}
      return router.push("/thank-you");
    } else {
      // setApiPayLoad(data);
      // setApiPayLoad(data);
      // try {
      //   await createPreOrder(data).unwrap();
      // } catch (error) {}
      return router.push("/checkout");
    }
  };
  useEffect(() => {
    localStorage.setItem("apiPayload", JSON.stringify(apiPayLoad));
  }, [apiPayLoad]);

  return (
    <div className={`${open && "mb-32"}`}>
      <form
        onSubmit={handleSubmit(onSubmit as any)}
        // className="text-xs text-gray-500"
        className="text-gray-500"
      >
        <div className="mb-5">
          <p>
            Full Name <span className="text-primary-500">*</span>
          </p>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            rules={{ required: "full name is required", validate: isNotEmpty }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Enter your full name"
                className="w-full focus:outline-none here rounded-full px-5 py-3 border border-gray-200 mt-2"
                type="text"
              />
            )}
          />
        </div>
        <div className="mb-5 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <p>
              Country <span className="text-primary-500">*</span>
            </p>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: "country is required", validate: isNotEmpty }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your country"
                  className="w-full focus:outline-none here rounded-full px-5 py-3 border border-gray-200 mt-2"
                  type="text"
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <p>
              City <span className="text-primary-500">*</span>
            </p>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{ required: "city is required", validate: isNotEmpty }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your city"
                  className="w-full focus:outline-none here rounded-full px-5 py-3 border border-gray-200 mt-2"
                  type="text"
                />
              )}
            />
          </div>
        </div>
        {country?.toLowerCase() === "usa" && (
          <div className="mb-5">
            <p>
              State <span className="text-primary-500">*</span>
            </p>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              rules={{ required: "state is required", validate: isNotEmpty }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your state"
                  className="w-full focus:outline-none here rounded-full px-5 py-3 border border-gray-200 mt-2"
                  type="text"
                />
              )}
            />
          </div>
        )}
        <div className="mb-5">
          <p className="mb-2">
            Network <span className="text-primary-500">*</span>
          </p>
          <div className="flex">
            <label htmlFor="public" className="cursor-pointer">
              <div className="flex items-center mr-5">
                <Controller
                  name="network"
                  control={control}
                  defaultValue=""
                  rules={{ required: "network is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="mr-0.5 "
                      type="radio"
                      value="public"
                      id="public"
                    />
                  )}
                />
                <p>Public Network</p>
              </div>
            </label>
            <label htmlFor="private" className="cursor-pointer">
              <div className="flex items-center">
                <Controller
                  name="network"
                  control={control}
                  defaultValue=""
                  rules={{ required: "network is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="mr-0.5 "
                      type="radio"
                      value="private"
                      id="private"
                    />
                  )}
                />
                <p>Private Network</p>
              </div>
            </label>
          </div>
        </div>
        {network?.toLowerCase() === "private" && (
          <div className="mb-5">
            <p>
              Your Email <span className="text-primary-500">*</span>
            </p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "email is required", validate: isNotEmpty }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your email"
                  className="w-full focus:outline-none here rounded-full px-5 py-3 border border-gray-200 mt-2"
                  type="text"
                />
              )}
            />
          </div>
        )}
        <div className="mb-5">
          <p className="mb-2">
            How much do you want to invest? &#40;once public sale opens&#41;
          </p>
          <div className="sm:px-0 px-2">
            <RangeSlider
              min="1000"
              max="50000"
              step="1000"
              symbol="$"
              className="mt-8"
              setDroneInvestment={setDroneInvestment}
              onChange={(val) => {
                const value = (Number(val) * 100) / 50000;
                setOwnValue(value);
              }}
            />
          </div>
        </div>
        <div className="mb-5">
          <p className="mb-2">Airhive One Node Percentage</p>
          <div className="sm:px-0 px-2">
            <ProgressBar completed={ownValue} />
          </div>
        </div>
        <div className="mb-5">
          <p>
            Number of drones <span className="text-primary-500">*</span>
          </p>
          <div className="flex mt-2 items-center max-w-[85px]">
            <div className="" onClick={() => checkQuantity()}>
              <DecrementRounded />
            </div>
            <Controller
              name="numberOfDrones"
              control={control}
              defaultValue=""
              // rules={{ required: "full name is required", validate: isNotEmpty }}
              render={({ field }) => (
                <input
                  {...field}
                  // placeholder="Enter your full name"
                  className=" focus:outline-none text-center max-w-[40px]"
                  type="text"
                  value={droneQuantity}
                />
              )}
            />
            {/* <input type="text"  className="focus:outline-none text-center max-w-[40px]" value={droneQuantity}/> */}
            <div
              className=""
              onClick={() => {
                setDroneQuantity(droneQuantity + 1);
              }}
            >
              <IncrementRounded />
            </div>
          </div>
        </div>
        <div className="mb-5 relative">
          <p>
            Use cases <span className="text-primary-500">*</span>
          </p>
          <div
            className="w-full rounded-full px-5 py-3 border border-gray-200 mt-2 flex justify-between items-center"
            onClick={() => setOpen(!open)}
          >
            <Controller
              name="useCases"
              control={control}
              defaultValue=""
              rules={{ required: "select is required", validate: isNotEmpty }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Select one"
                  className="w-full focus:outline-none grow cursor-pointer"
                  type="text"
                  value={useCaseValue}
                />
              )}
            />
            <DownCarret />
          </div>
          <div
            className={`absolute w-full bg-white rounded-3xl border border-gray-200 overflow-hidden py-2 mt-2 ${
              open ? "block z-20 " : "hidden"
            }`}
          >
            {useCaseOptions.map((item, index) => (
              <p
                key={index}
                className="px-5 py-2 hover:bg-gray-200"
                onClick={() => {
                  setUseCaseValue(`${item}`);
                  setValue("useCases", item);
                  setOpen(!open);
                }}
                // onClick={() => handleUseCaseSelect(item)}
                // onMouseLeave={() => setOpen(!open)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <p>
            Number of locations <span className="text-primary-500">*</span>
          </p>
          <Controller
            name="numberOfLocations"
            control={control}
            defaultValue=""
            rules={{
              required: "locations is required",
              validate: {
                isNotEmpty,
                isNumeric: (value) =>
                  /^[0-9]*$/.test(value) ? true : "Please enter a valid number",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Enter your number of locations"
                className="w-full focus:outline-none here rounded-full px-5 py-3 border border-gray-200 mt-2"
                type="text"
              />
            )}
          />
        </div>
        <div className="mb-5 w-full">
          <Button
            variant={enable ? "primary" : "secondary"}
            disabled={!enable}
            className="min-w-full py-3"
            type="submit"
          >
            Submit
          </Button>
        </div>
        <div className="flex">
          {/* <Controller
  name="privacy"
  control={control}
  defaultValue={false}
  rules={{ required: "terms and conditions are required" }}
  render={({ field }) => (
    <input
      {...field}
      className="mr-1.5"
      type="checkbox"
      onChange={(e) => field.onChange(e.target.checked)}
      checked={field.value}
    />
  )}
/> */}
          <label htmlFor="myCheckbox" className="custom-checkbox"></label>
          <input
            type="checkbox"
            id="myCheckbox"
            className="mr-1.5"
            value="termsAndConditon"
            onChange={() => setIsChecked(!isChecked)}
          />

          {/* <input
            type="checkbox"
            className="mr-1.5"
            value="termsAndConditon"
            id=""
            onChange={() => setIsChecked(!isChecked)}
          /> */}
          <p className="text-gray-300 text-xxs">
            I agree to our{" "}
            <span className="text-primary-500 font-bold">Terms of Service</span>{" "}
            and that you have read our{" "}
            <span className="text-primary-500 font-bold">
              <a href="https://www.freeprivacypolicy.com/live/7ba9c2c8-78ff-45bc-8efd-f3b40f8b0a04">
                Privacy Policy
              </a>
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
};
export default PreOrder;
