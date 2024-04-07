import { Flex, Heading, Spacer, Button, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react'
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
                    <Flex gap='5'>
                        <Button colorScheme='green' variant='outline' size='lg' >Log In</Button>
                        <Menu>
                            <MenuButton as={Button} colorScheme='green' variant='solid' size='lg'>
                                Sign Up
                            </MenuButton>
                            <MenuList>
                                <MenuItem>I'm looking for a job</MenuItem>
                                <MenuItem>I'm looking for candidates</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

export default Navbar;