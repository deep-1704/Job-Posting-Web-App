import { Flex, Button, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react'

function AuthButtons() {
    return (
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
    );
}

export default AuthButtons;