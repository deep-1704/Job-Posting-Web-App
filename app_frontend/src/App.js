import Navbar from "./Navbar/main";
// import LandingPage from "./Landing_page/main";
// import Login from "./Auth_pages/login";
// import Signup from "./Auth_pages/signup";
import JobSeekerDashboard from "./Job_seeker_pages/main";


function App() {
  return (
    <>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <Signup user_role='job_seeker'/> */}
      <JobSeekerDashboard />
    </>
  );
}

export default App;
