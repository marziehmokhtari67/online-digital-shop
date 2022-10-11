import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme)=>({
  container :{
padding: "20px 40px",
display:'flex',
flexDirection:'column',
[theme.breakpoints.down('sm')]:{
  padding:'10px'
}
},
  table:{
    
        maxWidth:'80%',
        margin:'10px auto',
       

  },
  row:{
    [theme.breakpoints.down('sm')]:{
      padding:'0'
    }
  },
  modal:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:100,
  border: '3px solid  #eee1f3',
  backgroundColor: 'rgb(255 ,255, 255)',
  boxShadow: 24,
  padding:'10px',
  [theme.breakpoints.down('sm')]:{
    width:'250px',
    height:'100px',
    left: '55%'
  }
  
},

buttonsContainer:{
display:'flex',gap:'5px',

  [theme.breakpoints.down('sm')]:{
      display:'flex',
      flexDirection:'column',
      marginTop:'10px',
    
  }
},
lastRow:{
    display: "flex",
    justifyContent: "space-around",
    alignItems:'center',
    marginTop: "30px",
    [theme.breakpoints.down('sm')]:{
      display:'flex',
      flexDirection:'column'
  }
  }

}))