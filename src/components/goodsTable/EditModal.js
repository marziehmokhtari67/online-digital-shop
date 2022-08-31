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

function EditModal({ openedit, handleCloseEdit, product }) {
  // definding variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [price, SetPrice] = useState(product.price);
  const [model, setModel] = useState(product.model);
  const [quantity, setQuantity] = useState(product.quantity);
  const [color, setColor] = useState(product.color);
  const [image,SetImage] =useState(null)
  const [category, setCategory] = useState(product.category);
  const [thumbnail, setThumbnail] = useState(product.thumbnail);
  const [description, setDescription] = useState(product.description);
  const [src, setSrc] = useState([]);
  const { categories } = useSelector((state) => state.category);

  // defindinf functions
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleUpload = async (e) => {
    const selectedFIles = [];
    const targetFiles = e.target.files;
    console.log(targetFiles);
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
    setThumbnail(res[0].data.filename)
    // const array= [res[1].data.filename,res[2].data.filename,res[3].data.filename]
    
   
  };
  

  const handleSave= (e,id)=>{
    const formData= {name,model,price,quantity,color,thumbnail,description,category}
    e.preventDefault()
  dispatch(fetchEdit({id,formData}))
  .then(unwrapResult)
        .then(() => {
          toast.success("ویرایش کالا با موفقیت انجام شد", {
            position: toast.POSITION.BOTTOM_RIGHT,

          });
          dispatch(fetchProduct());
        });
      }
      // SetImage('frfrfrmr')
      // console.log(image)
      console.log(category)
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

        <form className={classes.form} onSubmit={(e)=>handleSave(e,product.id)}>
          <Grid container spacing={2}>
            <Grid item md={12}>
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
            <Grid item md={6} sx={{ display: "flex", gap: "5px" }}>
              <Avatar alt="image" src={src[0]} variant="rounded" />
              <Avatar alt="image" src={src[1]} variant="rounded" />
              <Avatar alt="image" src={src[2]} variant="rounded" />
              <Avatar alt="image" src={src[3]} variant="rounded" />
            </Grid>

            <Grid item md={6}>
              <Typography>نام کالا:</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>دسته بندی:</Typography>
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                className={classes.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </Grid>
            <Grid item md={6} className={classes.input}>
              <select
                className={classes.input}
                onChange={(e) => { setCategory(e.target.value);}}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item md={6}>
              <Typography>مدل:</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>قیمت:</Typography>
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                className={classes.input}
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                className={classes.input}
                value={price}
                onChange={(e) => SetPrice(e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <Typography>تعداد:</Typography>
            </Grid>
            <Grid itemmd={6}>
              <Typography>رنگ:</Typography>
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                className={classes.input}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                className={classes.input}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Typography>توضیحات:</Typography>
            </Grid>
            <Grid item md={12}>
              <CKEditor
                data={description}
                className={classes.ckEditor}
                editor={ClassicEditor}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" className={classes.btn} variant={"outlined"}>
            ذخیره
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default EditModal;
