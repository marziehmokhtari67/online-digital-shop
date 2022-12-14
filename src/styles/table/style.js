import { makeStyles } from '@mui/styles'
export const useStyles=makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'column',
       
        alignItems:'center'
    },
header:{
    flexGrow: 1, 
    color:'inherit',
    width:'100%',
},
toolBar:{
justifyItems:'center',
color: "black",
justifyContent: "space-between",
backgroundColor:'white',
padding: "2% 11%",
},
tableContainer:{
  display:'flex',
  justifyContent:'center',
  height:'80%'
    
},
table:{
    maxWidth:'80%',

    
},
pagination:{
position:'fixed',
bottom:'20px',
[theme.breakpoints.down('md')]: {
    position:'static',
    margin:'10px 0'
  },
    
},
buttonsContainer:{
    flexDirection:'row',
    [theme.breakpoints.down('md')]: {
        flexDirection:'column',
        gap:'5px'
      },

}
    
}))