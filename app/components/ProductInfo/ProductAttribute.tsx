import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ProductAttributeProps = {
  title?: string;
  values?: string[];
  noBottomBorder?: boolean;
};

const ProductAttribute: FC<ProductAttributeProps> = ({
  title,
  values,
  noBottomBorder,
}) => {
  return (
    <div
      className={twMerge(
        "flex border-b border-solid border-[#E0E0E0] py-4",
        noBottomBorder && "border-b-0"
      )}
    >
      <div className="w-1/2 font-bold text-gray-400 text-xs">{title}</div>
      <div className="w-1/2">
        {values?.map((value) => (
          <div className="text-gray-400 text-xs mb-3" key={value}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAttribute;
