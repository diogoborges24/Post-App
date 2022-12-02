import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Threads from "./Threads";
import Post from "./Post";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <Threads></Threads>
      <Post></Post>
    </div>
  );
}

export default App;
