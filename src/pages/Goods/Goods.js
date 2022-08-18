import React from "react";
import { fetchPosts } from "./../../redux/Reducer/postSlice"
import {fetchCategory} from './../../redux/Reducer/CategorySlice'
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
  Pagination,
  
} from "@mui/material";
import Row from './../../Component/Goods/Row'

function Goods() {
  const dispatch = useDispatch();
 const {category}=useSelector((state)=>state.category)
  const { posts } = useSelector((state) => state.posts);
  const [params,setParams]=useState('')

  useEffect(() => {
    dispatch(fetchPosts(params),
    dispatch(fetchCategory())
    );
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
              مدیریت کالا
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
                تصویر
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                نام کالا
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}>
                دسته بندی
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "iran" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {posts.map((post) => (
              <Row key={post.id} post={post} category={category.filter((item)=>item.id===post.id)} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={7} onClick={(event)=>setParams(event.target.textContent)  } color="primary"/>
    </>
  );
}

export {Goods} ;


