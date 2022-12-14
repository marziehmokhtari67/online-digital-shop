import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import { useStyles } from "./../../styles/modals/style";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "./../../redux/reducer/categorySlice";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import instance from "./../../API/http";
import { fetchEdit, fetchProduct } from "./../../redux/reducer/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {URL} from './../../API/constant'

// //////////////////////////////////////////////////////////////////
function EditModal({ openedit, handleCloseEdit, product, params }) {
  //  variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = useState(product.image);
  const [thumbnail, setThumbnail] = useState(product.thumbnail);
  // const [src, setSrc] = useState([]);
  const { categories } = useSelector((state) => state.category);
  // handleUpload functions
  const handleUpload = async (e) => {
    // const selectedFIles = [];
    const targetFiles = e.target.files;

    // const targetFilesObject = [...targetFiles];
    // targetFilesObject.map((file) => {
    //   return selectedFIles.push(URL.createObjectURL(file));
    // });
    // setSrc(selectedFIles);

    const requests = Array.from(targetFiles).map((item) => {
      const form = new FormData();
      form.append("image", item);
      return instance.post("/upload", form);
    });
    const res = await Promise.all(requests);
    setThumbnail(res[0].data.filename); 
    const array=[...image]
    
    res.slice(1,4).map((r,index)=>array[index]=r.data.filename)
    setImage(array)
    // SetImage([
    //   res[1].data.filename,
    //   res[2].data.filename,
    //   res[3].data.filename,
    // ]);
  };
  // handleSave function
  const handleSave = (data) => {
    const formData = {
      name: data.name,
      model: data.model,
      color: data.color,
      quantity: data.quantity,
      price: data.price,
      category: Number(data.category),
      description: data.description,
      thumbnail,
      image,
    };
    // e.preventDefault();
    dispatch(fetchEdit({ id: product.id, formData }))
      .then(unwrapResult)
      .then(() => {
        toast.success("???????????? ???????? ???? ???????????? ?????????? ????", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProduct(params));
      });
    handleCloseEdit();
  };
  //  validate function
  const validate = (values) => {
    const errors = {};
    if (
      !values.name ||
      !values.model ||
      !values.price ||
      !values.color ||
      !values.category ||
      !values.quantity ||
      !values.description
    ) {
      errors.massage1 = "???? ???????? ?????????? ???????????? ???????????? ??????.";
    }
    if (!thumbnail) {
      errors.massage2 = "???????????? ?????? ???????????? ??????";
    }
    return errors;
  };

  //defining formik
  const { values, handleChange, errors, handleSubmit, setFieldValue, isValid } =
    useFormik({
      initialValues: {
        name: product.name,
        model: product.model,
        price: product.price,
        quantity: product.quantity,
        color: product.color,
        description: product.description,
        category: product.category,
      },
      validate,
      onSubmit: (values) => {
        handleSave(values);
      },
    });

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <Modal
      open={openedit}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Box className={classes.container} 
   >
        <Box className={classes.header}>
          <Typography>????????????/????????????</Typography>
          <IconButton onClick={handleCloseEdit} color={"primary"}>
            <CancelIcon />
          </IconButton>
        </Box>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item md={12} xs={12}>
              <Typography>?????????? ????????:</Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <input
                type="file"
                multiple
                md={6}
                onChange={(e) => handleUpload(e)}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ display: "flex", gap: "5px" }}>
              <Avatar
                name="thumbnail"
                alt="image"
                src={`${URL}/files/${thumbnail}`}
                variant="rounded"
                onChange={handleChange}
              />
              <Avatar
                name="image1"
                alt="image"
                src={`${URL}/files/${image[0]}`}
                variant="rounded"
                onChange={handleChange}
              />
              <Avatar
                alt="image2"
                src={`${URL}/files/${image[1]}`}
                variant="rounded"
                onChange={handleChange}
              />
              <Avatar
                alt="image3"
                src={`${URL}/files/${image[2]}`}
                variant="rounded"
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography>?????? ????????:</Typography>
              <input
                name="name"
                type="text"
                className={classes.input}
                value={values.name}
                onChange={handleChange}
              ></input>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>???????? ????????:</Typography>
              <select
                className={classes.input}
                name="category"
                value={values.category}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </Grid>
            
            <Grid item md={6} xs={12}>
              <Typography>??????:</Typography>
              <input
                type="text"
                className={classes.input}
                name="model"
                value={values.model}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography>????????:</Typography>
              <input
                type="number"
                className={classes.input}
                value={values.price}
                name="price"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>??????????:</Typography>
              <input
                type="number"
                name="quantity"
                className={classes.input}
                value={values.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>??????:</Typography>
              <input
                type="text"
                name="color"
                className={classes.input}
                value={values.color}
                onChange={handleChange}
              />
            </Grid>
          
          
            <Grid item md={12} xs={12}>
              <Typography>??????????????:</Typography>
              <CKEditor
                id="description"
                data={values.description}
                className={classes.ckEditor}
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  setFieldValue("description", editor.getData());
                }}
              />
            </Grid>
           
          </Grid>
          {errors.massage1 && <p style={{ color: "red" }}>{errors.massage1}</p>}
          {errors.massage2 && <p style={{ color: "red" }}>{errors.massage2}</p>}
          <Button
            type="submit"
            className={classes.btn}
            disabled={!isValid}
            variant={"outlined"}
          >
            ??????????
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default EditModal;
