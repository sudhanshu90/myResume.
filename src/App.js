import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./components/LandingPage";
import "./index.css";

const theme = createTheme({});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
