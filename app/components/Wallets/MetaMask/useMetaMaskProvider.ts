"use client";

import { FC, ReactNode, useState } from "react";
import Web3 from "web3";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../ReduxToolKit/hook";
import { setCustomerAddress } from "../../ReduxToolKit/web3Slice";
import { useMetaMaskDataMutation } from "../../ReduxToolKit/droneAPI";
import { useAccount, useConnect} from 'wagmi'
import { toast } from "react-toastify";
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import { ethers } from "ethers";
import WagmiHookForTesting from "./useWagmiHook";
import TransactionWithWagmi from "./useWagmiHook";

// declare global {
//   interface Window {
//     ethereum?: MetaMaskInpageProvider;
//   }
// }
type Provider = {
  isMetaMask?: boolean;
  request: (...args: any[]) => Promise<any>;
};
type MetaMaskData = {
  blockHash: string;
  cumulativeGasUsed: string;
  effectiveGasPrice: string;
  from: string;
  gasUsed: string;
  to: string;
  transactionHash: string;
};

interface MetaMaskProviderProps {
  children: ReactNode;
}

const useMetaMaskProvider = () => {
  const{ handleTransaction } = TransactionWithWagmi()
  const { address } = useAccount();
   const { connectors, connect } = useConnect()
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [createMetamaskData] = useMetaMaskDataMutation();
  const [data, setData] = useState<MetaMaskData>();
  const [showError, setShowError] = useState<any>();
  const [transactionLoader, setTransactionLoader] = useState<boolean>(false);
  // const [customerAddress, setCustomerAddress] = useState("");

  // const switchToPolygonNetwork = async () => {
  //   //@ts-ignore
  //   await window.ethereum.request({
  //     method: "wallet_switchEthereumChain",
  //     params: [{ chainId: Web3.utils.toHex(137) }],
  //   });

  //   await sendTransaction();
  // };

   

  const handleTransactionWithWagmi = async () => {
    
    try {
      if(!address){
        toast.info("Please connect metamask first")
        return;
      } else {
        // await sendTransaction()
    const response = await handleTransaction()
    if(response){
      setTimeout(()=>{

        toast.success("transaction successfully completed")
        router.push("/checkout-successful/");  
      },15000)
    }
        // sendTransaction()
        //  await sendTransaction({
        //   to: '0x80f8Ece3d9855D2d52a8D6DaB05692924eB698e2',
        //   value: parseEther('0.000000001')
        // })
      }
        
      
      
    
    } catch (error:any) {
      toast.error(error?.message);
      // console.log("🚀 ~ handleTransactionWithWagmi ~ error:", error)
      
    }
  }

  // const connectWallet = async () => {
  //   // debugger;
  //   // if (window.ethereum && window.ethereum.isMetaMask) {
  //   console.log("metamask", window.ethereum);
  //   if (window?.ethereum.isMetaMask) {
  //     const web3 = new Web3(window.ethereum);

  //     try {
  //       await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });

  //       const networkId = await web3.eth.net.getId();
  //       const fromAddress = (await web3.eth.getAccounts())[0];
  //       const value = web3.utils.toWei("0.00001", "ether");
  //       const balance = await web3.eth.getBalance(fromAddress);

  //       if (Number(balance) < Number(value)) {
  //         alert("Insufficient balance");
  //         return null;
  //       }

  //       return web3;
  //     } catch (error) {
  //       console.error("Error connecting to MetaMask:", error);
  //       router.push("/checkout-failed/");
  //       return null;
  //     }
  //   } else {
  //     alert("MetaMask is not installed!");
  //     window.open(
  //       "https://metamask.io/download/",
  //       "_blank",
  //       "noopener,noreferrer"
  //     );
  //   }
  // };

//   const handleSubmitResponse = async (hash:any) => { 
   
//     console.log("hashhhhhhhhhhhhhhhhh",hash)
//     return;
// if(window?.ethereum !== undefined){
//     try {
//       const web3 = new Web3(window.ethereum);
//       const fromAddress = address;
//       //@ts-ignore
//       const balance = await web3.eth.getBalance(fromAddress);
//       const covertValue = 0.000001
//       const value = web3.utils.toWei(covertValue?.toString(), "ether");

//        if (Number(balance) < Number(value)) {
//           toast.info("Insufficient balance")
//           return;
//         }
//           setTransactionLoader(true);
//           let CGU = receipt.cumulativeGasUsed.toString();
//           let EGP = receipt.effectiveGasPrice?.toString();
//           let GU = receipt.gasUsed.toString();
        
//           const sendData: MetaMaskData = {
//             blockHash: receipt.blockHash || "",
//             cumulativeGasUsed: CGU || "",
//             effectiveGasPrice: EGP || "",
//             from: receipt.from || "",
//             gasUsed: GU || "",
//             to: receipt.to || "",
//             transactionHash: receipt.transactionHash || "",
//           };
//           setData(sendData);
//           await createMetamaskData(sendData);
//           setTransactionLoader(false);
//           dispatch(setCustomerAddress(`0x${fromAddress}`));
//           router.push("/checkout-successful/");        
//     } catch (error:any) {
//       const findError = error?.response?.data?.message ? error?.response?.data?.message : error?.message; 
//       toast.error(findError);
//       console.log("Transaction Errors and api error:", error);
//     }
//   }
//   };

  return { showError, handleTransactionWithWagmi };
};

export default useMetaMaskProvider;
