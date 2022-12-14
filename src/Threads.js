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
import agent from "./data/agent";
import { useState, useEffect } from "react";
import ThreadComp from "./ThreadComponent";

const theme = createTheme();

const Thread = () => {
  const [threads, setThread] = useState([{title: "max"}])
  let fetchTodo = async () => {
    const res = await agent.thread.getAll()
    console.log(res.data)
    setThread(res.data)
    return res.data.data
        
       };

  useEffect(() => {
    fetchTodo()
    console.log(threads)
  },[])
  
  
  

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > <Button
      type="new"
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      href="newt"
      id="newthread"
    >
      new
    </Button>
        <Typography component="h1" variant="h5">
         Threads
        </Typography>
        {
          threads.map(thread => <ThreadComp thread={thread}></ThreadComp>)
        }
        
      </Box>
    </Container>
  );
}

export default Thread;
