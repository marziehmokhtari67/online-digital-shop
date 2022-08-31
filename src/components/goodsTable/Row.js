import React from "react";
import { useStyles } from "../../styles/table/style";
import { TableRow, TableCell, Button, Avatar } from "@mui/material";
import { URL } from "./../../API/constant";
import DeletModal from "./DeletModal";
import EditModal from "./EditModal";
function Row({ product, categories }) {
  const classes = useStyles();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openedit, setOpenedit] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenedit = () => setOpenedit(true);
  const handleCloseedit = () => setOpenedit(false);
  return (
    <>
      <TableRow>
        <TableCell align="center">
          <Avatar
            alt="image"
            src={`${URL}/files/${product.thumbnail}`}
            variant="rounded"
          />
        </TableCell>

        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.model}</TableCell>
        <TableCell align="center">
          {categories.find((category) => category.id === product.category).name}
        </TableCell>
        <TableCell align="center" className={classes.buttonsContainer}>
          <Button
            variant="outlined"
            onClick={handleOpenedit}
            
          >
            ویرایش
          </Button>
          <EditModal handleCloseEdit={handleCloseedit} openedit={openedit} product={product}/>
          {/*  */}
          <Button variant="outlined" sx={{ mx: 2 }} onClick={handleOpenDelete}>
            حذف
          </Button>
          <DeletModal
            openDelete={openDelete}
            handleCloseDelete={handleCloseDelete}
            productId={product.id}
      
          />
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;
