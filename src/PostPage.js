import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Threads from "./Threads";
import Post from "./Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreadComponent from "./Threads";

const PostPage = ({posts}) => {
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
         Threads
        </Typography>
        {
          posts.map(post => <PostComponent post={post}></PostComponent>)
        }
        
      </Box>
    </Container>
}

export default PostPage