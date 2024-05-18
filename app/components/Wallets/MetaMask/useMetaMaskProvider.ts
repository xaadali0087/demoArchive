"use client";

import { FC, ReactNode, useState } from "react";
import Web3 from "web3";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../ReduxToolKit/hook";
import { setCustomerAddress } from "../../ReduxToolKit/web3Slice";
import { useMetaMaskDataMutation } from "../../ReduxToolKit/droneAPI";
import { useAccount, } from 'wagmi'
import { toast } from "react-toastify";
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

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
  const { address } = useAccount();
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
        sendTransaction()
        //  await sendTransaction({
        //   to: '0x80f8Ece3d9855D2d52a8D6DaB05692924eB698e2',
        //   value: parseEther('0.000000001')
        // })
      }
        
      
      
    
    } catch (error:any) {
      toast.error(error?.message);
      console.log("🚀 ~ handleTransactionWithWagmi ~ error:", error)
      
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

  const sendTransaction = async () => { 
if(window?.ethereum !== undefined){
     const web3 = new Web3(window.ethereum);

    try {
      const fromAddress = (await web3.eth.getAccounts())[0];
       const balance = await web3.eth.getBalance(fromAddress);
       const value = web3.utils.toWei("0.00001", "ether");

       if (Number(balance) < Number(value)) {
          // alert("Insufficient balance");
          toast.info("Insufficient balance")
          return;
        }

      const tx = {
        from: fromAddress,
        to: "0x80f8Ece3d9855D2d52a8D6DaB05692924eB698e2",
        gas: 21000,
        gasPrice: await web3.eth.getGasPrice(),
        value: value,
        chainId: 137,
      };
      await web3.eth
        .sendTransaction(tx)
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          setTransactionLoader(true);
        })
        .on("receipt", async (receipt) => {
          let CGU = receipt.cumulativeGasUsed.toString();
          let EGP = receipt.effectiveGasPrice?.toString();
          let GU = receipt.gasUsed.toString();
          const sendData: MetaMaskData = {
            blockHash: receipt.blockHash || "",
            cumulativeGasUsed: CGU || "",
            effectiveGasPrice: EGP || "",
            from: receipt.from || "",
            gasUsed: GU || "",
            to: receipt.to || "",
            transactionHash: receipt.transactionHash || "",
          };
          setData(sendData);
          try {
            await createMetamaskData(sendData);
            console.log("Data sent to API:", sendData);
          } catch (error:any) {
        toast.error(error?.message);
      
            console.error("Error sending data to API:", error);
          }
          setTransactionLoader(false);
          dispatch(setCustomerAddress(fromAddress));
          router.push("/checkout-successful/");
          console.log("Transaction Receipt:", receipt);

          // send this data to backend api.
        });
    } catch (error:any) {
      toast.error(error?.message);
      console.error("Transaction Errors: ", error?.message);
    }
  }
  };

  return { transactionLoader, sendTransaction, showError,handleTransactionWithWagmi };
};

export default useMetaMaskProvider;
