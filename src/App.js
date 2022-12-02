import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Threads from "./Threads";
import Post from "./Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <BrowserRouter>

      
      
    <Routes>
            <Route path="/" >
            <Route index element={<Threads />} />
                <Route path="post" element={<Post />} />
            </Route>
        </Routes>



      </BrowserRouter>
    </div>
  );
}

export default App;
