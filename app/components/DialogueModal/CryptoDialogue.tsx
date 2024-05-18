"use client";

import React, { FC, SetStateAction, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import CancleIcon from "@/app/assets/Icons/CancleIcon";
import Image from "next/image";
import MetaMaskIcon from "@/app/assets/Images/metamaskIcon.png";
import WalletConnectIcon from "@/app/assets/Images/walletconnectIcon.png";
import CoinBaseIcon from "@/app/assets/Images/coinbase.png";
import useMetaMaskProvider from "../Wallets/MetaMask/useMetaMaskProvider";
import { useWeb3Modal } from "@web3modal/wagmi/react";
// import useCoinBase from "../Wallets/CoinBase/useCoinBase";
import ReactLoading from "react-loading";
import { useAccount, useDisconnect, useConnect } from "wagmi";
import ProcessDialogue from "./ProcessDialogue";
import useWalletConnectTransaction from "../Wallets/WalletConnect/components/useWalletConnectTransaction";
type CryptoDialogueProps = {
  openDialogue: boolean;
  handleClose: () => void;
};

const CryptoDialogue: FC<CryptoDialogueProps> = ({
  openDialogue,
  handleClose
}) => {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect()
  const { walletDisconnect, transactionProceed } = useWalletConnectTransaction();
  const { transactionLoader, sendTransaction, handleTransactionWithWagmi } = useMetaMaskProvider();
  const { open } = useWeb3Modal();
  const [cryptoPayment, setcryptoPayment] = useState<string>();
  const [openProcessTransaction, setOpenProcessTransaction] = useState<boolean>(false);
  const [transactionCheck, setTransactionCheck] = useState(false)
  console.log("🚀 ~ transactionCheck:", transactionCheck)

  const handleCryptoRadio = async () => {
    if (isConnected && address) {
      handleClose();
      await open();
      return;
    } else {
      await open();
      handleClose();
      setTimeout(() => {
        setTransactionCheck(true)
      }, 15000);
      return;
    }
  };

  const connectMetaMaskWithWagmi = async () => {
    // debugger;
    try {
      console.log("hit---my function")
      if (isConnected && address) {
        handleClose();
        await open();
        return;
      } else {
        const connector = connectors?.find((item) => item?.name === "MetaMask")
        //@ts-ignore
        await connect({ connector })
        setTimeout(() => {
          setTransactionCheck(true)
        }, 15000);
        return;
      }
    } catch (error) {
      console.log("🚀 ~ connectMetaMaskWithWagmi ~ error:", error)

    }
  }

  useEffect(() => {
    transactionCheck && handleTransactionWithWagmi()
  }, [transactionCheck])


  useEffect(() => {
    if (transactionLoader) {
      setOpenProcessTransaction(true);
    }
  }, [transactionLoader]);

  return (
    <div>
      <Modal
        showCloseIcon={false}
        open={openDialogue}
        onClose={handleClose}
        // onOverlayClick={handleOpen}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        center
        classNames={{
          modalContainer: "bg-[#00000061]",
        }}
        styles={{
          modal: {
            backgroundColor: "#FFFFFF",
            // minWidth: "474px",
            textAlign: "center",
            padding: "30px 30px 22px 30px",
            borderRadius: "24px",
          },
        }}
      >
        <div className="mx-auto md:w-[440px] w-[270px]">
          <div className="flex justify-between sm:text-xl text-lg text-gray-500 items-center">
            <p>Connect wallet</p>
            <div className="cursor-pointer" onClick={handleClose}>
              <CancleIcon />
            </div>
          </div>
          <div className="mt-7">
            <label htmlFor="metamask" className="cursor-pointer">
              <div
                className={`border ${cryptoPayment === "metamask"
                  ? "border-primary-500"
                  : "border-[#E0E0E0]"
                  } rounded-lg py-3 px-3 flex justify-between items-center col-span-1 mb-4`}
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <Image src={MetaMaskIcon} className="max-w-8" alt="icon" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold">MetaMask</p>
                  </div>
                </div>
                <div>
                  {/* {metamaskLoading ? (
                      <ReactLoading
                        type="spin"
                        color="#FF416C"
                        className={"h-5 w-5"}
                        height="30"
                        width="30"
                      />
                    ) : ( */}
                  <input
                    type="radio"
                    name="cryptoPayment"
                    id="metamask"
                    value="metamask"
                    onClick={() => {
                      setcryptoPayment("metamask");
                      connectMetaMaskWithWagmi();
                    }}
                    className="paymentRadio mt-1.5"
                  />
                  {/* )} */}
                </div>
              </div>
            </label>

            <label htmlFor="walletconnect" className="cursor-pointer">
              <div
                className={`border ${cryptoPayment === "walletconnect"
                  ? "border-primary-500"
                  : "border-[#E0E0E0]"
                  } rounded-lg py-3 px-3 flex justify-between items-center col-span-1 mb-4`}
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <Image src={WalletConnectIcon} className="max-w-7" alt="" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold">WalletConnect</p>
                  </div>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cryptoPayment"
                    id="walletconnect"
                    value="walletconnect"
                    onClick={() => {
                      // setcryptoPayment("walletconnect");
                      handleCryptoRadio();
                    }}
                    className="paymentRadio mt-1.5"
                  />
                </div>
              </div>
              {/* {address && (
                <div className="flex gap-4">
                  <button
                    className="py-2 px-3 bg-primary-500 rounded-xl font-semibold text-white text-xs"
                    onClick={disconnectWallet}
                  >
                    Disconnect
                  </button>
                  <button
                    className="py-3 px-5 bg-primary-500 rounded-xl font-semibold text-white text-xs"
                    onClick={doTransaction}
                  >
                    Transaction
                  </button>
                </div>
              )} */}
            </label>
            {/* <label htmlFor="coinbase" id="coinbase" className="cursor-pointer">
              <div
                className={`border ${
                  cryptoPayment === "coinbase"
                    ? "border-primary-500"
                    : "border-[#E0E0E0]"
                } rounded-lg py-3 px-3 flex justify-between items-center col-span-1`}
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <Image src={CoinBaseIcon} alt="" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold">Coinbase Wallet</p>
                  </div>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cryptoPayment"
                    id="coinbase"
                    value="coinbase"
                    onChange={() => {
                      setcryptoPayment("coinbase"), handleCryptoRadio();
                    }}
                    // onClick={()=>handleOnPress()}
                    className="paymentRadio mt-1.5"
                  />
                </div>
              </div>
            </label> */}
          </div>
        </div>
        <ProcessDialogue
          openProcessing={openProcessTransaction}
          closeProcessing={() => setOpenProcessTransaction(false)}
        />
      </Modal>
    </div>
  );
};

export default CryptoDialogue;
