import React,{ useEffect, useState }  from "react";
import { fetchProduct } from "../../redux/reducer/productSlice";
import { fetchCategory } from "../../redux/reducer/categorySlice";
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
import Row from "../../components/goodsTable/Row";
import AddModal from "../../components/goodsTable/AddModal";
import { useStyles } from "../../styles/table/style";
function Goods() {
  // defining constants
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { products,totalCount } = useSelector((state) => state.products);
  const [params, setParams] = useState(1);
  const classes = useStyles();
  const[open,setOpen]=useState(false)

  // defining functions
  const handleCloseAdd=()=>setOpen(false)
  const handleOpenAdd=()=>setOpen(true)
  useEffect(() => {
  dispatch(fetchProduct(params), dispatch(fetchCategory()));
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
              onClick={handleOpenAdd}
            >
          اضافه کردن
            </Button>
            <AddModal open={open} handleCloseAdd={handleCloseAdd}/>
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
                مدل
              </TableCell>
              <TableCell align="center" >
                دسته بندی
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <Row key={product.id} product={product} categories={categories} params={params}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
      
      <Pagination className={classes.pagination} count={Number(Math.ceil(totalCount/5))} page={params} onChange={handleChange}  shape="rounded"
        color='primary' />
        
    </Stack>
     
    </Box>
  );
}

export { Goods };
