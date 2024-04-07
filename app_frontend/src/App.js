import Navbar from "./Navbar/main";
// import LandingPage from "./Landing_page/main";
import Login from "./Auth_pages/login";


function App() {
  return (
    <>
      <Navbar />
      {/* <LandingPage /> */}
      <Login user_role='job_seeker'/>
    </>
  );
}

export default App;
