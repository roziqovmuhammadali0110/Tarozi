import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none"
};

export default function KeepMountedModal({ open, onClose, rowData }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      keepMounted>
      <Box sx={style}>
        {/* Yopish tugmasi yuqori o'ng burchakda */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>

        <Typography id="modal-title" variant="h6" component="h2">
          Driver Information
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Car Number: {rowData?.carNumber}
        </Typography>
        <Typography sx={{ mt: 2 }}>Entry Time: {rowData?.entryTime}</Typography>
        <Typography sx={{ mt: 2 }}>Exit Time: {rowData?.exitTime}</Typography>
        <Typography sx={{ mt: 2 }}>
          Driver Name: {rowData?.driverName}
        </Typography>
        <Typography sx={{ mt: 2 }}>Age: {rowData?.age}</Typography>
      </Box>
    </Modal>
  );
}
