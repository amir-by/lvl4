import { Home,Create,Person2,Settings,Logout, } from "@mui/icons-material";
import { Divider, Drawer, Toolbar,List, ListItemButton, ListItemText, ListItemIcon, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
 
 
const DRAWER = ({drawerWidth}) => {
   const navigate = useNavigate()
  return (
    
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
       
         <Divider />

         <List>

           
            <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/')} >
                  <ListItemIcon>
                    <Home/>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
         
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('/create')} >
                  <ListItemIcon>
                    <Create/>
                  </ListItemIcon>
                  <ListItemText primary="Create" />
                </ListItemButton>
            </ListItem>
   
           
            <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/profile')} >
                  <ListItemIcon>
                    <Person2/>
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
         
  

             <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('/settings')} >
                  <ListItemIcon>
                    <Settings/>
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
            </ListItem>
   

         </List>
      
      </Drawer>
  );
}

export default DRAWER;
