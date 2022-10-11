import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        padding:'20px 40px',
        gap:'100px',
        [theme.breakpoints.down("sm")]: {
        gap:'30px',
        padding:'20px 20px'
        
      },
    },
sideBar:{
    width:'20%',
    padding:'10px 5px 0px',
    borderLeft:'5px solid #ba68c8',
    [theme.breakpoints.down("sm")]: {
        width:"40%",
        
      },

}

}))