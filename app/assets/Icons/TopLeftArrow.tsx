import React, { FC } from "react";

interface TopLeftArrowProps{
  color: string;
}
const TopLeftArrow : FC<TopLeftArrowProps>=({color}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_107_2613)">
        <path
          d="M19.045 4.51081L19.0448 4.36092L18.895 4.36092L6.01113 4.36081L5.949 4.36081L5.90507 4.40474L5.15518 5.15463L5.1113 5.19851L5.11125 5.26057L5.10006 18.7505L5.09994 18.9006L5.25006 18.9006L6.76208 18.9006L6.91208 18.9006L6.91208 18.7506L6.91208 7.43337L17.7282 18.2495L17.8343 18.3556L17.9404 18.2495L19.001 17.1889L19.1071 17.0828L19.001 16.9767L8.18388 6.15958L18.896 6.16145L19.0461 6.16148L19.046 6.01134L19.045 4.51081Z"
          fill={color}
          stroke={color}
          strokeWidth="0.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_2613">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 24) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TopLeftArrow;
