import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // Tugma uchun import
import CloseIcon from "@mui/icons-material/Close";

const KeepMountedModal = ({ open, onClose, rowData }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Markazlashtirish
          padding: 4,
          paddingTop: 1,
          paddingBottom: 2,
          bgcolor: "background.paper",
          borderRadius: 2,
          outline: "none", // Modalning konturini olib tashlash
          maxWidth: "490px", // Maximal kenglik
          width: "90%" // Mobil qurilmalar uchun kenglikni moslashtirish
        }}>
        <div>
          <div className="flex justify-end mt-1">
            <Button
              variant="contained"
              style={{ borderRadius: "10px", width: "40px" }}
              onClick={onClose}>
              <CloseIcon />
            </Button>
          </div>
          <h2
            id="keep-mounted-modal-title"
            className="font-semibold text-[18px] text-slate-900">
            Car Details
          </h2>
          <p className="font-medium">
            Car Number:{" "}
            <span className="text-red-700 ">{rowData.vehicleNumber}</span>
          </p>
          <p className="font-medium">
            Entry Time:{" "}
            <span className="text-red-700 ">{rowData.enterDate}</span>
          </p>
          <p className="font-medium">
            Exit Time: <span className="text-red-700 ">{rowData.exitDate}</span>
          </p>
          <p className="font-medium">
            Cargo weight:{" "}
            <span className="text-red-700 ">{rowData.cargoWeight}</span>
          </p>
          <p className="font-medium">
            Driver Name:{" "}
            <span className="text-red-700 ">{rowData.driverName}</span>
          </p>
          <p className="font-medium">
            Age: <span className="text-red-700 ">{rowData.age}</span>
          </p>

          {/* Rasmlar ko'rsatilmoqda */}
          <div className="flex flex-wrap gap-3">
            {rowData.images.map((imgSrc, index) => (
              <img
                className="mt-2 rounded-md w-[150px]"
                key={index}
                src={imgSrc}
                alt={`Image ${index + 1}`}
                width={100}
              />
            ))}
          </div>

          {/* Modalni yopish uchun tugma */}
        </div>
      </Box>
    </Modal>
  );
};

export default KeepMountedModal;
