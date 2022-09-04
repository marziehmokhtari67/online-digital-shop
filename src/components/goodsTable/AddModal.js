import React, { useEffect, useState, useCallback } from "react";
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
import { fetchAdd, fetchProduct } from "./../../redux/reducer/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { schema } from "../../yup/schemaModal";
// ////////////////////////////////////////////////////////////////////////////////////////////////
function AddModal({ open, handleCloseAdd }) {
  // definding variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const handleSave = (data) => {
    
    setFormData({
      name: data.name,
      model: data.model,
      quantity: data.quantity,
      color: data.color,
      category: data.category,
      description: data.description,
      price: data.price,
    });

    formData
      ? dispatch(fetchAdd(formData))
          .then(unwrapResult)
          .then(() => {
            toast.success("اضافه کردن کالا با موفقیت انجام شد", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            dispatch(fetchProduct());
          })
      : alert("دیتای وارد شده صحیح نمیباشد");
    data.name = "";
    data.model = "";
    setImage([]);
    setThumbnail("");
    data.price = "";
    data.color = "";
    data.quantity = "";
    data.category = "";
    data.description = "";
    setSrc("");
    handleCloseAdd();
  };
  const [src, setSrc] = useState([]);
  const [formData, setFormData] = useState();
  const { categories } = useSelector((state) => state.category);
  const { values, handleChange, errors, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        model: "",
        price: "",
        quantity: 0,
        color: "",
        thumbnail: "",
        description: "",
        category: 1,
        image1: "",
        image2: "",
        image3: "",
      },
      validationSchema: schema,
     
    });
  // defindinf functions
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

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
    setImage([
      res[1].data.filename,
      res[2].data.filename,
      res[3].data.filename,
    ]);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography>افزودن/ویرایش</Typography>
          <IconButton onClick={handleCloseAdd} color={"primary"}>
            <CancelIcon />
          </IconButton>
        </Box>

        <form
          className={classes.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Typography>تصویر کالا:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="file"
                multiple
                md={6}
                onChange={(e) => handleUpload(e)}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ display: "flex", gap: "5px" }}>
              <Avatar alt="image" src={src[0]} variant="rounded" />
              <Avatar alt="image" src={src[1]} variant="rounded" />
              <Avatar alt="image" src={src[2]} variant="rounded" />
              <Avatar alt="image" src={src[3]} variant="rounded" />
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography>نام کالا:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>دسته بندی:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="text"
                className={classes.input}
                value={values.name}
                onChange={handleChange}
                name="name"
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.input}>
              <select
                className={classes.input}
                value={Number(values.category)}
                name="category"
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
                value={values.model}
                name="model"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="text"
                name="price"
                className={classes.input}
                value={values.price}
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
          <Button type="submit" className={classes.btn} variant={"outlined"}>
            ذخیره
          </Button>
          {errors ? <p>mvdondo</p> : <p></p>}
        </form>
      </Box>
    </Modal>
  );
}

export default AddModal;
