
import { Close } from '@mui/icons-material';
import { Box, Paper, Typography, IconButton, } from '@mui/material';
import './Home';

const Home = () => {
  return (
    <Box mt="50px" >
      <Paper sx={{ width:"366px",display:"flex",justifyContent:"space-between", pt:5,pb:2, pr:2,pl:2,
    position:"relative"}}>

          <Typography variant="body1" color="initial">GYM</Typography>
          <Typography sx={{fontFamily:"monospace", fontWeight:"800"}} variant="body1" color="initial">$100</Typography>
          
          <IconButton sx={{position:"absolute",top:0,right:0, }}>
            <Close sx={{fontSize:"20px"}} />
          </IconButton>

      </Paper>
    </Box>
  );
}

export default Home;
