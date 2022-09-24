import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles({
container:{
    padding:'30px',
    display:'flex',
   gap:'40px'
    
},
imagesContainer:{
 display:'flex',gap:'40px'

},
smallImagesContainer:{
    display:'flex',
    flexDirection:'column',
    gap:'5px'
},
smallImage:{
    width: "100px",
    height: "100px",
    border: "2px solid rgb(238,225,242)",
    '&:hover':{
        cursor:'pointer',
        transform: 'scale(1.02)',
    
      },
      borderRadius:'5px'
},
bigImage:{
    width: "300px",
    height: "300px",
    border: "5px solid rgb(238,225,242)",
    borderRadius:'5px'
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