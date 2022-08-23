import React from "react";
import { fetchPosts } from "../../redux/reducer/postSlice";
import { fetchCategory } from "../../redux/reducer/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
import Row from "../../components/goodsTable/Row";
import { useStyles } from "../../styles/table/style";
function Goods() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { posts } = useSelector((state) => state.posts);
  const [params, setParams] = useState(1);
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchPosts(params), dispatch(fetchCategory()));
  }, [dispatch, params]);
  const handleChange = (event, value) => {
    setParams(value);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <AppBar position="static" elevation={0}>
          <Toolbar className={classes.toolBar} disableGutters={true}>
            <Typography variant="h6" component="div">
              مدیریت کالا
            </Typography>
            <Button
              variant="outlined"
              color='primary'
            >
          اضافه کردن
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer  className={classes.tableContainer} >
        <Table className={classes.table} aria-label="simple table" size='small'>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                تصویر
              </TableCell>
              <TableCell align="center">
                نام کالا
              </TableCell>
              <TableCell align="center" >
                دسته بندی
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <Row key={post.id} post={post} categories={categories} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
      
      <Pagination className={classes.pagination} count={7} page={params} onChange={handleChange}  shape="rounded"
        color='primary' />
    </Stack>
      {/* <Pagination className={classes.pagination}
        count={6}
       
        onChange={(event) => setParams(event.target.textContent)}
        shape="rounded"
        color='primary'
       
      /> */}
    </Box>
  );
}

export { Goods };
