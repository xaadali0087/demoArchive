"use client";

import React, { FC, useEffect, useState } from "react";
import {
  createWeb3Modal,
  useWeb3Modal,
  useWeb3ModalEvents,
} from "@web3modal/wagmi/react";
import { useAccount, useDisconnect, useGasPrice } from "wagmi";
import Web3 from "web3";
import { contractABI } from "./contractABI";

interface useWalletConnectTransactionProps {}

const useWalletConnectTransaction = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any | null>(null);
  const contractAddress = "0x80f8Ece3d9855D2d52a8D6DaB05692924eB698e2";
  const walletDisconnect = () => {
    disconnect();
  };

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      const contractInstance = new web3Instance.eth.Contract(
        contractABI,
        contractAddress
      );
      setContract(contractInstance);
    } else {
      console.error("Please install Web3 Extention!");
    }
  }, []);

  const requestAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.error("User denied account access", error);
      }
    }
  };

  const transactionProceed = async () => {
    
    if (web3 && contract && address) {
      try {
        // Ensure user grants access to their wallet
        await requestAccount();

        const tx = await contract.methods
          .transfer("0xaAbd515294C4A3A2a651CbA8f6cC1350c8FC4548", web3.utils.toWei("0.0001", "ether"))
          .send({ from: address });
        console.log("Transaction successful", tx);
      } catch (error) {
        console.error("Transaction failed", error);
      }
    }
  };
  return {walletDisconnect, transactionProceed}
}
export default useWalletConnectTransaction;