import React from "react";
import {fetchOrders} from './../../redux/Reducer/orderSlice'
import { useDispatch, useSelector } from "react-redux";
import Row from './../../Component/OrderTable/Row'
import { useEffect ,useState} from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Pagination
} from "@mui/material";

function Order() {
  const dispatch=useDispatch()
  const {orders}=useSelector((state)=>state.orders)
  const [number,setNumber]=useState('')
  const[delivered,setDelivered]=useState(true)
  useEffect(()=>{dispatch(fetchOrders(delivered,number))},[delivered,number])
  return (
    <>
      <Box sx={{ flexGrow: 1, boxShadow: "none" }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              backgroundColor: "white",
              color: "black",
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "iran" }}
            >
              مدیریت سفارش ها
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="deliverd"
              >
                <FormControlLabel
                  value="deliverd"
                  control={<Radio />}
                  label="سفارش های ارسال شده"
                  onClick={()=>setDelivered(true)}
                />
                <FormControlLabel
                  value="undelivered"
                  control={<Radio />}
                  label="سفارش های در حال انتظار ارسال"
                  onClick={()=>setDelivered(false)}
                />
              </RadioGroup>
            </FormControl>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer sx={{ padding: "0 30px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ fontFamily: "iran" }}>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                نام کاربر
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                مجموع مبلغ
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                زمان ثبت سفارش
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order)=><Row  order={order}/>)}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={2} onClick={(event)=>setNumber(event.target.textContent)  } color="primary"/>
    </>
  );
}

export {Order}



