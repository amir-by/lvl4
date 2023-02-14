import { AppBar, Avatar, Link, Toolbar, Typography } from "@mui/material";

 



const APPBAR = ({drawerWidth}) => {
  return (
    <AppBar position="static" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} >
          <Toolbar>
        
            <Link     sx={{flexGrow:1,cursor:"pointer" ,"&:hover":{fontSize:"18px"}   }} underline='none' color='inherit' href='#'>
              Express 
              </Link> 
  
           <Typography mr={1} variant="body1" color="inherit">
            Amir BY
           </Typography>
         <Avatar sx={{height:"50px",width:"50px"}} alt="Remy Sharp" src=".\images\me.jpg" />
 

          </Toolbar>

      </AppBar>
  );
}

export default APPBAR;
