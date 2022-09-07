import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button,
  Box,
  Link,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { getTotals, deleteCart } from "./../../redux/reducer/cartSlice";
import { useStyles } from "./../../styles/table/style";
export function Cart() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);
  return (
    <div style={{ padding: "10px" }}>
      <Typography variant="h5" align="right">
        سبد خرید
      </Typography>
      <Table className={classes.table} sx={{ margin: "0 auto" }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">کالا</TableCell>
            <TableCell align="right">مدل</TableCell>
            <TableCell align="center">قیمت</TableCell>
            <TableCell align="center">تعداد</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="right">
                <Link href={`/product/${item.id}`}>{item.name}</Link>
              </TableCell>
              <TableCell align="right">{item.model}</TableCell>
              <TableCell align="center">
                {digitsEnToFa(
                  item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </TableCell>
              <TableCell align="center">
                {digitsEnToFa(item.cartQuantity)}
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => {
                    dispatch(deleteCart(item.id));
                    dispatch(getTotals());
                  }}
                >
                  حذف
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Typography>
          جمع:
          {digitsEnToFa(
            cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          )}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/finalizePayment")}
         sx={{backgroundColor:"#00c853"}}
        >
          نهایی کردن سبد خرید
        </Button>
      </Box>
    </div>
  );
}
