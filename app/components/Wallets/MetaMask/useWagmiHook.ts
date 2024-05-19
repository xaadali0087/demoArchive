import { useAccount, useSendTransaction, useTransaction  } from 'wagmi';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { parseEther } from 'viem';
import { setCustomerAddress } from '../../ReduxToolKit/web3Slice';
import { useMetaMaskDataMutation } from '../../ReduxToolKit/droneAPI';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../ReduxToolKit/hook';
import { useRouter } from 'next/navigation';
import { config } from "../../../../config"
import { getTransaction } from '@wagmi/core';
import useMetaMaskProvider from './useMetaMaskProvider';


type MetaMaskData = {
  blockHash: string;
  cumulativeGasUsed: string;
  effectiveGasPrice: string;
  from: string;
  gasUsed: string;
  to: string;
  transactionHash: string;
};

const TransactionWithWagmi = () => {
  const dispatch= useAppDispatch()
  const router = useRouter()
   const { data, isSuccess,isPending, error, sendTransactionAsync } = useSendTransaction({
  config,
  });
    const [customData, setCustomData] = useState<MetaMaskData>();
  const [showError, setShowError] = useState<any>();
  const [transactionLoader, setTransactionLoader] = useState<boolean>(false);
  const[getHash,setGetHash]=useState(false)
  const[findHash,setFindHash]=useState<any>("")
 const [createMetamaskData] = useMetaMaskDataMutation();
useEffect(()=>{
  if(error) toast.info(error?.message)
},[error])




  const handleTransaction = async () => {
    // debugger;
    try {
    const response =  await  sendTransactionAsync({
          to: '0x80f8Ece3d9855D2d52a8D6DaB05692924eB698e2', // Replace with the recipient address
          value: parseEther('0.00001'),
          
      });
      return response;
    } catch (error) {
      console.error('Failed to send transaction:', error);
    }
  };
 
  
  const result = useTransaction({
    hash: data,
  })

//   useEffect(()=>{
//     console.log("result",result)
//     if(result && result?.isFetched){
//       setTimeout(()=>{
//         router.push("/checkout-successful/"); 
//       },15000)
//  }
//   },[result])

 


   const handleSubmitResponse = async (hash:any) => { 
   
    console.log("hashhhhhhhhhhhhhhhhh",hash)
    if(hash === undefined){
      return;
    }
    try {
     
    
      //  if (Number(balance) < Number(value)) {
      //     toast.info("Insufficient balance")
      //     return;
      //   }
          setTransactionLoader(true);
          let CGU = hash.maxFeePerGas.toString();
          let EGP = hash.gasPrice?.toString();
          let GU = hash.maxPriorityFeePerGas.toString();
        
          const sendData: MetaMaskData = {
            blockHash: hash.blockHash || "",
            cumulativeGasUsed: CGU || "",
            effectiveGasPrice: EGP || "",
            from: hash.from || "",
            gasUsed: GU || "",
            to: hash.to || "",
            transactionHash: hash.hash || "",
          };
          setCustomData(sendData);
          await createMetamaskData(sendData);
          setTransactionLoader(false);
          dispatch(setCustomerAddress(hash.from));
          router.push("/checkout-successful/");        
    } catch (error:any) {
      const findError = error?.response?.data?.message ? error?.response?.data?.message : error?.message; 
      toast.error(findError);
      console.log("Transaction Errors and api error:", error);
    }
  
  };

  

  // console.log("result",result.isLoading)

  return { transactionLoader, handleTransaction }
};

export default TransactionWithWagmi;