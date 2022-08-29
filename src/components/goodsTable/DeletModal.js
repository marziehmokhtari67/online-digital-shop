import React from "react";
import { Modal, Box, IconButton, Typography, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useStyles } from "./../../styles/modals/style";
import { fetchDelet, fetchPosts } from "../../redux/reducer/productSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "axios";
function DeletModal({ open, handleClolse, postId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDelet = (e, id) => {
    e.preventDefault();
    dispatch(fetchDelet(id));
    dispatch(fetchPosts());
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography>حذف کالا</Typography>
          <IconButton onClick={handleClolse} color={"primary"}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Typography>کالای مورد نظر از لیست کالا حذف شود؟</Typography>
        <Box>
          <Button onClick={(e) => handleDelet(e, postId)}>بله</Button>
          <Button onClick={handleClolse}>خیر</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeletModal;
