import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles({
appbar:{
    background: 'linear-gradient(to right, #fff7fa , #fef2ee , #eee1f3 100% )',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
   
    padding: "5px 40px" ,
    
    
},
toolbar:{
    justifyContent: "space-between",
},
rightBox:{
    display: "flex", gap: "20px", alignItems: "center" 
},
logoBox:{
    width: "25%", borderRadius: "10px",
},
name:{
    fontFamily:"title",
    color:'black' ,
},
leftBox:{
    display: "flex", gap: "20px", alignItems: "center" 
},
leftBoxLink:{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    textDecoration: "none",
    color:"#4527a0",
    fontFamily:"iran",
},


})
