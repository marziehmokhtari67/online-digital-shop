import {InputBase,IconButton }from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { styled} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius:'10px',
    backgroundColor: 'rgb(240,240,241)',
    padding: "5px",
    marginLeft: 0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      padding:'5px'
    },
  }));

  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: "5px",
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      // [theme.breakpoints.up('sm')]: {
      //   width: '12ch',
      //   '&:focus': {
      //     width: '20ch',
      //   },
      // },
    },
  }));
export default function SearchBar(){
  const [queryString,setQueryString]=React.useState('')
  
  const navigate=useNavigate()
  const handleSearch=()=>{
localStorage.setItem('queryString',queryString)
navigate(`/search/${queryString}`)
  }
 return(   <Search>
          <StyledInputBase
              placeholder="جستجو…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setQueryString(e.target.value)}
            />
            <IconButton onClick={handleSearch}>
            <SearchIcon />
            </IconButton>
             
    </Search>)
}
