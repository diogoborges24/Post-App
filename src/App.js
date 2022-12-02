
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
    
  return (
    <div className="App">
     
     <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">     
            <Button>Diogo</Button>
            </Box>
    </div>
  );
}

export default App;
