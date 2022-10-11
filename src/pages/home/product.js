import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "./../../API/constant";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useStyles } from "./../../styles/productPage/style";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/reducer/cartSlice";
import { toast } from "react-toastify";
import ReactImageMagnify from 'react-image-magnify';

function Product() {
  // variables
  const { productId } = useParams();
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  // submit function
  const submit = (data) => {
    dispatch(
      addToCart({
        name: info.name,
        id: info.id,
        price: info.price,
        count: data.count,
        model: info.model,
      })
    );

    toast.success("کالای مورد نظر به سبد خرید اضافه شد", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  // schema
  const schema = yup.object().shape({
    count: yup
      .number()
      .positive()
      .integer()
      .min(1, "تعداد محصول بیشتر از 0 باشد")
      .max(info.quantity, "تعداد محصول بیشتر از موجودی است")
      .required("تعداد محصول الزامی است"),
  });
  // formik
  const formik = useFormik({
    initialValues: {
      count: null,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      submit(values);
    },
  });
  const getData = (id) => {
    axios.get(`${URL}/products/${id}`).then((res) => {
      setInfo(res.data);
      setPhoto(res.data.image[0]);
    });
  };
  const classes = useStyles();
  useEffect(() => getData(productId), [productId]);
  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.imagesContainer}>
          <Box className={classes.smallImagesContainer}>
            {info.image && (
              <img
                alt="aks"
                src={`${URL}/files/${info.image[0]}`}
                className={classes.smallImage}
                onClick={() => setPhoto(info.image[0])}
              />
            )}
            {info.image && (
              <img
                alt="aks"
                src={`${URL}/files/${info.image[1]}`}
                className={classes.smallImage}
                onClick={() => setPhoto(info.image[1])}
              />
            )}
            {info.image && (
              <img
                alt="aks"
                src={`${URL}/files/${info.image[2]}`}
                className={classes.smallImage}
                onClick={() => setPhoto(info.image[2])}
              />
            )}
          </Box>
          <Box>
            {info.image && (
              <>
             <ReactImageMagnify {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  src:`${URL}/files/${photo}`,
                  width: 300,
                  height:300,
                  
                 
              },
              largeImage: {
                  src: `${URL}/files/${photo}`,
                  width:450,
                  height:1000,

                  
              },
              enlargedImageContainerDimensions: {
                width: '150%',
                height: '70%',
            }
          }}
          enlargedImagePosition='beside'
          enlargedImagePortalId= "myPortal"
          className={classes.bigImage}
          />
          
          </>
             
              
            )}
            <Box id="myPortal" className={classes.portal}/>
          </Box>
        </Box>
        <Box className={classes.detail}>
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
              <Typography>
                موجودی: {digitsEnToFa(info.quantity)} تعداد
              </Typography>
            )}
          </Box>
          <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className={classes.form}
          >
            <input
              type="number"
              name="count"
              min="0"
              value={formik.values.count}
              onChange={formik.handleChange}
              placeholder=" تعداد محصول را وارد کنید"
              className={classes.input}
            />
            
              <Typography fontSize={14} className={classes.error}>
                {formik.errors.count? formik.errors.count :null}
              </Typography>
           
            {info.quantity === 0 ? (
              <Button
                variant="outlined"
                disabled
                type="submit"
                className={classes.btn}
              >
                افزودن به سبد خرید
              </Button>
            ) : (
              <Button variant="outlined" type="submit" className={classes.btn} disabled={!formik.isValid}>
                افزودن به سبد خرید
              </Button>
            )}
          </form>
        </Box>
      </Box>
      <Typography sx={{ pt: 1, pr: 2 }}>توضیحات:</Typography>
      <Typography
        sx={{ pt: 1, pr: 2 }}
        dangerouslySetInnerHTML={{ __html: info.description }}
      />
    </Box>
  );
}

export { Product };
