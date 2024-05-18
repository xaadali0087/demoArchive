import AppNav from "@/app/components/AppNav/AppNav";
import Failed from "@/app/components/Failed/Failed";
import { FC } from "react";

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  return (
    <>
      <AppNav />
      <Failed />
    </>
  );
};
export default Page;
