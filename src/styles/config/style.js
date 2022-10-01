import { createTheme } from "@mui/material";
import {faIR} from "@mui/material/locale"


export const theme = createTheme({
    typography: {
      fontFamily: 
        "Vazir-Medium",
        flexGrow: 1,
        fontSize:14, 
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 710,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    direction:'rtl',
    tableCell:{
        fontFamily: 
        "Vazir-Medium", 
    },
   
    
   
  },faIR);
 