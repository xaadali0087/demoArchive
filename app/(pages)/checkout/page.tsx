// import { FC } from "react";
// import Checkout from "./Checkout";
// import AppNav from "@/app/components/AppNav/AppNav";
// import { headers } from "next/headers";
// import { cookieToInitialState } from "wagmi";
// import { config } from "@/config";
// import Web3ModalProvider from "@/app/components/Wallets/WalletConnect/Web3ModalProvider";

// interface PageProps {}
// const Page: FC<PageProps> = ({}) => {
//   const initialState = cookieToInitialState(config, headers().get("cookie"));
// // const initialState = cookieToInitialState(config);

//   return (
//     <Web3ModalProvider initialState={initialState}>
//       <AppNav />
//       <Checkout />
//     </Web3ModalProvider>
//   );
// };

// export default Page;
"use client";
import { FC, useEffect, useState } from "react";
import Checkout from "./Checkout";
import AppNav from "@/app/components/AppNav/AppNav";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/app/components/Wallets/WalletConnect/Web3ModalProvider";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const [initialState, setInitialState] = useState<any>(null);

  useEffect(() => {
    // This code will only execute on the client side
    const initialStateFromCookie = cookieToInitialState(
      config,
      document.cookie
    );
    setInitialState(initialStateFromCookie);
  }, []);

  return (
    <Web3ModalProvider>
      <AppNav />
      <Checkout />
    </Web3ModalProvider>
  );
};

export default Page;
