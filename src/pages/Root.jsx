 import { Box, } from '@mui/material';
 import APPBAR from 'mui-components/APP_BAR';
import DRAWER from 'mui-components/DRAWER';
import { Outlet } from 'react-router-dom';
 


    const drawerWidth = 240;

const Root = () => {
  return (
    <>
 
      <APPBAR drawerWidth={drawerWidth}/>
      
      <DRAWER drawerWidth={drawerWidth}/>

      <Box component={'main'}  sx={{ ml: `${drawerWidth}px`,
        display:"flex" ,justifyContent:"center"
    }} >
          <Outlet  />
      </Box>
       
    </>
  );
}

export default Root;
 
