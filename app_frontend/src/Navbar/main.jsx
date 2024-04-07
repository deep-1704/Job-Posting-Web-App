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
                        <Menu>
                            <MenuButton as={Button} colorScheme='green' variant='outline' size='lg'>
                                Log In
                            </MenuButton>
                            <MenuList>
                                <MenuItem>For Job Seekers</MenuItem>
                                <MenuItem>For Recruiters</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton as={Button} colorScheme='green' variant='solid' size='lg'>
                                Sign Up
                            </MenuButton>
                            <MenuList>
                                <MenuItem>For Job Seekers</MenuItem>
                                <MenuItem>For Recruiters</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

export default Navbar;