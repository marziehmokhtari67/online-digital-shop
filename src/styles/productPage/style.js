import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles((theme)=>({
container:{
    padding:'30px',
    display:'flex',
    width:'300px',
   gap:'40px',
   
   [theme.breakpoints.down('sm')]:{
    display:'flex',
    flexDirection: 'column',
    gap:'1px',
    padding:'10px'
    
}
},
imagesContainer:{
 display:'flex',gap:'40px',
 
 [theme.breakpoints.down('sm')]:{
    display:'flex',
    flexDirection: 'column-reverse'
 }

},
smallImagesContainer:{
    display:'flex',
    flexDirection:'column',
    
    gap:'5px',
    [theme.breakpoints.down('sm')]:{
        width:'80vw',
        display:'flex',
        flexDirection:'row',
     }
    
},
smallImage:{
    width: "100px",
    height: "100px",
    border: "2px solid #ba68c8",
    '&:hover':{
        cursor:'pointer',
        transform: 'scale(1.02)',
    
      },
      borderRadius:'5px'
},
bigImage:{
    width: "300px",
    height: "300px",
    borderRadius:'5px',
   
},
info:{
   padding:'30px 5px',
},
detail:{
    position:'static',
    paddingTop:'40px',
    paddingRight:'10px',
    right:'550px'
},
form:{
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    marginTop:'30px'
},
input:{
    padding:'5px',
    [theme.breakpoints.down('sm')]:{
        width:'70%'
     }
},
btn:{
    padding:'5px',
    [theme.breakpoints.down('sm')]:{
        width:'70%'
     }
},
error:{
    color:'red',
    height:'5vh',
    width:'220px',
    fontSize:'5',
    
},
portal:{
    position:'fixed',
    
    bottom:'30%',
    right:'60%',
    zIndex:'50',
    border:'2px solid #ba68c8',
    [theme.breakpoints.down('sm')]:{
        display:'none',
       
        
    }
    
}


}))