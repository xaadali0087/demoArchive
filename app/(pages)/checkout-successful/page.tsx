import AppNav from "@/app/components/AppNav/AppNav";
import Successful from "@/app/components/Successful/Successful";
import { FC } from "react";

interface PageProps{}
const Page:FC<PageProps>=({})=>{
    return(
        <>
        <AppNav />
        <Successful />
        </>
    );
}
export default Page;