import AppNav from "@/app/components/AppNav/AppNav";
import CustomError from "@/app/components/CustomError/CustomError";
import Web3ModalProvider from "@/app/components/Wallets/WalletConnect/Web3ModalProvider";
// import WalletConnectScreen from "@/app/components/Wallets/WalletConnect/components/WalletConnectScreen";
import { FC } from "react";

interface PageProps{}
const Page:FC<PageProps>=({})=>{
    return(
        <Web3ModalProvider>
        <AppNav />
        {/* <WalletConnectScreen /> */}
        {/* <CustomError /> */}
        </Web3ModalProvider>
    );
}
export default Page;