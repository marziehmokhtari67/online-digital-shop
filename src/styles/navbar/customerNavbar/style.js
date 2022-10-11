import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme)=>({
appbar:{
    background: 'linear-gradient(to right, #fff7fa , #fef2ee , #eee1f3 100% )',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "5px 40px" ,
   
   
    [theme.breakpoints.down("sm")]: {
        padding: "8px 5px" ,
       maxWidth:'100vw',
        margin:'0',
       
      },
},
toolbar:{
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        display:"flex",
        flexDirection:'column',
        gap:'5px'
      },
     
},
rightBox:{
    display: "flex", gap: "20px", alignItems: "center", 
    [theme.breakpoints.down("sm")]: {
        width:'100%',
        justifyContent: "space-between",
      },
},
nameBox:{
    display:'flex',
    gap:'10px',
    alignItems:'center'
},
menu:{

[theme.breakpoints.up("sm")]: {
    display:"none",
   
  },
 

},
logoBox:{
 borderRadius: "50%",border:'6px solid rgb(240,240,241)',
 width:'70px' ,height:'70px'
},
name:{
    fontFamily:"Vazir-Medium",
    color:'blue' ,
    fontStyle:'italic',
    textDecoration:'none',
   
    '&:hover':{
    
      color:'rgb(156,39,176)'
    
      },
},
leftBox:{
    display: "flex", gap: "20px", alignItems: "center",
  
    [theme.breakpoints.down("sm")]: {
        display:"none",
        
      },
        
       
},
leftBoxLink:{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    textDecoration: "none",
    color:'blue',
    fontFamily:"iran",
},


}))
