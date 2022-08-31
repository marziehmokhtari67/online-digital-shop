import React from "react";
import { fetchOrders } from "../../redux/reducer/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Row from "../../components/orderTable/Row";

import { useEffect, useState } from "react";
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
  Pagination,
  Stack,
} from "@mui/material";
import { useStyles } from "./../../styles/table/style";
function Order() {
  const dispatch = useDispatch();
  const { orders, totalCount } = useSelector((state) => state.orders);
  const [number, setNumber] = useState(1);
  const [delivered, setDelivered] = useState(true);

  const handleChange = (event, value) => {
    setNumber(value);
  };
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchOrders({ delivered, number }));
  }, [delivered, dispatch, number]);

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <AppBar position="static" elevation={0} >
          <Toolbar className={classes.toolBar} disableGutters={true}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                  defaultChecked="true"
                  control={<Radio />}
                  label="سفارش های ارسال شده"
                  onClick={() => setDelivered(true)}
                />
                <FormControlLabel
                  value="undelivered"
                  control={<Radio />}
                  label="سفارش های در حال انتظار ارسال"
                  onClick={() => setDelivered(false)}
                />
              </RadioGroup>
            </FormControl>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">نام کاربر</TableCell>
              <TableCell align="center">مجموع مبلغ</TableCell>
              <TableCell align="center">زمان ثبت سفارش</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <Row
                key={order.id}
                order={order}
                
                number={number}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} className={classes.pagination}>
        <Pagination
          count={Math.ceil(totalCount / 5)}
          page={number}
          onChange={handleChange}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export { Order };
