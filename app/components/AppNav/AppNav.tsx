"use client";
import Logo from "@/app/assets/Icons/Logo";
import { FC, useState } from "react";
import { hideLinks } from "../HideLinks/HideLinks";
import { usePathname } from "next/navigation";
import MenuLogo from "@/app/assets/Icons/MenuLogo";
import Link from "next/link";
import "./index.css";

interface AppNavProps {}

const AppNav: FC<AppNavProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const currentPage = usePathname();
  const hideNavLinks = hideLinks.includes(currentPage);
  if (hideNavLinks) {
    return (
      <div className="bg-gray-100 border-b border-b-[#E0E0E0]">
        <div className="navContainer flex justify-between items-center py-5">
          <Link href="/" className="sm:hidden block">
            <div>
              <Logo width={153} />
            </div>
          </Link>
          <Link href="/" className="sm:block hidden">
            <div>
              <Logo width={185} />
            </div>
          </Link>
          <div>
            <a href="https://www.airhive.io/contact-us/">
              <p className="text-gray-500 sm:text-xs text-xxs">
                Need any help?{" "}
                <span className="text-primary-500 font-bold sm:text-xs text-xxs">
                  Contact us
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-100 border-b border-b-[#E0E0E0]">
        <div className="container flex justify-between items-center py-5">
          <Link href="/" className="sm:hidden block">
            <div>
              <Logo width={153} />
            </div>
          </Link>
          <Link href="/" className="sm:block hidden">
            <div>
              <Logo width={185} />
            </div>
          </Link>
          <div className="sm:block hidden grow">
            <div className="flex justify-center">
              <div className="w-[330px] flex justify-between text-gray-500">
                <p>
                  <a href="https://www.airhive.io/product/">Airhive one</a>
                </p>
                <p>
                  <a href="https://www.airhive.io/use-cases/">Use Cases</a>
                </p>
                <p>
                  <a href="https://www.airhive.io/company/">Company</a>
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden block">
            <div onClick={() => setOpen(!open)}>
              <MenuLogo />
            </div>
          </div>
        </div>
        {open && (
          <div className="mx-4 text-gray-500 text-center text-[24px] pt-5 pb-8">
            <p className="">
              <a href="https://www.airhive.io/product/">Airhive one</a>
            </p>
            <p className="my-3">
              <a href="https://www.airhive.io/use-cases/">Use Cases</a>
            </p>
            <p className="">
              <a href="https://www.airhive.io/company/">Company</a>
            </p>
          </div>
        )}
      </div>
    );
  }
};
export default AppNav;
