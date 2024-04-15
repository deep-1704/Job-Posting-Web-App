import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/main";
import LandingPage from "./Landing_page/main";
import Login from "./Auth_pages/login";
import Signup from "./Auth_pages/signup";
import JobSeekerDashboard from "./Job_seeker_pages/main";
import JobPosterDashboard from "./Job_poster_pages/main";


function App() {
  // let userType = localStorage.getItem("userType");
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/:user_role" element={<Signup />} />
        <Route path="/:username/dashboard" element={
          localStorage.getItem("userType") === "job_seeker" ? <JobSeekerDashboard /> : <JobPosterDashboard />
        } />
      </Route>
    </Routes>
  );
}

export default App;
