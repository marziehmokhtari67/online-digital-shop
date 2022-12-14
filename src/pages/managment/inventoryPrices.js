import React, { useEffect, useState, useCallback } from "react";
import { fetchProduct, fetchPatch } from "../../redux/reducer/productSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  AppBar,
  Box,
  Typography,
  Button,
  Toolbar,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Pagination,
  Stack,
} from "@mui/material";
import Row from "../../components/priceTable/Row";
import { useStyles } from "./../../styles/table/style";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
function InventoryPrices() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [editpr, setEditpr] = useState(null);
  const [editqu, setEDitqu] = useState(null);
  const [params, setParams] = useState(1);
  const handleSave = useCallback(async () => {
    const request = data.map((item) =>
      dispatch(fetchPatch({ id: item.id, rowData: item }))
    );
    Promise.all(request)
      .then(unwrapResult)
      .then(() => {
        toast.success("ویرایش با موفقیت ذخیره  شد", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        dispatch(fetchProduct(params));
        setEditpr(null);
        setEDitqu(null);
      });
  }, [data, dispatch, params]);

  const { products, totalCount } = useSelector((state) => state.products);

  const classes = useStyles();
  const handleChange = (event, value) => {
    setParams(value);
  };

  useEffect(() => {
    dispatch(fetchProduct(params));
  }, [dispatch, params]);
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <AppBar position="static" elevation={0}>
          <Toolbar className={classes.toolBar} disableGutters={true}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              مدیریت موجودی و قیمت ها
            </Typography>
            <Button variant="outlined" color="primary" onClick={handleSave}>
              ذخیره
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">کالا</TableCell>
              <TableCell align="center">مدل</TableCell>
              <TableCell align="center">قیمت</TableCell>
              <TableCell align="center">موجودی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <Row
                key={product.id}
                product={product}
                data={data}
                setData={setData}
                editpr={editpr}
                setEditpr={setEditpr}
                editqu={editqu}
                setEDitqu={setEDitqu}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} className={classes.pagination}>
        <Pagination
          
          count={Math.ceil(totalCount / 5)}
          page={params}
          onChange={handleChange}
          variant="outlined"
          shape="circular"
          color="secondary"
        />
      </Stack>
    </Box>
  );
}

export { InventoryPrices };
