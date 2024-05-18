import AppNav from "@/app/components/AppNav/AppNav";
import ThankYou from "@/app/components/ThankYou/ThankYou";
import { FC } from "react";

interface PageProps{}
const Page:FC<PageProps>=({})=>{
    return(
        <>
        <AppNav />
        <ThankYou />
        </>
    );
}
export default Page;