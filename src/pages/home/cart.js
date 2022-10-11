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
import { getTotals, deleteCart,cleareCartItem } from "./../../redux/reducer/cartSlice";
import { useStyles } from "./../../styles/cart/style";
import Modal from "@mui/material/Modal";
export function Cart() {
  const { cartItems, cartTotalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
   

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch,cartItems]);
  return (
    <div className={classes.container} >
      <Typography variant="h5" align="right">
        سبد خرید
      </Typography>
      <Table className={classes.table} >
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell align="center">کالا</TableCell>
            <TableCell align="center">قیمت</TableCell>
            <TableCell align="center">تعداد</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}  >
              <TableCell align="center">
                <Link href={`/product/${item.id}`} underline='none'>{item.name}</Link>
              </TableCell>
            
              <TableCell align="center">
                {digitsEnToFa(
                  item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </TableCell>
              <TableCell align="center">
                {digitsEnToFa(item.count)}
              </TableCell>
              <TableCell align="center">
                <Button onClick={handleOpen}color={'warning'} variant='outlined'>حذف</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className={classes.modal}>
                    <Typography>کالا از سبد خرید حذف شود؟</Typography>
                    <Box className={classes.buttonsContainer} >
                    <Button
                      variant="outlined"
                      onClick={() => {
                        dispatch(deleteCart(item.id));
                        dispatch(getTotals());
                        handleClose();
                      }}
                    >بله</Button>
                    <Button variant="outlined" onClick={handleClose} >خیر</Button>
                    </Box>
                   
                  </Box>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
       className={classes.lastRow}
      >
        <Typography>
          جمع:
          {digitsEnToFa(
            cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          )}
        </Typography>
        <Box className={classes.buttonsContainer}>
        <Button
          variant="contained"
          onClick={() => navigate("/finalizePayment")}
          sx={{ backgroundColor: "#00c853" }}
        >
          نهایی کردن سبد خرید
        </Button>
        <Button
          variant="contained"
          onClick={()=>dispatch(cleareCartItem())}
          sx={{ backgroundColor: "#ffa726" }}
        >
           پاک کردن سبد خرید
        </Button>
        </Box>
      </Box>
    </div>
  );
}
