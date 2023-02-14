import { Box, Button, InputAdornment, styled, TextField } from '@mui/material';
import './Create';
 import { purple } from '@mui/material/colors';
import { ChevronRight } from '@mui/icons-material';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Create = () => {
  return (
    <Box mt="50px"  component={'form'}>
    
      <TextField
      fullWidth
          label="Transaction title"
           sx={{ mt: 2, width: '360px',display:"block", }}
          InputProps={{
            startAdornment: <InputAdornment position="start">fffff</InputAdornment>
          }}
          variant="filled"
        />

      <TextField
          fullWidth
          label="With normal TextField"
          sx={{ mt: 2, width: '360px',display:"block", }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />

          <ColorButton sx={{mt:3}} variant="contained">
              Custom CSS <ChevronRight/>
          </ColorButton> 
       </Box>
  );
}

export default Create;

