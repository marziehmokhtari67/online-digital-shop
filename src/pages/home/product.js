import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "./../../API/constant";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useStyles } from "./../../styles/productPage/style";
import { useFormik } from "formik";
import * as yup from "yup";

function Product() {
  const { productId } = useParams();
  const [info, setInfo] = useState([]);
  const submit = () => {
    console.log("mmkkkkkkkkmmmmmmmmmmmmmmmmmm");
  };
  const schema = yup.object().shape({
    count: yup
      .number()
      .positive()
      .integer()
      .min(1, "تعداد محصول بیشتر از 0 باشد")
      .max(info.quantity, "تعداد محصول بیشتر از موجودی است")
      .required("تعداد محصول الزامی است"),
  });
  const formik = useFormik({
    initialValues: {
      count: 0,
    },
    validationSchema: schema,
    onSubmit: submit,
  });
  const getData = (id) => {
    axios.get(`${URL}/products/${id}`).then((res) => setInfo(res.data));
  };
  const classes = useStyles();
  useEffect(() => getData(productId), [productId]);
  return (
    <Box>
    <Box className={classes.container}>
      <Box className={classes.imagesContainer}>
        <Box>
          {info.image && (
            <img
              alt="aks"
              src={`${URL}/files/${info.image[0]}`}
              className={classes.bigImage}
            />
          )}
        </Box>
        {info.image && (
          <img
            alt="aks"
            src={`${URL}/files/${info.image[0]}`}
            className={classes.smallImage}
          />
        )}
        {info.image && (
          <img
            alt="aks"
            src={`${URL}/files/${info.image[1]}`}
            className={classes.smallImage}
          />
        )}
        {info.image && (
          <img
            alt="aks"
            src={`${URL}/files/${info.image[2]}`}
            className={classes.smallImage}
          />
        )}
      </Box>
      <Box  className={classes.detail}>
        <Box>
          <Typography>نام محصول: {info.name}</Typography>
          <Typography> مدل:{info.model} </Typography>
          {info.price && (
            <Typography>
              {" "}
              قیمت:{" "}
              {digitsEnToFa(
                info.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}{" "}
              تومان
            </Typography>
          )}
          <Typography>رنگ: {info.color}</Typography>

          {info.color && (
            <Typography>موجودی: {digitsEnToFa(info.quantity)} تعداد</Typography>
          )}
        </Box>
        <form autoComplete="off" onSubmit={formik.handleSubmit} className={classes.form}>
          <input
            type="number"
            name="count"
            value={formik.values.count}
            onChange={formik.handleChange}
            placeholder="لطفا تعداد محصول برای خرید را وارد کنید"
            // onBlur={formik.handleBlur}
            className={classes.input}
          />
          {formik.errors.count && (
            <Typography className={classes.error} >{formik.errors.count}</Typography>
          )}
          {info.quantity === 0 ? (
            <Button variant="outlined" disabled>
              افزودن به سبد خرید
            </Button>
          ) : (
            <Button variant="outlined" type="submit">
              افزودن به سبد خرید
            </Button>
          )}
        </form>
      </Box>
      
    </Box>
    <Typography  sx={{pt:1,pr:2}}>توضیحات:</Typography>
    <Typography sx={{pt:1,pr:2}} dangerouslySetInnerHTML={{__html:info.description}}/>
    </Box>
  );
}

export { Product };
