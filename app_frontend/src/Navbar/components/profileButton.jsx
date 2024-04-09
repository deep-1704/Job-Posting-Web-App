import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    Flex,
    Text,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import JSProfileEditDrawer from './JSProfileEdit';
import JPProfileEditDrawer from './JPProfileEdit';

function ProfileButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    let userObject = {
        "username": "lemonade69",
        "full_name": "Deep Prajapati",
        "email": "dp12455163@gmail.com",
        "phone": 7436005772,
        "user_role": "job_poster",
        "gender": "Male",
        "company_name": "Google",
        "position": "Sr. Software Engineer",
        "linkedIn_url": "https://www.linkedin.com/in/deep1704/"
    }

    return (
        <Menu>
            <MenuButton size='lg' as={Button} rightIcon={<ChevronDownIcon />}>
                <Flex gap={3} alignItems='center'>
                    <Avatar size='sm' src='https://bit.ly/broken-link' />
                    <Text>{userObject.full_name}</Text>
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem onClick={onOpen}>Edit profile</MenuItem>
                <MenuItem color='red'>Logout</MenuItem>
            </MenuList>

            {/* Drawer */}
            <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' fontSize='5xl' color='#003a37'>Edit profile</DrawerHeader>
                    <DrawerBody>
                        {userObject.user_role === 'job_seeker' ? <JSProfileEditDrawer userObject={userObject} /> : <JPProfileEditDrawer userObject={userObject} />}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Menu>
    );
}

export default ProfileButton;