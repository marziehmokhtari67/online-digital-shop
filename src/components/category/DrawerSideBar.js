import React,{ useEffect, useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import {Button,List,Divider,ListItem,ListItemText,SwipeableDrawer} from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "./../../redux/reducer/categorySlice"
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    container:{
        display:'none',
        padding:'0',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            padding:'0px 20px',
            marginBottom:'0px'
        }
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));
function DrawerSideBar() {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const classes = useStyles();
    const [state, setState] = useState({
     
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
<div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.map((category) => (
          <ListItem button key={category.id}>
        <NavLink
              to={`/category/${category.id}`}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#d81159" : "blue",
              })}
            >
              <ListItemText primary={category.name} />
            </NavLink>
            
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

    useEffect(() => {
        dispatch(fetchCategory());
       
      }, [dispatch]);
  return (
   <div className={classes.container}>
   <Button onClick={toggleDrawer('فهرست عناوین', true)}>فهرست عناوین</Button>
          <SwipeableDrawer
            anchor={'فهرست عناوین'}
            open={state['فهرست عناوین']}
            onClose={toggleDrawer('فهرست عناوین', false)}
            onOpen={toggleDrawer('فهرست عناوین', true)}
          >
            {list('فهرست عناوین')}
          </SwipeableDrawer>
   </div>
  )
}

export default DrawerSideBar

