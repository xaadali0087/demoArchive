import { useEffect, useRef, useState } from "react";
import { initOnRamp } from "@coinbase/cbpay-js";
import { error } from "console";

// type InitOnRampOptions = Parameters<initOnRamp>[0];
// type InitOnRampOptions = Parameters<typeof initOnRamp>[0];
type InitOnRampOptions = Parameters<any>[0];

const useCoinBase = () => {
  const [isReady, setIsReady] = useState(false);
  const onrampInstance = useRef();
  let destinationWalletAddress = "0x3DfA64bb636653863354e065F8452E0527721EFd";

  useEffect(() => {
    const options: InitOnRampOptions = {
      appId: "dfsadf", //app id needed from coinbase
      target: "#coinbase",
      widgetParameters: {
        destinationWallets: [
          {
            address: destinationWalletAddress,
            blockchains: ["ethereum", "algorand"],
          },
        ],
      },
      onSuccess: () => {
        // handle navigation when user successfully completes the flow
        alert("you are in coinbase");
      },
      onExit: () => {
        // handle navigation from dismiss / exit events due to errors
        alert("you are in coinbase");
      },
      //       onEvent: (event) => {
      //         // event stream
      //   },
      experienceLoggedIn: "embedded",
      experienceLoggedOut: "popup",
    };
    // instance.destroy() should be called before initOnramp if there is already an instance.
    if (onrampInstance.current) {
      //@ts-ignore
      onrampInstance.current.destroy();
    }

    //  function instance(error: Error, instance: null): void {
    //      throw new Error("Function not implemented.");
    //  }
    //@ts-ignore
    initOnRamp(options, (error, instance) => {
      if (instance) {
        //@ts-ignore
        onrampInstance.current = instance;
        setIsReady(true);
      }
    });
  }, [destinationWalletAddress]);
  const handleOnPress = ()=>{
    //@ts-ignore
    onrampInstance.current.open();
  }
  return {handleOnPress};
};
export default useCoinBase;