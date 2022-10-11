import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    container:{
        padding: "30px"
    },
    input:{
        fontFamily: "Vazir-Medium",
        padding: "5px",
        margin: "5px 0px",
        width: "80%",
      },
     inputContainer:{height:'15vh',
     marginBottom:'5px',
     [theme.breakpoints.down('sm')]:{
        height:'20vh'
     }
    } 
}))