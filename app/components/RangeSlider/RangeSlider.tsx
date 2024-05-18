import React, { ChangeEvent, FC, SetStateAction, useState } from "react";
import "./index.css";
import { Dispatch } from "@reduxjs/toolkit";

type RangeSliderProps = {
  title?: string;
  min: string;
  max?: string;
  symbol?: string;
  step?: string;
  className?: string;
  onChange?: (val: string) => void;
  setDroneInvestment?:any;
};

const RangeSlider: FC<RangeSliderProps> = ({
  title,
  min,
  max,
  symbol,
  step,
  className,
  onChange,
  setDroneInvestment,
}) => {
  const [value, setValue] = useState<string>(min);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setDroneInvestment(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  let formula =
    ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;

  return (
    <div className={className}>
      <div className="mb-8">{title}</div>
      <div className="sm:flex grid grid-cols-2 sm:gap-4 gap-1 items-center mt-1">
        <div className="sm:order-1 order-2 col-span-1">
          {symbol}
          {min}
        </div>
        <div className="range-container sm:grow-0 grow sm:order-2 order-1 col-span-2">
          <span
            className="range-title"
            style={{ left: `${Math.floor(formula)<= 6 ? "6" : Math.floor(formula) >= 94 ? "94" : Math.floor(formula)}%` }}
          >
            {symbol}
            {value}
          </span>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className="transparent-range-slider"
            onChange={handleChange}
            
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className="range-input"
            onChange={handleChange}
          />
        </div>
        <div className="order-3 col-span-1 text-end">
          {symbol}
          {max}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
