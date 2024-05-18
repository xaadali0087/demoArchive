import AppNav from "@/app/components/AppNav/AppNav";
import { FC } from "react";
import PreOrderDisplay from "./PreOrderDisplay";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  return (
    <>
      <AppNav />
      <PreOrderDisplay />
    </>
  );
};
export default Page;
