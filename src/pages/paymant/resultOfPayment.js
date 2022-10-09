import React, { useEffect, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { addOrders } from "./../../redux/reducer/orderSlice";
import { useParams } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {cleareCartItem } from './../../redux/reducer/cartSlice'

// ///////////////////////////////////////////////////////////////////////////
function ResultOfPayment() {
  const { result } = useParams();
  
  const dispatch = useDispatch();
  // getting info from local storage
  const clientData = JSON.parse(localStorage.getItem("userInfo"));
  const orders = JSON.parse(localStorage.getItem("cartItems"));

  //calculating total prices from orders
 if(orders) {let total = orders.reduce((cartTotal, cartItem) => {
    const { price, count } = cartItem;
    const itemTotal = price * count;
    cartTotal += itemTotal;
    return cartTotal;
  }, 0);
  // completting client data
  clientData.delivered = false;
  clientData.products = orders;
  clientData.prices = total;}
  //handele result function
  const handleResult = useCallback(() => {
    if (result === "success") {
      dispatch(addOrders(clientData))
        .then(unwrapResult)
        .then(() => {
          localStorage.removeItem("userInfo");
          dispatch(cleareCartItem())
        });
    }
  }, [result, dispatch, clientData]);


  
  useEffect(() => handleResult(), [handleResult, result]);
  return result === "success" ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <CheckCircleIcon color={"success"} />
      <Typography>
        باتشکر از پرداخت شما سفارش شما ثبت شد جهت هماهنگی ارسال با شما تماس
        گرفته خواهد شد
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <CancelIcon color={"warning"} />
      <Typography>
        پرداخت موفقیت امیز نبود سفارش شما در انتظار پرداخت است
      </Typography>
    </Box>
  );
  
}

export { ResultOfPayment };
