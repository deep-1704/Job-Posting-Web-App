import { Flex, Heading, Spacer} from '@chakra-ui/react'
import AuthButtons from "./components/authButtons";
import ProfileButton from './components/profileButton';
import styles from "./styles.module.css";

function Navbar() {

    return (
        <>
            <div className={styles.navbar_container}>
                <Flex>
                    <Heading as='h1' size='2xl' noOfLines={1} color='#045149'>
                        OpenSkill
                    </Heading>
                    <Spacer />
                    {true? <ProfileButton fullName="Deep Prajapati" /> : <AuthButtons />}
                </Flex>
            </div>
        </>
    );
}

export default Navbar;