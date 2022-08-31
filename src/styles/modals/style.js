import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme)=>({
    container:{
    display:'flex',
    flexDirection:'column',
        gap:'10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    hight:500,
    backgroundColor: 'rgb(255 ,255, 255)',
    border: '3px solid #eee1f3',
    boxShadow: 24,
    padding:'10px',
    [theme.breakpoints.down('sm')]:{
        width:'100vw',
        height:'100vh',
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
    gap:'10px',
    fontFamily:'Vazir-Medium',
    textAilgn:'right',
    fontSize:'12px',
   
},
input:{
    fontFamily:'Vazir-Medium',
    padding:'5px'  
},
btn:{
width:'10%'
},
ckEditor:{
    width:'500px'
}


}))