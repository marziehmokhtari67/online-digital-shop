import React from "react";

import { Modal, Box, IconButton, Typography, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useStyles } from "./../../styles/modals/style";
import { fetchDelete, fetchProduct } from "../../redux/reducer/productSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
function DeletModal({ openDelete, handleCloseDelete, productId, params }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(fetchDelete(id))
      .then(unwrapResult)
      .then(() => {
        toast.success("حذف کالا با موفقیت انجام شد", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProduct(params));
      });
  };
  return (
    <Modal
      open={openDelete}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.container} >
        <Box className={classes.header}>
          <Typography>حذف کالا</Typography>
          <IconButton onClick={handleCloseDelete} color={"primary"}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Typography>کالای مورد نظر از لیست کالا حذف شود؟</Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="outlined" onClick={() => handleDelete(productId)}>
            بله
          </Button>

          <Button
            variant="outlined"
            color="warning"
            onClick={handleCloseDelete}
          >
            خیر
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeletModal;
