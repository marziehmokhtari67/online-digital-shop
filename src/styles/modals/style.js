import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme)=>({
    container:{
    display:'flex',
    flexDirection:'column',
    // gap:'5px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(255 ,255, 255)',
    border: '3px solid #ba68c8',
    boxShadow: 24,
    padding:'5px 10px',
   width:'600px',
   
    [theme.breakpoints.down('sm')]:{
       
        width:"100vw",
        overflowY: "auto",
        maxHeight: "90%",
        
    }
},
header:{
    display:'flex',
    justifyContent:'space-between'
},
table:{
    border:'2px solid rgb(244 244 244)'
},
form:{
    display:'flex',
    flexDirection:'column',
    fontFamily:'Vazir-Medium',
    textAilgn:'right',
    fontSize:'12px',
   
},
input:{
    fontFamily:'Vazir-Medium',
    padding:'2px '  
},
btn:{
width:'10%',

},



}))


