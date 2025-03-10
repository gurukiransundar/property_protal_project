import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 6,
};

export default function BasicModal({
  open,
  handleOpen,
  title,
  description,
  setOpen,
  children,
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} style={{ position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ marginY: 2, fontWeight: "300", color: "rgb(156 163 175)" }}
            >
              {description}
            </Typography>
          </div>
          <div>{children}</div>
          <div style={{ position: "absolute", right: "15px", top: "15px" }}>
            <ClearIcon style={{ cursor: "pointer" }} onClick={handleClose} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
