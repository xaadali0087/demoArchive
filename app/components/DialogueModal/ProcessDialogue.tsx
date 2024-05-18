"use client";

import React, { FC, SetStateAction, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import CancleIcon from "@/app/assets/Icons/CancleIcon";
type ProcessDialogueProps = {
  openProcessing: boolean;
  closeProcessing: () => void;
};

const ProcessDialogue: FC<ProcessDialogueProps> = ({
  openProcessing,
  closeProcessing,
}) => {
  return (
    <div>
      <Modal
        showCloseIcon={false}
        open={openProcessing}
        onClose={closeProcessing}
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
        <div className="flex justify-between text-lg items-center md:w-[440px] w-[270px]">
          <p>Transaction In Process...</p>
          <div className="cursor-pointer" onClick={closeProcessing}>
            <CancleIcon />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProcessDialogue;
