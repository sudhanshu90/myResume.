import "./index.css";
import { Route, Routes } from "react-router-dom";
import NotExist from "./component_parts/404/NotExist";
import ProtectRoute from "./component_parts/auth/Context/ProtectRoute";
import SignIn from "./component_parts/auth/SignIn";
import Signup from "./component_parts/auth/Signup";
import Logout from "./component_parts/auth/Logout";
import LayoutPage from "./components/Landing_page/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotExist />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<LayoutPage />} />
      <Route
        path="/"
        element={<ProtectRoute>{/* <ResumePage /> */}</ProtectRoute>}
      >
        {/* <Route path="personal_details" element={<PersonalDetails />} /> */}
        <Route
          path="educational_details"
          // element={<EducationalDetails />}
        />
      </Route>
      <Route
        path="choose_templates"
        element={<ProtectRoute>{/* <ChooseTemplates /> */}</ProtectRoute>}
      />
    </Routes>
  );
}

export default App;
