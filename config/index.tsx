import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
// import { mainnet, polygon, sepolia } from "wagmi/chains";
import { polygon } from "wagmi/chains";

//projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  // name: "Web3Modal",
  name: "Berachain Web3Modal",
  description: "Web3Modal Example",
  url: "https://air-hive.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
// const chains = [mainnet ,polygon] as const
// export const config = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage
//   }),
// //   ...wagmiOptions // Optional - Override createConfig parameters
// })

export const config = defaultWagmiConfig({
  chains: [polygon], // required,
  transports: {
    [polygon.id]: http()
  },
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default,
  //   ...wagmiOptions // Optional - Override createConfig parameters
})