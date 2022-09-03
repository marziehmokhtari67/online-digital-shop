import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles({
container:{
    padding:'20px',
    display:'flex',
    // justifyContent:'center',
    gap:'20px'
},
imagesContainer:{
   
},
smallImage:{
    width: "100px",
    height: "100px",
    border: "2px solid rgb(238,225,242)"
},
bigImage:{
    width: "300px",
    height: "300px",
    border: "2px solid rgb(238,225,242)"
},
info:{
   padding:'30px 5px',
},
detail:{
    paddingTop:'40px',
    paddingRight:'10px'
},
form:{
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    marginTop:'30px'
},
input:{
    padding:'5px'
},
error:{
    color:'red',
    
}
})