import { Flex, Heading, Spacer, Button, Text } from '@chakra-ui/react'
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
                    <Button colorScheme='teal' variant='ghost'>
                        <Text fontSize='1xl'>Login</Text>
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        <Text fontSize='1xl'>Register</Text>
                    </Button>
                </Flex>
            </div>
        </>
    );
}

export default Navbar;