import Navbar from "./Navbar/main";
// import LandingPage from "./Landing_page/main";
// import Login from "./Auth_pages/login";
import Signup from "./Auth_pages/signup";


function App() {
  return (
    <>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Login /> */}
      <Signup user_role='job_seeker'/>
    </>
  );
}

export default App;
