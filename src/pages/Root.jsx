 import { Box, Typography } from '@mui/material';
 import APPBAR from 'mui-components/APP_BAR';
import DRAWER from 'mui-components/DRAWER';
import { Outlet } from 'react-router-dom';
 


    const drawerWidth = 240;

const Root = () => {
  return (
    <>
 
      <APPBAR drawerWidth={drawerWidth}/>
      
      <DRAWER drawerWidth={drawerWidth}/>

      <Box   sx={{ ml: `${drawerWidth}px`, color:'red', border:'2px solid red',
        display:"flex" ,justifyContent:"center"
    }} >
          <Outlet  />
      </Box>
       
    </>
  );
}

export default Root;
 
