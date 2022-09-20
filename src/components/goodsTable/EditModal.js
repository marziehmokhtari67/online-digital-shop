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

// //////////////////////////////////////////////////////////////////
function EditModal({ openedit, handleCloseEdit, product, params }) {
  //  variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, SetImage] = useState(product.image);
  const [thumbnail, setThumbnail] = useState(product.thumbnail);
  const [src, setSrc] = useState([]);
  const { categories } = useSelector((state) => state.category);
  // handleUpload functions
  const handleUpload = async (e) => {
    const selectedFIles = [];
    const targetFiles = e.target.files;

    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setSrc(selectedFIles);

    const requests = Array.from(targetFiles).map((item) => {
      const form = new FormData();
      form.append("image", item);
      return instance.post("/upload", form);
    });
    const res = await Promise.all(requests);
    setThumbnail(res[0].data.filename);
    SetImage([
      res[1].data.filename,
      res[2].data.filename,
      res[3].data.filename,
    ]);
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
        toast.success("ویرایش کالا با موفقیت انجام شد", {
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
      errors.massage1 = "پر کردن تمامی فیلدها الزامی است.";
    }
    if (!thumbnail) {
      errors.massage2 = "انتخاب عکس الزامی است";
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
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography>افزودن/ویرایش</Typography>
          <IconButton onClick={handleCloseEdit} color={"primary"}>
            <CancelIcon />
          </IconButton>
        </Box>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Typography>تصویر کالا:</Typography>
            </Grid>
            <Grid item>
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
                src={src[0]}
                variant="rounded"
                onChange={handleChange}
              />
              <Avatar
                name="image1"
                alt="image"
                src={src[1]}
                variant="rounded"
                onChange={handleChange}
              />
              <Avatar
                alt="image2"
                src={src[2]}
                variant="rounded"
                onChange={handleChange}
              />
              <Avatar
                alt="image3"
                src={src[3]}
                variant="rounded"
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography>نام کالا:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>دسته بندی:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                name="name"
                type="text"
                className={classes.input}
                value={values.name}
                onChange={handleChange}
              ></input>
            </Grid>
            <Grid item md={6} xs={12} className={classes.input}>
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
              <Typography>مدل:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>قیمت:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="text"
                className={classes.input}
                name="model"
                value={values.model}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="number"
                className={classes.input}
                value={values.price}
                name="price"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>تعداد:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>رنگ:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="number"
                name="quantity"
                className={classes.input}
                value={values.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="text"
                name="color"
                className={classes.input}
                value={values.color}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography>توضیحات:</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
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
            ذخیره
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default EditModal;
