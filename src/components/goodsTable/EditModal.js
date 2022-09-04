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
import { useFormik } from "formik"
import {schema} from '../../yup/schemaModal'

// //////////////////////////////////////////////////////////////////
function EditModal({ openedit, handleCloseEdit, product }) {
  // definding variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [price, SetPrice] = useState(product.price);
  const [model, setModel] = useState(product.model);
  const [quantity, setQuantity] = useState(product.quantity);
  const [color, setColor] = useState(product.color);
  const [image, SetImage] = useState([product.image[0]]);
  const [category, setCategory] = useState(product.category);
  const [thumbnail, setThumbnail] = useState(product.thumbnail);
  const [description, setDescription] = useState(product.description);
  const [src, setSrc] = useState([]);
  const { categories } = useSelector((state) => state.category);
  
const {values,handleChange,errors} = useFormik({
  initialValues: {
    name: product.name,
    model:product.model,
    price:product.price,
    quantity:product.quantity,
    color:product.color,
    thumbnail:product.thumbnail,
    description:product.description,
    category:product.category,
    image1:(product.image)[0],
    image2:(product.image)[1],
    image:(product.image)[2
    ],
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
    SetImage([
      res[1].data.filename,
      res[2].data.filename,
      res[3].data.filename,
    ]);
  };

  const handleSave = (e, id) => {
    const formData = {
      name,
      model,
      price,
      quantity,
      color,
      thumbnail,
      description,
      category,
      image,
    };
    e.preventDefault();
    dispatch(fetchEdit({ id, formData }))
      .then(unwrapResult)
      .then(() => {
        toast.success("ویرایش کالا با موفقیت انجام شد", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProduct());
      });
    handleCloseEdit();
  };
 
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

        <form
          className={classes.form}
          onSubmit={(e) => handleSave(e, product.id)}
        >
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
              <Avatar name='thumbnail' alt="image" src={src[0]} variant="rounded" onChange={handleChange} />
              <Avatar name='image1' alt="image"  src={src[1]} variant="rounded" onChange={handleChange}/>
              <Avatar alt="image2" src={src[2]} variant="rounded" onChange={handleChange}/>
              <Avatar alt="image3" src={src[3]} variant="rounded" onChange={handleChange}/>
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography>نام کالا:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>دسته بندی:</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <input
              name='name'
                type="text"
                className={classes.input}
                value={values.name}
                onChange={(e) => {setName(e.target.value)
                  handleChange()}}
              ></input>
            </Grid>
            <Grid item md={6} xs={12} className={classes.input}>
              <select
                className={classes.input}
                value={values.category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  
                }}
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
                name='model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="text"
                className={classes.input}
                value={price}
                name='price'
                onChange={(e) => SetPrice(Number(e.target.value))}
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
                className={classes.input}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <input
                type="text"
                className={classes.input}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography>توضیحات:</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <CKEditor
                data={description}
                className={classes.ckEditor}
                editor={ClassicEditor}
                onChange={(e, editor) => setDescription(editor.getData())}
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
