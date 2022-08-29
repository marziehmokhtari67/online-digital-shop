
import React, { useCallback } from "react";

import { Modal, Box, IconButton, Typography, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useStyles } from "./../../styles/modals/style";
import { fetchDelet, fetchPosts } from "../../redux/reducer/productSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
function DeletModal({ open, handleClolse, postId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
 
  const handleDelete = (id) => {
    dispatch(fetchDelet(id))
      .then(unwrapResult)
      .then(() => {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(fetchPosts());
      });

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
          <Button onClick={() => handleDelete(postId)}>بله</Button>

          <Button onClick={handleClolse}>خیر</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeletModal;
