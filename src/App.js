import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ChooseTemplates from "./component_parts/templates/ChooseTemplates";
import NotExist from "./component_parts/404/NotExist";
import ResumePage from "./components/ResumePage";
import AuthProvider from "./component_parts/auth/Context/AuthProvider";
import ProtectRoute from "./component_parts/auth/Context/ProtectRoute";
import PersonalDetails from "./CreateResume/PersonalDetails";
import EducationalDetails from "./CreateResume/EducationalDetails";
import FormDataProvider from "./component_parts/sharedComponent/Context/FormDataProvider";
import { SnackbarProvider } from "notistack";

const theme = createTheme();
function App() {
  const loggedIn = JSON.parse(localStorage.getItem("data"));
  return (
    <BrowserRouter>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <AuthProvider>
          <FormDataProvider>
            <ThemeProvider theme={theme}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<NotExist />} />
                <Route
                  path="/"
                  element={
                    <ProtectRoute>
                      <ResumePage />
                    </ProtectRoute>
                  }
                >
                  <Route
                    path="personal_details"
                    element={<PersonalDetails />}
                  />
                  <Route
                    path="educational_details"
                    element={<EducationalDetails />}
                  />
                </Route>
                <Route
                  path="choose_templates"
                  element={
                    <ProtectRoute>
                      <ChooseTemplates />
                    </ProtectRoute>
                  }
                />
              </Routes>
            </ThemeProvider>
          </FormDataProvider>
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
