import Navbar from "../Navbar/main";
import IntroTagLine from "./components/introTagLine";
import Numbers from "./components/numbers";
import Competencies from "./components/competencies";

function LandingPage() {
    return (
        <>
            <Navbar />
            <IntroTagLine />
            <Numbers />
            <Competencies />
        </>
    )
}

export default LandingPage;