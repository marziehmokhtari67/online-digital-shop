// import React, { useEffect, useState, useCallback } from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
// import {
//   Box,
//   IconButton,
//   Typography,
//   Button,
//   Avatar,
// } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import CancelIcon from "@mui/icons-material/Cancel";
// import { useStyles } from "./../../styles/modals/style";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategory } from "./../../redux/reducer/categorySlice";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import instance from "./../../API/http";
// import { fetchAdd, fetchProduct } from "./../../redux/reducer/productSlice";
// import { unwrapResult } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import clsx from 'clsx';
// import { styled } from '@mui/system';
// import ModalUnstyled from '@mui/base/ModalUnstyled'
// import { schema } from "../../yup/schemaModal";
// import {Form,Formik} from 'formik'
// import {Modal,Backdrop} from './../../styles/modals/style'
// // ////////////////////////////////////////////////////////////////////////////////////////////////
// function AddModal({ open, handleCloseAdd }) {
//   // definding variables
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const [image, setImage] = useState("");
//   const [thumbnail, setThumbnail] = useState("");
//   const handleSave = (values,props) => {
    
    

  // console.log(values)
  //      dispatch(fetchAdd(formData))
  //         .then(unwrapResult)
  //         .then(() => {
  //           toast.success("اضافه کردن کالا با موفقیت انجام شد", {
  //             position: toast.POSITION.BOTTOM_RIGHT,
  //           });
  //           dispatch(fetchProduct());
  //         })
  //     : alert("دیتای وارد شده صحیح نمیباشد");
  //   data.name = "";
  //   data.model = "";
  //   setImage([]);
  //   setThumbnail("");
  //   data.price = "";
  //   data.color = "";
  //   data.quantity = "";
  //   data.category = "";
  //   data.description = "";
  //   setSrc("");
  //   handleCloseAdd();
  // };
 
  // const [src, setSrc] = useState([]);
  
  // const { categories } = useSelector((state) => state.category);
  // const initial ={ name: "",
  // model: "",
  // price: "",
  // quantity: 0,
  // color: "",
  // thumbnail: "",
  // description: "",
  // category: 1,
  // image1: "",
  // image2: "",
  // image3: ""}
  // const errors={
    
  // }
   
  // // defindinf functions
  // useEffect(() => {
  //   dispatch(fetchCategory());
  // }, [dispatch]);

  // const handleUpload = async (e) => {
  //   const selectedFIles = [];
  //   const targetFiles = e.target.files;

  //   const targetFilesObject = [...targetFiles];
  //   targetFilesObject.map((file) => {
  //     return selectedFIles.push(URL.createObjectURL(file));
  //   });
  //   setSrc(selectedFIles);

  //   const requests = Array.from(targetFiles).map((item) => {
  //     const form = new FormData();
  //     form.append("image", item);
  //     return instance.post("/upload", form);
  //   });
  //   const res = await Promise.all(requests);
  //   setThumbnail(res[0].data.filename);
  //   setImage([
  //     res[1].data.filename,
  //     res[2].data.filename,
  //     res[3].data.filename,
  //   ]);
  // };



const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '2px solid currentColor',
  padding: '16px 32px 24px 32px',
});

export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open modal
      </button> */}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={true}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">Text in a modal</h2>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </Box>
      </Modal>
    </div>
  );
}



  // return (
   
//     <Modal components={{Backdrop}}
//       open={open}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//        <Formik 
//       initialValues={initial}
//       validationSchema={schema}
//       onSubmit={handleSave}
      
    
//       >;
//       {(props)=>(
//       <Box className={classes.container}>
//         <Box className={classes.header}>
//           <Typography>افزودن/ویرایش</Typography>
//           <IconButton onClick={handleCloseAdd} color={"primary"}>
//             <CancelIcon />
//           </IconButton>
//         </Box>

//         <Form
//           className={classes.form}
        
//           autoComplete="off"
//         >
//           <Grid container spacing={2}>
//             <Grid item md={12} xs={12}>
//               <Typography>تصویر کالا:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <input
//                 type="file"
//                 multiple
//                 md={6}
//                 onChange={(e) => handleUpload(e)}
//               />
//             </Grid>
//             <Grid item md={6} xs={12} sx={{ display: "flex", gap: "5px" }}>
//               <Avatar alt="image" src={src[0]} variant="rounded" />
//               <Avatar alt="image" src={src[1]} variant="rounded" />
//               <Avatar alt="image" src={src[2]} variant="rounded" />
//               <Avatar alt="image" src={src[3]} variant="rounded" />
//             </Grid>

//             <Grid item md={6} xs={12}>
//               <Typography>نام کالا:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <Typography>دسته بندی:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <input
//                 type="text"
//                 className={classes.input}
//                 value={props.values.name}
//                 onChange={props.handleChange}
//                 name="name"
//               />
//             </Grid>
//             <Grid item md={6} xs={12} className={classes.input}>
//               <select
//                 className={classes.input}
//                 value={Number(props.values.category)}
//                 name="category"
//                 onChange={props.handleChange}
//               >
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.id}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <Typography>مدل:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <Typography>قیمت:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <input
//                 type="text"
//                 className={classes.input}
//                 value={props.values.model}
//                 name="model"
//                 onChange={props.handleChange}
//               />
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <input
//                 type="text"
//                 name="price"
//                 className={classes.input}
//                 value={props.values.price}
//                 onChange={props.handleChange}
//               />
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <Typography>تعداد:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <Typography>رنگ:</Typography>
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <input
//                 type="number"
//                 name="quantity"
//                 className={classes.input}
//                 value={props.values.quantity}
//                 onChange={props.handleChange}
//               />
//             </Grid>
//             <Grid item md={6} xs={12}>
//               <input
//                 type="text"
//                 name="color"
//                 className={classes.input}
//                 value={props.values.color}
//                 onChange={props.handleChange}
//               />
//             </Grid>
//             <Grid item md={12} xs={12}>
//               <Typography>توضیحات:</Typography>
//             </Grid>
//             <Grid item md={12} xs={12}>
//               <CKEditor
//                 id="description"
//                 data={props.values.description}
//                 className={classes.ckEditor}
//                 editor={ClassicEditor}
//                 onChange={(event, editor) => {
//                  props.setFieldValue("description", editor.getData());
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Button type="submit" className={classes.btn} variant={"outlined"}>
//             ذخیره
//           </Button>
//           {errors ? <p>mvdondo</p> : <p></p>}
//         </Form>
//       </Box>
//       )}
//       </Formik>
//     </Modal>
//   );
// }

// export default AddModal;
