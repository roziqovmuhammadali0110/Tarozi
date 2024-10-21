import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const KeepMountedModal = ({ open, onClose, rowData }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          bgcolor: "background.paper",
          borderRadius: 1,
          outline: "none", // Modalning konturini olib tashlash
          maxWidth: "500px", // Maximal kenglik
          margin: "auto" // Markazlashtirish uchun
        }}>
        <div>
          <h2 id="keep-mounted-modal-title">Car Details</h2>
          <p>Car Number: {rowData.carNumber}</p>
          <p>Entry Time: {rowData.entryTime}</p>
          <p>Exit Time: {rowData.exitTime}</p>
          <p>Driver Name: {rowData.driverName}</p>
          <p>Age: {rowData.age}</p>

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
        </div>
      </Box>
    </Modal>
  );
};

export default KeepMountedModal;
