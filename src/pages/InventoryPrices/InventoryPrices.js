import React from "react";
import { fetchPosts } from "./../../redux/Reducer/postSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
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
  Pagination
} from "@mui/material";
import Row from './../../Component/PriceTable/Row'
function InventoryPrices() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [params,setParams]=useState('')
  useEffect(() => {
    dispatch(fetchPosts(params));
  }, [params]);
  return (
    <>
      <Box sx={{ flexGrow: 1, boxShadow: "none" }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              backgroundColor: "white",
              color: "black",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "iran" }}
            >
              مدیریت موجودی و قیمت ها
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              sx={{ fontFamily: "iran" }}
            >
              ذخیره
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer sx={{ padding: "0 30px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                کالا
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                قیمت
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                موجودی
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <Row post={post} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={4} onClick={(event)=>setParams(event.target.textContent) } />
    </>
  );
}

export {InventoryPrices};