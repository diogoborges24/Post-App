import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Threads from "./Threads";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <Threads></Threads>
    </div>
  );
}

export default App;
