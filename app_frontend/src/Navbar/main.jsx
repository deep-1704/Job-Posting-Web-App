import { Flex, Heading, Spacer, Divider} from '@chakra-ui/react'
import AuthButtons from "./components/authButtons";
import ProfileButton from './components/profileButton';
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

function Navbar() {
    let isAuthenticated = false;
    if (localStorage.getItem("token")) {
        isAuthenticated = true;
    }
    return (
        <>
            <div className={styles.navbar_container} >
                <Flex>
                    <Heading as='h1' size='2xl' noOfLines={1} color='#045149' onClick={() => window.location.href = "/"} cursor='pointer'>
                        OpenSkill
                    </Heading>
                    <Spacer />
                    {isAuthenticated? <ProfileButton /> : <AuthButtons />}
                </Flex>
            </div>
            <Divider />
            <Outlet />
        </>
    );
}

export default Navbar;