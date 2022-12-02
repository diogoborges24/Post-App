import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

//Images
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const theme = createTheme();

export default function Post() {
    const [age, setAge] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  
  
 
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Post
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>

            <Grid item xs={12}>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Category
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'category',
            id: 'uncontrolled-native',
          }}
        >
            {/*thread name + question/suggestion/clarification) */}
          <option value={10}>Name + Question</option>
          <option value={20}>Name + suggestion</option>
          <option value={30}>Name + clarification</option>
        </NativeSelect>
      </FormControl>
    </Box>






            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="body"
                label="body"
                type="body"
                id="body"
                autoComplete="body"
              />
            </Grid>
            <Img width={200} alt="complex" src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="IN"
          >
            Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
