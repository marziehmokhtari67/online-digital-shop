import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme)=>({
appbar:{
    background: 'linear-gradient(to right, #fff7fa , #fef2ee , #eee1f3 100% )',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "5px 40px" ,
    
    
},
toolbar:{
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        display:"flex",
        flexDirection:'column'
      },
},
rightBox:{
    display: "flex", gap: "20px", alignItems: "center" 
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


}))
