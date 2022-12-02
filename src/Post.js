import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function Post() {
  const [age, setAge] = React.useState("");
  //Dropdown changes
  
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
              {/**Dropdown */}
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Category
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "category",
                      id: "uncontrolled-native",
                    }}
                  >
                    {/* Category thread name + question/suggestion/clarification) */}
                    <option value={10}>thread.title + Question</option>
                    <option value={20}>thread.title + suggestion</option>
                    <option value={30}>thread.title + clarification</option>
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
            {/**image */}
            {/**  
<div>
<h1>{selects}</h1>
    <select value={selects} onChange={e=>setSelects(e.target.value)}>
        <option>im1</option>
        <option>im2</option>
        <option>im3</option>
    </select>
</div>
*/}

            {/**Button */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="card"
          >
            Post
          </Button>

          
        </Box>
        
      </Box>
      
    </Container>
  );
}
