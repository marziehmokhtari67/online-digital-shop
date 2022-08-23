import React from "react";
import { fetchPosts } from "../../redux/reducer/postSlice"
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
  Pagination,Stack
} from "@mui/material";
import Row from '../../components/priceTable/Row'
import {useStyles} from './../../styles/table/style' 

function InventoryPrices() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [params,setParams]=useState(1)
  const classes=useStyles()
  const handleChange = (event, value) => {
    setParams(value);
  };

  useEffect(() => {
    dispatch(fetchPosts(params));
  }, [dispatch, params]);
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            className={classes.toolBar}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1}}
            >
              مدیریت موجودی و قیمت ها
            </Typography>
            <Button
              variant="outlined"
              color="primary"
            >
              ذخیره
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" >
                کالا
              </TableCell>
              <TableCell align="center" >
                قیمت
              </TableCell>
              <TableCell align="center" >
                موجودی
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <Row key={post.id} post={post} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
      
      <Pagination className={classes.pagination} count={7} page={params} onChange={handleChange}  shape="rounded"
        color='primary' />
    </Stack>
      
    </Box>
  );
}

export {InventoryPrices};